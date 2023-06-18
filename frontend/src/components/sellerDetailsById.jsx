import React, { useContext, useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import changeStatus from '../helpers/changeStatus';
import deliveryContext from '../context/context';

const testIdDate = 'seller_order_details__element-order-details-label-order-date';
const testIdOrder = 'seller_order_details__element-order-details-label-order-id';
const testIdStatus = 'seller_order_details__element-order-details-label-delivery-status';

function SellerDetailsById() {
  const { sellerOrder } = useContext(deliveryContext);
  const [preparing, setPreparing] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const emTransito = 'Em Trânsito';

  const handleStatus = async (id, param) => {
    await changeStatus(id, param);
    if (param === 'Preparando') {
      const result = document.getElementById('Status');
      result.innerHTML = 'Preparando';
      setPreparing(true);
    }
    if (param === emTransito) {
      const result = document.getElementById('Status');
      result.innerHTML = emTransito;
      setDelivery(true);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th
              data-testid={ testIdOrder }
            >
              {`PEDIDO 000${sellerOrder.id}`}
            </th>
            <th
              data-testid={ testIdDate }
            >
              {moment(new Date(sellerOrder.saleDate)).format('DD/MM/YYYY')}
            </th>
            <th
              data-testid={ testIdStatus }
              id="Status"
            >
              {sellerOrder.status}
            </th>
          </tr>
        </thead>
      </table>
      <button
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        disabled={ preparing || sellerOrder.status !== 'Pendente' }
        onClick={ () => handleStatus(sellerOrder.id, 'Preparando') }
      >
        PREPARAR PEDIDO
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        disabled={ delivery || sellerOrder.status !== 'Preparando' }
        onClick={ () => handleStatus(sellerOrder.id, emTransito) }
      >
        SAIU PARA ENTREGA
      </button>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {sellerOrder.products.map((each, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `seller_order_details__element-order-table-item-number-${index + 1}`
                }
              >
                {each.id}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-name-${index + 1}`
                }
              >
                {each.products.name}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${index + 1}`
                }
              >
                {each.quantity}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${index + 1}`
                }
              >
                {each.products.price}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${index + 1}`
                }
              >
                {(Number(each.products.price) * each.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span>Total: R$</span>
      <span data-testid="seller_order_details__element-order-total-price">
        {sellerOrder.totalPrice.replace(/\./, ',')}
      </span>
    </div>
  );
}

SellerDetailsById.propTypes = {
  setIsLoading: PropTypes.func,
}.isRequired;

export default SellerDetailsById;
