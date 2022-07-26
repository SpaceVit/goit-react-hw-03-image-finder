import React from 'react';
import { Item, ItemImage } from './ImageGalleryItem.styled';

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
