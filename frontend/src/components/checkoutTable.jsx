import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './checkoutTableStyle.css';

function CheckoutTable({ totalCart, setTotalCart }) {
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('cart'));
    const productsFilter = products.filter((each) => each.qtd > 0);
    localStorage.setItem('cart', JSON.stringify(productsFilter));
    setProductsInCart(productsFilter);
  }, [setProductsInCart]);

  useEffect(() => {
    setTotalCart(productsInCart
      .reduce((partialSum, a) => partialSum + a.totalPrice, 0));
  }, [productsInCart]);

  const handleRemove = (id) => {
    const newList = productsInCart.filter((each) => each.id !== id);
    setProductsInCart(newList);
    localStorage.setItem('cart', JSON.stringify(newList));
  };

  return (
    <div className="table-body">
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { productsInCart.map((each, index) => (
            <tr key={ each.id }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
                className="element-name"
              >
                { each.name }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                { each.qtd }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { each.price.replace('.', ',') }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                { each.totalPrice.toFixed(2).replace('.', ',') }
              </td>
              <td>
                <button
                  type="button"
                  className="btn-remove"
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                  onClick={ () => handleRemove(each.id) }
                >
                  <img
                    src="https://freesvg.org/img/trash.png"
                    alt="trashImg"
                    height="20px"
                  />
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
      <p data-testid="customer_checkout__element-order-total-price" className="total">
        {`Total: R$ ${totalCart.toFixed(2).replace('.', ',')}`}
      </p>
    </div>
  );
}

CheckoutTable.propTypes = {
  totalCart: PropTypes.number,
  setTotalCart: PropTypes.func,
}.isRequired;

export default CheckoutTable;
