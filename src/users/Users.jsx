import React from "react";

const Users = () => {
  const [users, setUsers] = React.useState([]);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} data-testid="user-item">
          {user.name}
        </div>
      ))}
    </div>
  );
};
