import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";

function AlbomsPage() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    async function UsersGetApi() {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await res.json();
      setUsers(data.slice(0, 6));
    }
    UsersGetApi();
  }, []);

  return (
    <div className="users-section">
      <div className="container">
        <h1>Users</h1>
        <div className="users-wrapper">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              users={users}
              setUsers={setUsers}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlbomsPage;
