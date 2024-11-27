import React from "react";
import { Navigate } from "react-router-dom";
import { checkToken } from "../API/storage";

const FirstPage = () => {
  if (!checkToken()) {
    return <Navigate to="/login" />;
  }

  return <Navigate to="/home" />;
};

export default FirstPage;
