import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

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
