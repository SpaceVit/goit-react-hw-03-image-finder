import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    query: '',
  };

  submitForm = ({ value }) => {
    this.setState({ query: value });
  };

  render() {
    return (
      <div>
        <ToastContainer autoClose={3000} closeOnClick={true} />
        <Searchbar onSubmit={this.submitForm} />
        <ImageGallery query={this.state.query} />
        <Button />
      </div>
    );
  }
}
