import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase "
      id="mainNav"
    >
      <div className="container">
        <img src="" alt="Bank-Logo"></img>
        <div>
          <NavLink to="/" className="navbar-brand" href="#">
            Home
          </NavLink>
          <li className="nav-item mx-0 mx-lg-1">
            <NavLink
              to="/transactions"
              className="nav-link py-3 px-0 px-lg-3 rounded"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Transactions
            </NavLink>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <NavLink
              to="/users"
              className="nav-link py-3 px-0 px-lg-3 rounded"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Users
            </NavLink>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <NavLink
              to="/profile"
              className="nav-link py-3 px-0 px-lg-3 rounded"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Profile
            </NavLink>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
