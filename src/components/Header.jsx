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
      <header
        data-testid="header-component"
      >
        { carregando ? <Carregando />
          : (
            <div className="header">
              <h3
                data-testid="header-user-name"
                className="user-name"
              >
                <p className="header-name">
                  { name }
                </p>
              </h3>
              <div className="links">
                <Link data-testid="link-to-search" to="/search">
                  <span className="material-symbols-outlined">
                    search
                  </span>
                </Link>
                <Link data-testid="link-to-favorites" to="/favorites">
                  <span className="material-symbols-outlined">
                    favorite
                  </span>
                </Link>
                <Link data-testid="link-to-profile" to="/profile">
                  <span className="material-symbols-outlined">
                    person
                  </span>
                </Link>
              </div>
            </div>
          )}
      </header>
    );
  }
}

export default Header;
