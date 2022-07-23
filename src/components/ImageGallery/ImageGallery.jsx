import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export default class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '27870956-21998cd572eb995cd3177eee7';
    const PARAMS = 'image_type=photo&orientation=horizontal&per_page=12';

    if (prevProps.query !== this.props.query) {
      fetch(`${BASE_URL}?key=${API_KEY}&q=${this.props.query}&${PARAMS}`)
        .then(res => res.json())
        .then(images => this.setState({ images: images.hits }));
    }
    console.log(this.state.images);
  }

  render() {
    return (
      <Gallery>
        {this.state.images.map(({ id, tags, webformatURL }) => (
          <ImageGalleryItem key={id} tags={tags} webformatURL={webformatURL} />
        ))}
      </Gallery>
    );
  }
}
