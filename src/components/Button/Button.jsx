import React from 'react';
import { StyledButton, ButtonBox } from './Button.styled';

export default function Button({ onLoadMore }) {
  return (
    <ButtonBox>
      <StyledButton type="button" onClick={onLoadMore}>
        Load more
      </StyledButton>
    </ButtonBox>
  );
}
