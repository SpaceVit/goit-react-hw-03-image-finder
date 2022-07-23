import { Component } from 'react';
import { VscSearch } from 'react-icons/vsc';
import { toast } from 'react-toastify';

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
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmitForm}>
          <button type="submit">
            <VscSearch size={13} /> Search
          </button>

          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
