import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <div className="user-cards-container">
        {listOfUsers.map((user) => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;