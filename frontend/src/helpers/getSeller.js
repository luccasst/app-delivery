const getSeller = async () => {
    const options = {
      method: 'GET',
    };
    const url = 'http://localhost:3001/user';
    const response = await fetch(url, options);
    const data = response.json();
    return data;
  };
  
  export default getSeller;
  