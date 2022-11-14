import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Form extends Component {
  render() {
    const {
      searchInput,
      searchInputArt,
      onClickButton,
      handleInputChange,
      isBtnDisabled,
      collection,
      click,
    } = this.props;
    // console.log(click);
    return (
      <div>
        <form>
          <input
            data-testid="search-artist-input"
            type="text"
            name="searchInput"
            placeholder="Digite o nome da banda ou artista aqui"
            value={ searchInput }
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
        <div>
          <div>
            { collection.length > 1
                && <p>{`Resultado de álbuns de: ${searchInputArt}`}</p>}
            { collection.length === 0 && click === true
                && <p>Nenhum álbum foi encontrado</p>}
          </div>
          {
            collection.map((product) => (
              <section
                key={ product.collectionId }
                data-testid="product"
                className="item"
              >
                <Link
                  data-testid={ `link-to-album-${product.collectionId}` }
                  to={ `/album/${product.collectionId}` }
                >
                  <img src={ product.artworkUrl100 } alt={ product.collectionName } />
                  <p>{`Artista ${product.artistName}`}</p>
                  <p>{`Albuns ${product.collectionName}`}</p>
                  <p>{`Faixas ${product.trackCount}`}</p>
                  <p>{`Id ${product.collectionId}`}</p>
                </Link>
              </section>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  searchInput: PropTypes.string,
  searchInputArt: PropTypes.string,
  handleInputChange: PropTypes.func,
  onClickButton: PropTypes.func,
  isBtnDisabled: PropTypes.bool,
  click: PropTypes.bool,
  collection: PropTypes.arrayOf,
}.isRequired;
