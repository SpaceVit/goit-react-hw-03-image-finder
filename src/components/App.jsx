import { Component } from 'react';
import { Title, TitleBox, BigPick } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchedImages } from 'services/api';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    largeImageURL: '',
    tag: '',
    showLoadMore: false,
    status: 'idle',
    openModal: false,
  };

  async componentDidUpdate(_, prevState) {
    const perPage = 12;
    const { page, query } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      try {
        this.setState({ status: 'pending' });

        const { hits } = await fetchedImages(query, page, perPage);
        const images = hits;

        if (images.length === 0) {
          this.setState({ status: 'rejected', showLoadMore: false });
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            status: 'resolved',
            showLoadMore: true,
          }));
        }

        if (images.length < perPage) {
          this.setState({ showLoadMore: false });
        }
      } catch (error) {
        alert(error);
      }
    }
  }

  submitForm = async value => {
    this.setState({ query: value, page: 1, images: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  togleModal = () => {
    if (this.state.openModal) {
      this.setState({ openModal: false });
    } else {
      this.setState({ openModal: true });
    }
  };

  openBigPick = (largeImageURL, tag) => {
    this.setState({ largeImageURL, tag });
    this.togleModal();
  };

  render() {
    const {
      status,
      images,
      query,
      showLoadMore,
      openModal,
      largeImageURL,
      tag,
    } = this.state;
    return (
      <div>
        <ToastContainer autoClose={3000} closeOnClick={true} />
        <Searchbar onSubmit={this.submitForm} />
        {status === 'idle' && (
          <TitleBox>
            <Title>What are you looking for?</Title>
          </TitleBox>
        )}
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <ImageGallery images={images} openBigPick={this.openBigPick} />
        )}
        {status === 'rejected' && (
          <TitleBox>
            <Title>I could`n find images with the name "{query}"</Title>
          </TitleBox>
        )}
        {showLoadMore && <Button onLoadMore={this.loadMore} />}
        {openModal && (
          <Modal togleModal={this.togleModal}>
            <BigPick src={largeImageURL} alt={tag} />
          </Modal>
        )}
      </div>
    );
  }
}
