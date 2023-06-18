import React, { useContext, useState } from 'react';
import moment from 'moment';
import deliveryContext from '../context/context';
import changeStatus from '../helpers/changeStatus';
import './ordersDetailsByIdStyle.css';

const testidSeller = 'customer_order_details__element-order-details-label-seller-name';
const testidDate = 'customer_order_details__element-order-details-label-order-date';
const Status = 'customer_order_details__element-order-details-label-delivery-status-1';

function OrderDetailsById() {
  const { customerOrder } = useContext(deliveryContext);
  const [delivered, setDelivered] = useState(false);

  const handleStatus = async (id, param) => {
    await changeStatus(id, param);
    const result = document.getElementById('Status');
    result.innerHTML = 'Entregue';
    setDelivered(true);
  };

  return (
    <div className="table-body">
      <table>
        <thead>
          <tr>
            <th
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              {`PEDIDO 000${customerOrder.id}`}
            </th>
            <th data-testid={ testidSeller }>
              {`${customerOrder.seller.name}`}
            </th>
            <th data-testid={ testidDate }>
              {moment(new Date(customerOrder.saleDate)).format('DD/MM/YYYY')}

            </th>
            <th
              id="Status"
              data-testid={ Status }
            >
              {customerOrder.status}

            </th>
          </tr>
        </thead>
      </table>
      <button
        className="bnt-entregue"
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        disabled={ delivered || customerOrder.status !== 'Em Trânsito' }
        onClick={ () => handleStatus(customerOrder.id, 'Entregue') }
      >
        MARCAR COMO ENTREGUE
      </button>
      <table className="table">
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
          { customerOrder.products.map((each, index) => (

            <tr key={ index }>
              <td
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index + 1}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-name-${index + 1}`
                }
                className="element-name"
              >
                {each.products.name}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-quantity-${index + 1}`
                }
              >
                {each.quantity}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-unit-price-${index + 1}`
                }
              >
                {each.products.price}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-sub-total-${index + 1}`
                }
              >
                {(Number(each.products.price) * each.quantity).toFixed(2)}
              </td>
            </tr>
          )) }
        </tbody>
      </table>
      <span
        data-testid="customer_order_details__element-order-total-price"
        className="total"
      >
        {`Total: R$ ${customerOrder.totalPrice.replace(/\./, ',')}`}
      </span>
    </div>
  );
}

export default OrderDetailsById;
