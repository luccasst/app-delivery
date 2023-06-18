const sendSaleCheckout = async (body) => {
    const storage = localStorage.getItem('user');
    const user = JSON.parse(storage);
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', authorization: user.token },
      body: JSON.stringify(body),
    };
    const url = 'http://localhost:3001/sales';
    const response = await fetch(url, options);
    const data = response.json();
    return data;
  };
  
  export default sendSaleCheckout;
  