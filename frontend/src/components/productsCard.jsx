import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import deliveryContext from '../context/context';
import './productsCardStyle.css';

function ProductsCard({ product, cart, setCart }) {
  const { setTotalCart } = useContext(deliveryContext);
  const { id, name, price } = product;
  const [quantity, setQuantity] = useState(0);

  const handleChange = ({ target }) => {
    const { value } = target;
    if (value >= 0) setQuantity(Number(value));
  };

  const handleCart = () => {
    const newCart = {
      ...product,
      qtd: Number(quantity),
      totalPrice: Number(quantity) * Number(price),
    };
    cart.forEach((each, index) => {
      if (each.id === newCart.id) cart[index] = newCart;
      setCart(cart);
    });
    setCart(cart);
    setTotalCart(cart
      .reduce((partialSum, a) => partialSum + a.totalPrice, 0));
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const addOrRemoveItem = (param) => {
    if (param === '+') setQuantity(+quantity + 1);
    handleCart();
    if (param === '-') {
      if (quantity > 0) {
        setQuantity(+quantity - 1);
      } else {
        setQuantity(0);
      }
      handleCart();
    }
  };

  useEffect(() => {
    handleCart();
  }, [quantity, cart]);

  return (
    <div
      key={ id }
    >
      <div className="item-body">
        <h3
          data-testid={ `customer_products__element-card-price-${id}` }
          className="price"
        >
          {`R$ ${price.replace('.', ',')}`}
        </h3>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ product.url_image }
          alt={ name }
          height="170px"
        />
        <div className="name-price-body">
          <h4
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            {name}

          </h4>
          <div className="counter">
            <button
              className="button-minus"
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${id}` }
              onClick={ () => addOrRemoveItem('-') }
            >
              -
            </button>
            <input
              className="quantity"
              id={ `counter${product.id}` }
              data-testid={ `customer_products__input-card-quantity-${id}` }
              type="number"
              onChange={ handleChange }
              value={ quantity }
            />
            <button
              className="button-plus"
              type="button"
              data-testid={ `customer_products__button-card-add-item-${id}` }
              onClick={ () => addOrRemoveItem('+') }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  product: PropTypes.object,
  cart: PropTypes.object,
  setCart: PropTypes.func,
}.isRequired;

export default ProductsCard;
