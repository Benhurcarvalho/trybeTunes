import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from '../pages/Carregando';

class Header extends Component {
  state = {
    name: '',
    carregando: false,
  };

  componentDidMount() {
    this.getName();
  }

  getName = async () => {
    this.setState({ carregando: true });
    const use = await getUser();
    this.setState({
      name: use.name,
      carregando: false,
    });
  };

  render() {
    const { name, carregando } = this.state;
    return (
      <header data-testid="header-component">
        { carregando ? <Carregando />
          : (
            <h3
              data-testid="header-user-name"
            >
              { name }
            </h3>
          )}
        <Link data-testid="link-to-search" to="/search">
          <button type="button">
            Procurar
          </button>
        </Link>
        <Link data-testid="link-to-favorites" to="/favorites">
          <button type="button">
            Favoritos
          </button>
        </Link>
        <Link data-testid="link-to-profile" to="/profile">
          <button type="button">
            Perfil
          </button>
        </Link>
      </header>
    );
  }
}

export default Header;
