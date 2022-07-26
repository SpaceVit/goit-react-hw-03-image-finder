import { Component } from 'react';
import { Backdrop, StyledModal, BigPick } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.togleModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.togleModal();
    }
  };

  render() {
    const { alt, src } = this.props;

    return (
      <Backdrop onClick={this.handleBackdropClick}>
        <StyledModal>
          <BigPick src={src} alt={alt} />
        </StyledModal>
      </Backdrop>
    );
  }
}
