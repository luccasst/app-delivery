import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import deliveryContext from '../context/context';
import './btnCartStyle.css';

function BtnCart() {
  const { totalCart } = useContext(deliveryContext);
  const history = useHistory();
  function handleCart() {
    history.push('/customer/checkout');
  }

  useEffect(() => {
  }, [totalCart]);

  return (

    <button
      className="brn-total-cart"
      data-testid="customer_products__button-cart"
      type="button"
      onClick={ handleCart }
      disabled={ totalCart === 0 }
    >
      <p data-testid="customer_products__checkout-bottom-value">
        {`Ver Carrinho: R$ ${totalCart.toFixed(2).replace('.', ',')}`}
      </p>
    </button>
  );
}

BtnCart.propTypes = {
  settotalCart: PropTypes.number,
}.isRequired;

export default BtnCart;
