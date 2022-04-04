import React from "react";

import SignupForm from "../../components/SignUpForm/SignUpForm";
import bgimage from "../../Images/bgimage.png";

function SignUp() {
  return (
    <div className="container mt-5">
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
