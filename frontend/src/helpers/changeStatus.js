const changeStatus = async (id, newStatus) => {
    const obj = { newStatus };
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    };
    const url = `http://localhost:3001/order/${id}`;
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };
  
  export default changeStatus;
  