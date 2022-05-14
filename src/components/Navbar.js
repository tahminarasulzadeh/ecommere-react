import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { FaCartPlus } from "@react-icons/all-files/fa/FaCartPlus";

const Navbar = () => {
  const state = useSelector((state) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg- white py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          LA COLLECTION
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <NavLink to="/" className="nav-item">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
            </NavLink>
            <NavLink className="nav-item" to="/product">
              <a className="nav-link">Products</a>
            </NavLink>

            <NavLink to="/about" className="nav-item">
              <a className="nav-link">About</a>
            </NavLink>
            <NavLink className="nav-item" to="/contact">
              <a className="nav-link">Contact</a>
            </NavLink>
          </ul>
          <div className="buttons">
            <NavLink to="/cart" className="btn btn-outline-warning  ms-2">
              {" "}
              <FaCartPlus className="me-1" /> Cart ({state.length}){" "}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
