import React from 'react';
import { Item, ItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ id, webformatURL, tags }) {
  return (
    <Item id={id}>
      <ItemImage src={webformatURL} alt={tags} />
    </Item>
  );
}
