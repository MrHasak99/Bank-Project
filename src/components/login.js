import React from "react";
import Input from "./Input";
import { Formik, Form, Field } from "formik";

const Login = () => {
  return (
    <div className="formik-container">
      <h1>Welcome to Bank</h1>
      <div>
        <Formik
          initialValues={{ username: "", password: "", image: "" }}
          // onSubmit={handleSubmit}
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
