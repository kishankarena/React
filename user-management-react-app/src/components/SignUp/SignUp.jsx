import React from "react";
import { Formik, Form } from "formik";
import TextField from "../TextField/TextField";

function Signup() {
  return (
    <div>
      <h1 className="mx-3 my-5 font-weight-bold-display-4">SignUp</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNo: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          const errors = {};
          // Name validation
          if (!values.name) {
            errors.name = "Required";
          } else if (!/^[aA-zZ\s]+$/.test(values.name)) {
            errors.name = "Enter valid name";
          } else if (values.name.length < 15) {
            errors.name = "Enter at least 15 character";
          }
          // Email Validation
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          // PhoneNo Validation
          if (!values.phoneNo) {
            errors.phoneNo = "Required";
          } else if (
            !/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[56789]\d{9}$/gm.test(
              values.phoneNo
            )
          ) {
            errors.phoneNo = "Invalid PhoneNo";
          }
          // Password Validation
          if (!values.password) {
            errors.password = "Required";
          } else if (
            !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(
              values.password
            )
          ) {
            errors.password = "Password is weak";
          }
          //
          if (!values.confirmPassword) {
            errors.confirmPassword = "Required";
          } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Password not match";
          }

          return errors;
        }}
      >
        {(formik) => (
          <div>
            {console.log(formik)}
            <Form>
              <div className="text-center">
                <label htmlFor="photo">photo+</label>
                <input
                  id="photo"
                  type="file"
                  accept={["image/png", "image/jpeg", "image/jpg"]}
                  hidden
                />
              </div>
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
