const getAllProducts = async () => {
    const storage = localStorage.getItem('user');
    const user = JSON.parse(storage);
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', authorization: user.token },
    };
    const url = 'http://localhost:3001/products';
    const response = await fetch(url, options);
    const data = await response.json();
    const products = data.map((each) => ({ ...each, qtd: 0, totalPrice: 0 }));
    return products;
  };
  
  export default getAllProducts;
  