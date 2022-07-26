import React from 'react';
import { StyledButton, ButtonBox } from './Button.styled';
import PropTypes from 'prop-types';

export default function Button({ onLoadMore }) {
  return (
    <ButtonBox>
      <StyledButton type="button" onClick={onLoadMore}>
        Load more
      </StyledButton>
    </ButtonBox>
  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
