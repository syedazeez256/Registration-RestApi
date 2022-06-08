import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(
      "https://mockend.com/syedazeez256/mock-backend/users"
    );
    setUsers(result.data);
    // console.log(result);
  };
  return (
    <>
      <h1>Home Page</h1>
      <table class="table border shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phome</th>
            <th scope="col">Country</th>
            <th scope="col">City</th>
            <th scope="col">DOB</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.number}</td>
              <td>{user.country}</td>
              <td>{user.city}</td>
              <td>{user.birth_date}</td>
              <td>
                <Link to="#" className="btn btn-primary">
                  View
                </Link>
                <Link to="#" className="btn btn-outline-primary">
                  Edit
                </Link>
                <Link to="#" className="btn btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
