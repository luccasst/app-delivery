const adminfetchUser = async () => {
    const storage = localStorage.getItem('admin');
    const admin = JSON.parse(storage);
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', authorization: admin.token } };
    const url = 'http://localhost:3001/administrator';
    const response = await fetch(url, options);
    const data = response.json();
    return data;
  };
  
  export default adminfetchUser;
  