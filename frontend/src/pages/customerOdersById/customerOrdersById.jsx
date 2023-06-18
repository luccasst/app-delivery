import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomerNavbar from '../../components/customerNavbar';
import OrderDetailsById from '../../components/ordersDetailsById';
import deliveryContext from '../../context/context';
import getCustomerOrders from '../../helpers/getCustomerOrder';
import LoadingContent from '../../components/Loading';

function CustomerOrdersById() {
  const [isLoading, setIsLoading] = useState(true);
  const { setCustomerOrder } = useContext(deliveryContext);
  const params = useParams();

  useEffect(() => {
    const getOrder = async () => {
      const order = await getCustomerOrders(params);
      setCustomerOrder(order);
      setIsLoading(false);
    };
    getOrder();
  }, [params, setCustomerOrder]);

  return (
    <div>
      <CustomerNavbar />
      { isLoading ? <LoadingContent />
        : <OrderDetailsById />}
    </div>
  );
}

export default CustomerOrdersById;
