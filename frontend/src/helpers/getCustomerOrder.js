const getCustomerOrders = async ({ id }) => {
    const storage = localStorage.getItem('user');
    const user = JSON.parse(storage);
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', authorization: user.token },
    };
    const url = `http://localhost:3001/order/${id}`;
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };
  
  export default getCustomerOrders;
  