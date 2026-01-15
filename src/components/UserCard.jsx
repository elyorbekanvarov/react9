import React from "react";
import { toast } from "react-toastify";

function UserCard({ user, users, setUsers }) {
  let { id, name, username, email, adress, phone, website, company} =
    user;
  let deleteUsers = (id) => {
    let newUsers = users.filter((item) => item.id !== id);
    setUsers(newUsers);
    toast(`${id}-id ga ega user o'chirildi`);
  };

  return (
    <div className="photo-card">
      <h2>Name: {name}</h2>
      <span>UserName: {username}</span>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button onClick={() => deleteUsers(id)} className="btn">
        DELETE
      </button>
    </div>
  );
}

export default UserCard;
