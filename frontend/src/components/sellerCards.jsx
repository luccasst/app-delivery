import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function SellerCards({ order }) {
  const history = useHistory();
  return (
    <div className="SellerCards">
      <button
        type="button"
        onClick={ () => history.push(`/seller/orders/${order.id}`) }
      >
        <h4>Pedido</h4>
        <p data-testid={ `seller_orders__element-order-id-${order.id}` }>
          {`000${order.id}`}
        </p>
        <div>
          <p data-testid={ `seller_orders__element-delivery-status-${order.id}` }>
            {order.status}
          </p>
          <p data-testid={ `seller_orders__element-order-date-${order.id}` }>
            {order.saleDate}
          </p>
          <p data-testid={ `seller_orders__element-card-price-${order.id}` }>
            {order.totalPrice}
          </p>
          <p data-testid={ `seller_orders__element-card-address-${order.id}` }>
            {`${order.deliveryAddress}, ${order.deliveryNumber}`}
          </p>
        </div>
      </button>
    </div>
  );
}

SellerCards.propTypes = {
  order: PropTypes.object,
}.isRequired;

export default SellerCards;
