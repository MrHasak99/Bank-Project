import React from "react";
import { Formik, Form, Field } from "formik";

const Login = () => {
  return (
    <div className="formik-container">
      <h1>Welcome to Bank</h1>
      <h4>
        If you're new and don't have an account, please
        <a href="/register"> Register Here</a>
      </h4>
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
