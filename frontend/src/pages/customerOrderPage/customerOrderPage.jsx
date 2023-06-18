import React, { useEffect, useState } from 'react';
import CustomerNavbar from '../../components/customerNavbar';
import CustomerOrdersCard from '../../components/customerOrdersCard';
import getSale from '../../helpers/getSale';
import './customerOrderPageStyle.css';

function CustomerOrder() {
  const [selectSale, setSelectSale] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      const data = await getSale();
      setSelectSale(data);
    };
    getSales();
  }, []);

  return (
    <div>
      <CustomerNavbar />
      <div className="customer-body">
        {
          selectSale.map(({ id, totalPrice, status, saleDate }, index) => (
            <CustomerOrdersCard
              key={ index }
              id={ id }
              totalPrice={ totalPrice }
              status={ status }
              saleDate={ saleDate }
            />
          ))
        }
      </div>
    </div>
  );
}

export default CustomerOrder;
