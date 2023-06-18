import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './customerOrdersCardStyle.css';

function CustomerOrdersCard({ id, status, totalPrice, saleDate }) {
  function newDate() {
    const [y, m, d] = (saleDate.split('T')[0]).split('-');
    return (`${d}/${m}/${y}`);
  }
  return (
    <Link to={ `/customer/orders/${id}` } className="link">
      <div className="order-card">
        <div className="pedido-code">
          <p className="pedido">Pedido</p>
          <p
            data-testid={ `customer_orders__element-order-id-${id}` }
            className="code"
          >
            {`000${id}`}
          </p>
        </div>
        <div>
          <p data-testid={ `customer_orders__element-delivery-status-${id}` }>
            { status }
          </p>
        </div>
        <div>
          <p data-testid={ `customer_orders__element-order-date-${id}` } className="date">
            { newDate() }
          </p>
        </div>
        <div>
          <p data-testid={ `customer_orders__element-card-price-${id}` }>
            { `R$ ${totalPrice.replace(/\./, ',')}` }
          </p>
        </div>
      </div>
    </Link>
  );
}
export default CustomerOrdersCard;

CustomerOrdersCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
};
