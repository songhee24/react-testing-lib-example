import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = React.useState([]);

  const loadUsers = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(resp.data);
  };

  React.useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div data-testid="users-page">
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id} data-testid="user-item">
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default Users;
