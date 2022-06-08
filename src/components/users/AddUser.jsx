import React, { useEffect, useState } from "react";
import axios from "axios";
const AddUser = () => {
  // const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    email: "",
    country: "",
    city: "",
    dob: "",
  });
  const { firstName, lastName, phone, password, email, country, city, dob } =
    user;
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleform = async (e) => {
    e.preventDefault();
    console.log(user);
    const res = await axios.post(
      "https://mockend.com/syedazeez256/mock-backend/users",
      user
    );
    console.log(res);
    // await axios.
  };
  return (
    <>
      <form onSubmit={handleform}>
        <h1>Register Page</h1>
        <div className="col-md-4">
          <label htmlFor="validationCustomFirstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={firstName}
            onChange={handleInput}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomLastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={lastName}
            onChange={handleInput}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomPassword" className="form-label">
            Password
          </label>
          <div className="input-group has-validation">
            <input
              type="password"
              className="form-control"
              aria-describedby="inputGroupPrepend"
              name="password"
              value={password}
              onChange={handleInput}
              required
            />
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomEmail" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <input
              type="email"
              className="form-control"
              aria-describedby="inputGroupPrepend"
              name="email"
              value={email}
              onChange={handleInput}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustomCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={city}
            onChange={handleInput}
            required
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustomState" className="form-label">
            State
          </label>
          <select
            className="form-select"
            name="country"
            value={country}
            onChange={handleInput}
            required
          >
            <option selected disabled required>
              Choose...
            </option>
            <option>USA</option>
            <option>Europe</option>
            <option>Pakistan</option>
            <option>England</option>
            <option>Australia</option>
            <option>India</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustomPhoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={phone}
            onChange={handleInput}
            required
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustomDOB" className="form-label">
            Date of Birth
          </label>
          <input
            type="text"
            className="form-control"
            name="dob"
            value={dob}
            onChange={handleInput}
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </>
  );
};

export default AddUser;
