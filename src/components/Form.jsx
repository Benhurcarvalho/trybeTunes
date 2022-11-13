import React, { Component } from 'react';

class Form extends Component {
  state = {
    isBtnDisabled: false,
  };

  ValidarBtn = ({ target }) => {
    // console.log(target);
    const { value } = target;
    // console.log(value);
    const carcterMin = 2;
    this.setState({
      isBtnDisabled: value.length >= carcterMin,
    });
  };

  render() {
    const { isBtnDisabled } = this.state;
    return (
      <form>
        <input
          data-testid="search-artist-input"
          type="text"
          name=""
          placeholder="Digite o nome da banda ou artista aqui"
          onChange={ this.ValidarBtn }
        />
        <input
          data-testid="search-artist-button"
          type="button"
          value="Pesquisar"
          disabled={ !isBtnDisabled }
        />
      </form>
    );
  }
}

export default Form;
