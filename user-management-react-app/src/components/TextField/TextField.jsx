import React from "react";
import { Field } from "formik";
import "./textField.css";

const TextField = ({ label, type, name }) => {
  return (
    <div>
      <label className="mt-4" htmlFor="name">
        {label}
      </label>
      <Field className="form-control text-field" name={name} type={type} />
    </div>
  );
};

export default TextField;
