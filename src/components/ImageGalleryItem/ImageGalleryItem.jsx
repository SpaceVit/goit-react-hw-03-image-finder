import React from 'react';
import { Item, ItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  largeImageURL,
  openBigPick,
}) {
  return (
    <Item
      id={id}
      onClick={() => {
        openBigPick(largeImageURL, tags);
      }}
    >
      <ItemImage src={webformatURL} alt={tags} />
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openBigPick: PropTypes.func.isRequired,
};
