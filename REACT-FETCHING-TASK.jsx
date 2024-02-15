import React, { useState, useEffect } from 'react';
import TableComponent from './USER_TABLE';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(`Error Fetching Data: ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>User Data</h1>
      <TableComponent users={users} />
    </div>
  );
};

export default App;