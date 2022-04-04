import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import TextField from "../TextField/TextField";

function Signup() {
  const SUPPORTED_FORMAT = ["image/png", "image/jpeg", "image/jpg"];
  const phoneRegEx = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[56789]\d{9}$/gm;
  const passwordRegEx =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  const nevigate = useNavigate();
  const validateFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(15, "Length is at least 15 char.")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNo: Yup.string()
      .matches(phoneRegEx, "PhoneNo is not valid")
      .required("Required"),
    password: Yup.string()
      .matches(
        passwordRegEx,
        "Must Contain 7 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    photo: Yup.mixed()
      .nullable()
      .required("Required")
      .test(
        "FILE_FORMAT",
        "Uploaded file has unsupported format.",
        (value) => !value || (value && SUPPORTED_FORMAT.includes(value.type))
      )
      .test(
        "FILE_SIZE",
        "Uploaded file is too big.",
        (value) => !value || (value && value.size <= 2 * 1024 * 1024)
      ),
  });
  return (
    <div>
      <div className="fs-1 fw-bold my-3">SignUp</div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNo: "",
          password: "",
          confirmPassword: "",
          photo: null,
        }}
        validationSchema={validateFormSchema}
        onSubmit={(value) => {
          nevigate("/home");
          console.log("Submit:", value);
        }}
      >
        {/* {({ setFieldValue, values, formik }) => ( */}
        {(formik) => (
          <div>
            {/* {console.log("valuee", values, formik)} */}
            {console.log(formik)}
            <Form>
              <div className="text-center fs-5">
                <label htmlFor="photo">photo+</label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  accept={["image/png", "image/jpeg", "image/jpg"]}
                  onChange={(e) => {
                    formik.setFieldValue("photo", e.currentTarget.files[0]);
                  }}
                  hidden
                />
                {formik.values.photo && (
                  <div> Uploaded: {formik.values.photo.name}</div>
                )}
                <ErrorMessage
                  className="text-danger"
                  name="photo"
                  component="div"
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
              <button className="btn btn-primary mt-5 mx-1 fs-5" type="submit">
                Submit
              </button>
              <button className="btn btn-danger mt-5 mx-1 fs-5" type="reset">
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
