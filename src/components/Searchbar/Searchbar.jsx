import { Component } from 'react';
import { VscSearch } from 'react-icons/vsc';
import { toast } from 'react-toastify';

import { Header, Button, Input, StyledForm } from './Searchbar.styled';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInputChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      toast.info('I didn`t catch what you are looking for');
      return;
    }
    this.props.onSubmit(this.state.value);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <Header>
        <StyledForm onSubmit={this.handleSubmitForm}>
          <Button type="submit">
            <VscSearch size={13} />
          </Button>

          <Input
            type="text"
            placeholder="Make a wish"
            onChange={this.handleInputChange}
            value={this.state.value}
          />
        </StyledForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
