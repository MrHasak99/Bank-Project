import React from "react";
import Input from "./Input";

const Login = () => {
  return (
    <div>
      <h1>Welcome to Bank</h1>
      <div>
        <h3>Enter your Username</h3>
        <Input name="" onChange={""} />
      </div>
      <div>
        <h3>Enter your Password</h3>
        <Input name="" onChange={""} />
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
