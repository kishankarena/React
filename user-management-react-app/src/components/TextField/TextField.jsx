import React from "react";
import { Field, ErrorMessage } from "formik";
import "./textField.css";

const TextField = ({ label, type, name }) => {
  return (
    <div>
      <label className="mt-4 me-5 fs-5" htmlFor="name">
        {label}
      </label>
      <Field
        className="form-control field"
        name={name}
        type={type}
        label={label}
      />
      <ErrorMessage className="text-danger" name={name} component="div" />
    </div>
  );
};

export default TextField;
