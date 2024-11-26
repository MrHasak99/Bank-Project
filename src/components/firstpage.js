import React from "react";
import Home from "./Home";
import { Navigate } from "react-router-dom";
import { checkToken } from "../API/storage";

const FirstPage = () => {
  if (!checkToken()) {
    return <Navigate to="/login" />;
  }

  return <Home />;
};

export default FirstPage;
