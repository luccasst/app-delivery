import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './loginPageStyle.css';

function LoginPage() {
  const history = useHistory();
  const [failed, setFailed] = useState(false);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) history.push('/customer/products');
  });

  const handleClick = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify(login),
      headers: { 'Content-Type': 'application/json' },
    };
    const url = 'http://localhost:3001/login';
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      if (data.role === 'customer') {
        history.push('/customer/products');

        localStorage.setItem('user', JSON.stringify(data));
      }
      if (data.role === 'seller') {
        history.push('/seller/orders');

        localStorage.setItem('seller', JSON.stringify(data));
      }
      if (data.role === 'administrator') {
        history.push('/admin/manage');

        localStorage.setItem('admin', JSON.stringify(data));
      }
    }
    setFailed(true);
  };

  function handleChange({ target }) {
    const { name, value } = target;
    setLogin({
      ...login,
      [name]: value,
    });
  }

  const emailRegex = /\w+@+\w+.com/;
  const five = 5;
  const emailCheck = emailRegex.test(login.email);
  const passwordCheck = login.password.length > five;

  return (
    <div className="login-page">
      <div className="login-page-body">
        <img
          src="https://windsorite.ca/wp-content/uploads/2022/06/masters-final-01-2048x1851-1.png"
          alt="logo"
          className="logoImg"
        />
        <form className="login-form">
          <label htmlFor="email">
            <input
              className="email"
              type="email"
              name="email"
              value={ login.email }
              placeholder="Digite seu email"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              className="senha"
              type="password"
              name="password"
              value={ login.password }
              placeholder="Digite sua senha"
              onChange={ handleChange }
            />
          </label>
          <button
            type="button"
            className="login-btn"
            onClick={ handleClick }
            disabled={ !(emailCheck && passwordCheck) }
          >
            LOGIN
          </button>
          <button
            type="button"
            className="create-btn"
            onClick={ () => history.push('/register') }
          >
            REGISTRAR
          </button>
        </form>
        <p
        >
          {failed ? 'usuário não cadastrado' : ''}
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
