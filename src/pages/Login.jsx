import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Carregando from './Carregando';

class Login extends Component {
  state = {
    name: '',
    isBtnDisabled: false,
    carregando: false,
    login: false,
  };

  ValidarBtn = ({ target }) => {
    // console.log(target);
    const { value } = target;
    // console.log(value);
    const carcterMin = 3;
    this.setState({
      name: value,
      isBtnDisabled: value.length >= carcterMin,
    });
  };

  SalveUser = async (ev) => {
    ev.preventDefault();
    const { name } = this.state;
    console.log(name.toLocaleUpperCase());
    this.setState({
      carregando: true,
    });
    await createUser({ name });
    this.setState({
      carregando: false,
      login: true,
    });
  };

  render() {
    const { isBtnDisabled, carregando, login } = this.state;
    // console.log(carregando);
    // console.log(login);
    // console.log(createUser);
    // console.log(Redirect);
    // console.log(Carregando);
    return (
      <div data-testid="page-login">
        { carregando ? <Carregando />
          : (
            <form className="Login">
              <input
                className="nome"
                type="text"
                name="name"
                data-testid="login-name-input"
                placeholder="Digite seu nome"
                onChange={ this.ValidarBtn }
              />
              <button
                type="submit"
                className="btnEntrar"
                data-testid="login-submit-button"
                onClick={ this.SalveUser }
                disabled={ !isBtnDisabled }
              >
                Entrar
              </button>
            </form>
          ) }
        {login && <Redirect to="/search" /> }
      </div>
    );
  }
}

export default Login;
