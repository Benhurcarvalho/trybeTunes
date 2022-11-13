import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { onClickButton, handleInputChange, isBtnDisabled } = this.props;
    return (
      <form>
        <input
          data-testid="search-artist-input"
          type="text"
          name="searchInput"
          placeholder="Digite o nome da banda ou artista aqui"
          onChange={ handleInputChange }
        />
        <input
          data-testid="search-artist-button"
          type="button"
          value="Pesquisar"
          disabled={ !isBtnDisabled }
          onClick={ onClickButton }
        />
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  handleInputChange: PropTypes.func,
  onClickButton: PropTypes.func,
  isBtnDisabled: PropTypes.bool,
}.isRequired;
