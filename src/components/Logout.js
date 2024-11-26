import React from "react";
import { deleteToken } from "../API/storage";

const Logout = () => {
  return <button onClick={() => deleteToken()}>Log Out</button>;
};

export default Logout;
