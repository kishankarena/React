import React from "react";

import SignupForm from "../../components/SignUpForm/SignUpForm";
import bgimage from "../../Images/bgimage.png";
import "./signUp.css";

function SignUp() {
  return (
    <div className="mt-5 signup container px-3 py-3 bg-light">
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
