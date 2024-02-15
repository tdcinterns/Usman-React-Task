import React from "react";

const TableComponent = ({ users }) => {
  
  const UserRow = ({ user }) => (
    // <tr key={user.id}>
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>UserName</th>
          <th>E-Mail</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          // key={user.id}
          <UserRow user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;