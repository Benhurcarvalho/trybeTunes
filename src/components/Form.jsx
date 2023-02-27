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
        <form className="form-input">
          <input
            data-testid="search-artist-input"
            className="nome input is-success"
            type="text"
            name="searchInput"
            placeholder="Digite o nome da banda ou artista aqui"
            value={ searchInput }
            onChange={ handleInputChange }
          />
          <button
            className="button is-info"
            data-testid="search-artist-button"
            type="button"
            value="Pesquisar"
            disabled={ !isBtnDisabled }
            onClick={ onClickButton }

          >
            <span className="material-symbols-outlined">
              search
            </span>
            <span>Pesquisar</span>
          </button>
        </form>
        <div className="list">
          <div>
            { collection.length > 1
                && (
                  <p
                    className="result"
                  >
                    Resultado de álbuns de: &#160;
                    <span
                      style={ {
                        textTransform: 'uppercase',
                        fontStyle: 'italic',
                      } }
                    >
                      {searchInputArt}

                    </span>

                  </p>)}
            { collection.length === 0 && click === true
                && <p className="result">Nenhum álbum foi encontrado</p>}
          </div>
          {
            collection.map((product) => (
              <section
                key={ product.collectionId }
                data-testid="product"
                className="item-list"
              >
                <Link
                  data-testid={ `link-to-album-${product.collectionId}` }
                  to={ `/album/${product.collectionId}` }
                >
                  <img src={ product.artworkUrl100 } alt={ product.collectionName } />
                  <p className="result-list">{`Artista ${product.artistName}`}</p>
                  <p className="result-list">{`Albuns ${product.collectionName}`}</p>
                  <p className="result-list">{`Faixas ${product.trackCount}`}</p>
                  <p className="result-list">{`Id ${product.collectionId}`}</p>
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
