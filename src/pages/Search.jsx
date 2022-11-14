import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';

class Search extends Component {
  render() {
    const {
      searchInput,
      searchInputArt,
      searchAlbumsAPIs,
      handleInputChange,
      isBtnDisabled,
      collection,
      click,
    } = this.props;
    return (
      <div data-testid="page-search">
        <Header />
        <Form
          onClickButton={ searchAlbumsAPIs }
          handleInputChange={ handleInputChange }
          isBtnDisabled={ isBtnDisabled }
          collection={ collection }
          searchInput={ searchInput }
          searchInputArt={ searchInputArt }
          click={ click }
        />
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  searchInput: PropTypes.string,
  searchInputArt: PropTypes.string,
  searchAlbumsAPIs: PropTypes.func,
  handleInputChange: PropTypes.func,
  isBtnDisabled: PropTypes.bool,
  click: PropTypes.bool,
  collection: PropTypes.arrayOf,
}.isRequired;
