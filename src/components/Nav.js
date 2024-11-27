import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

function Nav() {
  return (
    <div className="navbar ">
      <img
        className="logo"
        src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/82/31/2f/82312fff-240d-ef28-200b-dbd84d35cb7f/AppIcon-0-0-1x_U007epad-0-0-85-220.png/246x0w.webp"
        alt="Bank-Logo"
      ></img>
      <div className="nav-links navlink">
        <div className="navlink ">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
              };
            }}
          >
            Home
          </NavLink>
        </div>
        <div className="navlink">
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
        </div>
        <div className="navlink">
          <NavLink
            to="/users"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
              };
            }}
          >
            Users
          </NavLink>
        </div>
        <div className="navlink">
          <NavLink
            to="/profile"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
              };
            }}
          >
            Profile
          </NavLink>
        </div>
      </div>
      <div>
        <Logout />
      </div>
    </div>
  );
}

export default Nav;
