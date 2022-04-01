import React from "react";
import { Formik, Form, Field } from "formik";
import TextField from "../TextField/TextField";

function Signup() {
  return (
    <div>
      <h1 className="mx-3 my-5 font-weight-bold-display-4">Signup</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNo: "",
          password: "",
          confirmPassword: "",
        }}
      >
        {(formik) => (
          <div>
            {console.log(formik)}
            <Form className="signup-form">
              <TextField label="Name" type="text" name="name" />
              <TextField label="Email" type="email" name="email" />
              <TextField label="PhoneNo" type="text" name="phoneNo" />
              <TextField label="Password" type="password" name="password" />
              <TextField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
              />
              <button className="btn btn-primary mt-5 mx-1" type="submit">
                Submit
              </button>
              <button className="btn btn-danger mt-5 mx-1" type="reset">
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
