import React from "react";
import Input from "./Input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import addUser from "../API/index";
import { Formik } from "formik";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  //   const mutation = useMutation({
  //     mutationFn: (newUserData) => addUser(newUserData),
  //   });

  //   const handleSubmit = () => {
  //     mutation.mutate({
  //       username: username,
  //       password: password,
  //       image: image,
  //     });
  //   };
  return (
    <div>
      <h1>Welcome to Bank</h1>
      <h4>
        If you have an account, please
        <a href="https://www.google.com"> login here</a>
      </h4>
      <div>
        <h3>Enter Username</h3>
        <input
          name=""
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div>
        <h3>Enter Password</h3>
        <input
          type="Password"
          name=""
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <h3>Upload a Profile Picture</h3>
      </div>
      <div>
        <button onClick="">
          {/* {handleSubmit} */}
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
