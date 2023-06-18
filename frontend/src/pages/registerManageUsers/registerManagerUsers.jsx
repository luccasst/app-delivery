import React, { useState, useEffect } from 'react';
import LoadingContent from '../../components/Loading';
import adminCreateUser from '../../helpers/adminCreateUser';
import adminDeleteUser from '../../helpers/adminDeleteUser';
import adminfetchUser from '../../helpers/adminfetchUser';

const invalid = 'admin_manage__element-invalid-register';

function RegisterManageUsers() {
  const [isLoading, setIsLoading] = useState([true]);
  const [users, setUsers] = useState([]);
  const [failed, setFailed] = useState(false);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Vendedor',
  });

  const handleRegister = async () => {
    const obj = {
      name: register.name,
      email: register.email,
      password: register.password,
      role: register.role,
    };
    if (register.role === 'Vendedor') {
      obj.role = 'seller';
    }
    if (register.role === 'Cliente') {
      obj.role = 'customer';
    }
    const data = await adminCreateUser(obj);
    console.log(data);
    if (data.message === 'User already registered') {
      setFailed(true);
    }
    if (data.message === 'Usuário criado com sucesso') {
      setFailed(false);
    }
  };

  useEffect(() => {
    const handleUsers = async () => {
      const user = await adminfetchUser();
      const userList = user.map((each) => {
        if (each.role === 'seller') {
          return { ...each, role: 'Vendedor' };
        } if (each.role === 'customer') {
          return { ...each, role: 'Cliente' };
        }
        return each;
      });
      setUsers(userList);
      setIsLoading(false);
    };
    handleUsers();
  }, [users]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleRemove = async (email) => {
    const user = await adminDeleteUser({ email });
    console.log(user);
  };

  const thirteen = 13;
  const nameCheck = register.name.length > thirteen;
  const emailRegex = /\w+@+\w+.com/;
  const five = 5;
  const emailCheck = emailRegex.test(register.email);
  const passwordCheck = register.password.length > five;

  return (
    <div>
      {
        isLoading ? (<LoadingContent />) : (
          <div className="register-page">
            <h1>Cadastrar novo usuário</h1>
            <form className="register-form">
              <label htmlFor="name">
                Nome
                <input
                  type="name"
                  name="name"
                  value={ register.name }
                  data-testid="admin_manage__input-name"
                  placeholder="Seu nome"
                  onChange={ handleChange }
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  value={ register.email }
                  data-testid="admin_manage__input-email"
                  placeholder="seu-email@site.com.br"
                  onChange={ handleChange }
                />
              </label>
              <label htmlFor="password">
                Senha
                <input
                  type="password"
                  name="password"
                  value={ register.password }
                  data-testid="admin_manage__input-password"
                  onChange={ handleChange }
                />
              </label>
              <label htmlFor="role">
                Tipo
                <select
                  name="role"
                  id="role"
                  data-testid="admin_manage__select-role"
                  onChange={ handleChange }
                  defaultValue="seller"
                >
                  <option value="seller">Vendedor</option>
                  <option value="administrador">Administrador</option>
                  <option value="costumer">Cliente</option>
                </select>
              </label>
              <button
                type="button"
                className="register-btn"
                data-testid="admin_manage__button-register"
                onClick={ handleRegister }
                disabled={ !(nameCheck && emailCheck && passwordCheck) }
              >
                CADASTRAR
              </button>
            </form>
            {!failed ? '' : <p data-testid={ invalid }>Usuário já cadastrado</p>}
            <p>Lista de usuários</p>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Tipo</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody>
                {users.map((each, index) => (
                  <tr key={ index }>
                    <td
                      data-testid={ `
                      admin_manage__element-user-table-item-number-${index}` }
                    >
                      { index + 1 }
                    </td>
                    <td data-testid={ `admin_manage__element-user-table-name-${index}` }>
                      {each.name}
                    </td>
                    <td data-testid={ `admin_manage__element-user-table-email-${index}` }>
                      {each.email}
                    </td>
                    <td data-testid={ `admin_manage__element-user-table-role-${index}` }>
                      {each.role}
                    </td>
                    <button
                      type="button"
                      onClick={ () => handleRemove(each.email) }
                    >
                      excluir
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>)
      }
    </div>
  );
}

export default RegisterManageUsers;
