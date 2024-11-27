import React from "react";
import { deleteToken } from "../API/storage";

const Logout = () => {
  return (
    <button className="logout-btn" onClick={() => deleteToken()}>
      Log Out
    </button>
  );
};

export default Logout;
