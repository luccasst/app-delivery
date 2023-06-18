import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import deliveryContext from './context';

function DeliveryProvider({ children }) {
  const [totalCart, setTotalCart] = useState(0);
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [customerOrder, setCustomerOrder] = useState({});
  const [sellerOrder, setSellerOrder] = useState({});
  const contexValue = useMemo(() => ({
    productsInCart,
    setProductsInCart,
    products,
    setProducts,
    user,
    setUser,
    totalCart,
    setTotalCart,
    customerOrder,
    setCustomerOrder,
    sellerOrder,
    setSellerOrder,
  }), [products, user, totalCart, productsInCart, customerOrder, sellerOrder]);

  return (
    <deliveryContext.Provider value={ contexValue }>
      {children}
    </deliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryProvider;
