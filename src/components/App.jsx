import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Title, TitleBox, BigPick } from './App.styled';

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
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '27870956-21998cd572eb995cd3177eee7';
    const PARAMS = 'image_type=photo&orientation=horizontal&per_page=12';

    const { page, query } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      try {
        this.setState({ status: 'pending' });

        const response = await fetch(
          `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&${PARAMS}`
        );
        const data = await response.json();
        const images = data.hits;

        if (images.length === 0) {
          this.setState({ status: 'rejected', showLoadMore: false });
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            status: 'resolved',
            showLoadMore: true,
          }));
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
