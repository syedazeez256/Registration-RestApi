import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="">
            React App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" exact to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" exact to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/user/add" className="btn btn-outline-light">
            Add User
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Header;
