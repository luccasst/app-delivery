const getSale = async () => {
    const storage = localStorage.getItem('user');
    const user = JSON.parse(storage);
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', authorization: user.token, id: user.id },
    };
    const url = 'http://localhost:3001/sales';
    const response = await fetch(url, options);
    const data = response.json();
    return data;
  };
  
  export default getSale;
  