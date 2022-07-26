import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export default function ImageGallery({ images, openBigPick }) {
  return (
    <Gallery>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          openBigPick={openBigPick}
          largeImageURL={largeImageURL}
        />
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  openBigPick: PropTypes.func.isRequired,
};
