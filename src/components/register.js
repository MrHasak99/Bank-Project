import React from "react";
import Input from "./Input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import addUser from "../API/index";
import { Formik, Form, Field } from "formik";

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
        <a href="/login"> login here</a>
      </h4>
      <Formik
        initialValues={{ username: "", password: "", image: "" }}
        // onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" name="username" placeholder="Enter Username" />
          <Field type="password" name="password" placeholder="Enter Password" />
          <Field type="text" name="image" placeholder="Submit Image" />
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
