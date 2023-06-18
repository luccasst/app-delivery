import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './customerNavbarStyle.css';

function CustomerNavbar() {
  const history = useHistory();

  const [user, setUser] = useState({});

  function handleLogout() {
    localStorage.removeItem('user');
    history.push('/login');
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, [setUser]);

  return (
    <nav className="navegation-body">
      <div className="bnts-prod-orders">
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => history.push('/customer/products') }
          className="products"
        >
          PRODUTOS
        </button>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => history.push('/customer/orders') }
          className="orders"
        >
          MEUS PEDIDOS
        </button>
      </div>
      <div className="user-logout">
        <h3
          data-testid="customer_products__element-navbar-user-full-name"
          className="user"
        >
          { user.name }

        </h3>

        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ handleLogout }
          className="logout"
        >
          Sair
        </button>
      </div>

    </nav>
  );
}


export default CustomerNavbar;
