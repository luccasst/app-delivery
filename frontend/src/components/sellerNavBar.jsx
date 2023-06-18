import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function SellerNavbar() {
  const history = useHistory();
  const [sellerName, setSellerName] = useState('');
  function handleLogout() {
    localStorage.removeItem('seller');
    history.push('/login');
  }
  useEffect(() => {
    const seller = JSON.parse(localStorage.getItem('seller'));
    setSellerName(seller.name);
  }, []);

  return (
    <nav>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push('/seller/orders') }
      >
        PEDIDOS
      </button>

      <h3
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {sellerName}

      </h3>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ handleLogout }
      >
        Sair
      </button>
    </nav>
  );
}

SellerNavbar.propTypes = {
  seller: PropTypes.string,
}.isRequired;

export default SellerNavbar;
