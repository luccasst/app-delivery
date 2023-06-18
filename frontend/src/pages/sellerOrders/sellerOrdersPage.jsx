import React, { useEffect, useState } from 'react';
import SellerNavbar from '../../components/sellerNavbar';
import SellerCards from '../../components/sellerCards';
import getSellerOrder from '../../helpers/getSellerOrder';

function SellerOrder() {
  const [ordersBySeller, setOrdersBySeller] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      const orders = await getSellerOrder();
      setOrdersBySeller(orders);
    };
    getOrder();
  }, []);

  return (
    <div className="seller-page">
      <SellerNavbar />
      <div>
        { ordersBySeller.map((each) => (
          <SellerCards
            key={ each.id }
            order={ each }
          />
        ))}
      </div>
    </div>
  );
}

export default SellerOrder;
