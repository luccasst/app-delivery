import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './registerPageStyle.css';

const conflict = 409;

function RegisterPage() {
  const history = useHistory();
  const [failed, setFalailed] = useState(false);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleChange({ target }) {
    const { name, value } = target;
    setRegister({
      ...register,
      [name]: value,
    });
  }

  async function handleRegister() {
    const options = {
      method: 'POST',
      body: JSON.stringify(register),
      headers: { 'Content-Type': 'application/json' },
    };
    const url = 'http://localhost:3001/register';
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      history.push('/customer/products');
      localStorage.setItem('user', JSON.stringify(data));
    }
    if (response.status === conflict) {
      setFalailed(true);
    }
  }

  const thirteen = 13;
  const nameCheck = register.name.length > thirteen;
  const emailRegex = /\w+@+\w+.com/;
  const five = 5;
  const emailCheck = emailRegex.test(register.email);
  const passwordCheck = register.password.length > five;

  return (
    <div className="register-page">
      <div className="register-page-body">
        <h1>Cadastro</h1>
        <form className="register-form">
          <label htmlFor="name">
            <input
              className="name"
              type="name"
              name="name"
              value={ register.name }
              placeholder="Digite seu nome"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="email">
            <input
              className="email"
              type="email"
              name="email"
              value={ register.email }
              placeholder="Digite seu email"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              className="senha"
              type="password"
              name="password"
              value={ register.password }
              placeholder="Digite sua senha"
              onChange={ handleChange }
            />
          </label>
          <button
            type="button"
            className="register-btn"
            onClick={ handleRegister }
            disabled={ !(nameCheck && emailCheck && passwordCheck) }
          >
            CADASTRAR
          </button>
        </form>
        <p
        >
          {failed ? 'Usuário já cadastrado' : ''}
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
