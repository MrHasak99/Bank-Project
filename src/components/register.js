import React from "react";
import Input from "./input";

const Register = () => {
  return (
    <div>
      <h1>Welcome to Bank</h1>
      <div>
        <h3>Enter Username</h3>
        <Input name="" onChange={""} />
      </div>
      <div>
        <h3>Enter Password</h3>
        <Input name="" onChange={""} />
      </div>
      <div>
        <h3>Upload a Profile Picture</h3>
      </div>
      <div>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Register;
