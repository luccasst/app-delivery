import React, { useEffect, useContext, useState } from 'react';
import BtnCart from '../../components/btnCart';
import CustomerNavbar from '../../components/customerNavbar';
import ProductsCard from '../../components/productsCard';
import deliveryContext from '../../context/context';
import getAllProducts from '../../helpers/getProductsAPI';
import './customerProductsStyle.css';

function CustomerProducts() {
  const [cart, setCart] = useState([]);

  const { products, setProducts,
    user, setUser } = useContext(deliveryContext);

  useEffect(() => {
    const storageUser = localStorage.getItem('user');
    setUser(JSON.parse(storageUser));
    setCart(products);
  }, [setUser, products, cart]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    getProducts();
  }, [setProducts]);

  return (
    <div>
      <CustomerNavbar user={ user.name } />
      <div className="products-body">
        { products.map((drink, index) => (
          <ProductsCard
            product={ drink }
            key={ index }
            cart={ cart }
            setCart={ setCart }
          />
        ))}

        <BtnCart />
      </div>

    </div>
  );
}

export default CustomerProducts;
