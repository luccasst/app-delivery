const getSellerOrder = async () => {
    const storage = localStorage.getItem('seller');
    const seller = JSON.parse(storage);
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', authorization: seller.token, id: seller.id },
    };
    const url = 'http://localhost:3001/sales/seller';
    const response = await fetch(url, options);
    const data = response.json();
    return data;
  };
  
  export default getSellerOrder;
  