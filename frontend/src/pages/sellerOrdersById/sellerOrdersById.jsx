import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SellerNavBar from '../../components/sellerNavbar';
import SellerDetailsById from '../../components/sellerDetailsById';
import deliveryContext from '../../context/context';
import getSallesDetails from '../../helpers/getSallesDetails';
import LoadingContent from '../../components/Loading';

function SellerOrderById() {
  const [isLoading, setIsLoading] = useState(true);
  const { sellerOrder, setSellerOrder } = useContext(deliveryContext);
  const params = useParams();

  useEffect(() => {
    const getOrder = async () => {
      const order = await getSallesDetails(params);
      setSellerOrder(order);
      setIsLoading(false);
    };
    getOrder();
  }, [params, setSellerOrder, sellerOrder]);

  return (
    <div>
      <SellerNavBar />
      { isLoading ? <LoadingContent />
        : <SellerDetailsById sellerOrder={ sellerOrder } />}
    </div>
  );
}

export default SellerOrderById;
