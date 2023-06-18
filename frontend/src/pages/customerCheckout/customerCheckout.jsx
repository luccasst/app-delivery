import React, { useEffect, useState } from 'react';
import CustomerNavbar from '../../components/customerNavbar';
import CheckoutTable from '../../components/checkoutTable';
import FormAddress from '../../components/formAddress';
import BtnCheckout from '../../components/btnCheckout';
import getSeller from '../../helpers/getSeller';
import './customerCheckoutStyle.css';

function CustomerCheckout() {
  const [inpuAddress, setInputAddress] = useState('');
  const [inpuNumber, setInputNumber] = useState('');
  const [totalCart, setTotalCart] = useState(0);
  const [selectSeller, setSelectSeller] = useState([]);
  const [seller, setSeller] = useState('Fulana Pereira');

  useEffect(() => {
    const getSellers = async () => {
      const data = await getSeller();
      setSelectSeller(data);
    };
    getSellers();
  }, []);

  return (
    <div>
      <CustomerNavbar />
      <div className="finalizar-body">
        <CheckoutTable
          totalCart={ totalCart }
          setTotalCart={ setTotalCart }
        />
      </div>
      <div className="detalhes-body">
        <p>Endereço para entrega</p>
        <FormAddress
          inpuAddress={ inpuAddress }
          setInputAddress={ setInputAddress }
          inpuNumber={ inpuNumber }
          setInputNumber={ setInputNumber }
          selectSeller={ selectSeller }
          setSelectSeller={ setSelectSeller }
          setSellet={ setSeller }
        />
        <BtnCheckout
          inpuAddress={ inpuAddress }
          inpuNumber={ inpuNumber }
          totalCart={ totalCart }
          seller={ seller }
        />
      </div>
    </div>
  );
}

export default CustomerCheckout;
