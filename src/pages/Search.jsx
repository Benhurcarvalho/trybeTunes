import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';

class Search extends Component {
  render() {
    const { searchAlbumsAPIs, handleInputChange, isBtnDisabled } = this.props;
    return (
      <div data-testid="page-search">
        <Header />
        <Form
          onClickButton={ searchAlbumsAPIs }
          handleInputChange={ handleInputChange }
          isBtnDisabled={ isBtnDisabled }
        />
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  searchAlbumsAPIs: PropTypes.func,
  handleInputChange: PropTypes.func,
  isBtnDisabled: PropTypes.bool,
}.isRequired;
