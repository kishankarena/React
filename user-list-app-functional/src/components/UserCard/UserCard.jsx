import React from "react";
import "./UserCard.css";
import { ProgressBar } from "react-bootstrap";

const UserCard = (props) => {
  const progressFunction = () => {
    return Math.floor(Math.random() * 5000);
  };
  const progressValue = progressFunction();

  return (
    <>
      {props.user !== null && (
        <div className="user-card bg-white">
          <img src={props.user.userImage} alt="avtar" />
          <h5 className="mt-3">
            {props.user.userName} <span className="dot">&#729;</span>
          </h5>

          <h6 className="text-muted">{props.user.userEmail}</h6>
          <h5>Your Plan: Standard</h5>
          <button>Active USer</button>
          <div>
            <div className=" mt-2 ms-4 text-start"> Plan Uses</div>

            <ProgressBar
              className="progress-barparent ms-4 me-4 mt-2"
              now={Math.round((progressValue / 5000) * 100)}
            />
            <div className="d-flex mt-3">
              <div>
                <div className="ms-4 text-start">
                  <h3>{progressValue}</h3>
                </div>
                <div className="ms-4 text-start text-muted">
                  clicks reviewed
                </div>
              </div>
              <div className="userCardLine"></div>
              <div>
                <div className="text-start">
                  <h3>5000</h3>
                </div>
                <div className="text-start text-muted">monthly clicks</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCard;
