import React from "react";
import { useMutation } from "@tanstack/react-query";
import { Formik, Form, Field } from "formik";
import { register } from "../API/auth";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newUserData) => register(newUserData),
    onSuccess: () => {
      navigate("/login");
    },
  });

  const handleSubmit = (formData) => {
    mutation.mutate({
      username: formData.username,
      password: formData.password,
      image: formData.image,
    });
  };
  return (
    <div className="formik-container background">
      <h1>Welcome to Bank</h1>
      <h4>
        If you have an account, please
        <a href="/login"> Login Here</a>
      </h4>
      <Formik
        initialValues={{ username: "", password: "", image: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" name="username" placeholder="Username" />
          <br />
          <Field type="password" name="password" placeholder="Password" />
          <br />
          <Field type="text" name="image" placeholder="Submit Image" />
          <br />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
