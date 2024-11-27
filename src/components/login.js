import React from "react";
import { Formik, Form, Field } from "formik";
import { login } from "../API/auth";
import { useMutation } from "@tanstack/react-query";
import FirstPage from "./FirstPage";
import { checkToken } from "../API/storage";
import { Navigate } from "react-router-dom";

const Login = () => {
  const mutation = useMutation({
    mutationFn: (formData) => login(formData),
  });

  const handleSubmit = (formData) => {
    mutation.mutate({
      username: formData.username,
      password: formData.password,
    });
  };

  return (
    <div className="formik-container background">
      <h1>Welcome to Bank</h1>
      <h4>
        If you're new and don't have an account, please
        <a href="/register"> Register Here</a>
      </h4>
      <div>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field type="text" name="username" placeholder="Username" />
            <br />
            <Field type="password" name="password" placeholder="Password" />
            <br />
            <button type="submit">Login</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
