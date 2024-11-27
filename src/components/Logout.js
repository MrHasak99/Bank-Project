import React from "react";
import { deleteToken } from "../API/storage";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    deleteToken();
    navigate("/login");
  };

  return (
    <button className="logout-btn" onClick={handleLogOut}>
      Log Out
    </button>
  );
};

export default Logout;
