import React from "react";

import SignupForm from "../../components/SignUpForm/SignUpForm";
import bgimage from "../../Images/bgimage.png";
import "./signUp.css";

function SignUp() {
  return (
    <div className=" signUp container px-3 py-3 ">
      <div className="row">
        <div className="col">
          <SignupForm />
        </div>
        <div className="col">
          <img src={bgimage} className="" alt="bgimage" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
