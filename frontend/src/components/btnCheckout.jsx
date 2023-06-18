import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import sendSaleCheckout from '../helpers/sendSaleCheckout';
import './btnCheckoutStyle.css';

function BtnCheckout({ inpuAddress, inpuNumber, totalCart, seller }) {
  const history = useHistory();
  const handleCheckout = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const productsCart = JSON.parse(localStorage.getItem('cart'));
    const productList = productsCart.map(({ id, qtd }) => ({ id, qtd }));
    const sendCheckout = {
      products: productList,
      totalPrice: totalCart,
      userId: user.id,
      deliveryAddress: inpuAddress,
      deliveryNumber: inpuNumber,
      sellerName: seller,
    };
    const idSale = await sendSaleCheckout(sendCheckout);
    history.push(`/customer/orders/${idSale.id}`);
  };

  return (

    <button
      className="bnt-checkout"
      data-testid="customer_checkout__button-submit-order"
      type="button"
      onClick={ handleCheckout }
      disabled={ !inpuAddress || !inpuNumber }
    >
      Finalizar Pedido
    </button>
  );
}

BtnCheckout.propTypes = {
  totalCart: PropTypes.number,
  inpuNumber: PropTypes.string,
  inpuAddress: PropTypes.string,
}.isRequired;

export default BtnCheckout;
