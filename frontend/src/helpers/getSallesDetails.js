const getSallesOrders = async ({ id }) => {
    const storage = localStorage.getItem('seller');
    const seller = JSON.parse(storage);
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', authorization: seller.token },
    };
    const url = `http://localhost:3001/order/${id}`;
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };
  
  export default getSallesOrders;
  