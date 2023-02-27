import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Carregando from './Carregando';
import logo from '../images/logo.png';

class Login extends Component {
  state = {
    name: '',
    isBtnDisabled: false,
    carregando: false,
    login: false,
  };

  ValidarBtn = ({ target }) => {
    const { value } = target;
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
    return (
      <div
        className="page-login"
        data-testid="page-login box"
      >
        { carregando ? <Carregando />
          : (
            <form className="Login field">
              <img
                src={ logo }
                alt="img"
              />
              <label
                className="label label-name"
                htmlFor="nome"
              >
                <div className="control">
                  {/* <p>Nome:</p> */}
                  <input
                    id="nome"
                    className="nome input is-success"
                    type="text"
                    name="name"
                    data-testid="login-name-input"
                    placeholder="Digite seu nome"
                    onChange={ this.ValidarBtn }
                  />
                </div>
              </label>
              <div className="control">
                <button
                  type="submit"
                  className="button is-info is-outlined entrar"
                  data-testid="login-submit-button"
                  onClick={ this.SalveUser }
                  disabled={ !isBtnDisabled }
                >
                  Entrar
                </button>
              </div>
            </form>
          ) }
        {login && <Redirect to="/search" /> }
      </div>
    );
  }
}

export default Login;
