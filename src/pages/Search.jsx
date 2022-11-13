import React, { Component } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <Form />
      </div>
    );
  }
}

export default Search;
