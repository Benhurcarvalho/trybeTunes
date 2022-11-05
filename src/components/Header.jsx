import React, { Component } from 'react';
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
      </header>
    );
  }
}

export default Header;
