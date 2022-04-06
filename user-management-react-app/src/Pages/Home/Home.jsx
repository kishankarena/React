import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";

import "./home.css";

function Home() {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email, phoneNo, photo } = userData;
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-between">
        <div className="container container-fluid">
          <div className="navbar-brand me-2 fs-2 text-light">Home Page</div>
          <div>
            <button
              type="button"
              className="btn fs-3 bg-danger text-light px-3 me-2"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className=" usercard container m-5 text-center mx-auto">
        <img
          className="profile-pic my-4 mx-auto"
          src={photo}
          alt="ProfilePic"
        />
        <p className="fs-1">
          “Hello <span className="fw-bold">{name}</span>, you are registered
          with the email id - <span className="text-primary"> {email}</span> and
          phone number -<span className="text-primary">{phoneNo}</span>”
        </p>
      </div>
    </>
  );
}

export default Home;
