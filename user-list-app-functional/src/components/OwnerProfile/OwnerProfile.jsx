import React from "react";
import "./OwnerProfile.css";
import { Lock } from "react-feather";

const OwnerProfile = (props) => {
  const { image, name, email } = props;
  return (
    <>
      <td className="d-flex">
        <div className="owner-image me-2">
          <img src={image} alt="avatar" />
        </div>
        <div>
          <div className="fs-5">{name}</div>
          <div className="text-muted fs-6">{email}</div>
        </div>
      </td>
      <td>
        <div className="mx-2 text-success fs-5">Active</div>
      </td>
      <td>
        <div className="mx-2 fs-5">Owner</div>
      </td>
      <td>
        <Lock className="text-muted" size={30} />
      </td>
    </>
  );
};

export default OwnerProfile;
