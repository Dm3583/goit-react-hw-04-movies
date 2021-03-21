import React, { Component } from 'react';
import styles from './SearchForm.module.css';
import Button from '../Button';

class SearchForm extends Component {
  state = {
    value: '',
  };

  handleInput = e => {
    this.setState({ value: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    if (value) {
      this.props.onSubmit(value);
      this.setState({ value: '' });
    }
  };

  render() {
    const { value } = this.state;
    const { handleInput, handleSubmit } = this;
    return (
      <div className={styles.searchFormWrapper}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            value={value}
            type="text"
            onChange={handleInput}
          />
          <Button type={'submit'}>Search</Button>
          {/* <button className={styles.submitBtn} type="submit">
            Search
          </button> */}
        </form>
      </div>
    );
  }
}

export default SearchForm;
