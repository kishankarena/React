import React from "react";

const UserProfile = (props) => {
  const { image, name, email, status, access } = props;
  return (
    <>
      <td className="d-flex">
        <div>
          <img src={image} alt="avatar" />
        </div>
        <div className="">
          <div className>{name}</div>
          <div className="text-muted">{email}</div>
        </div>
      </td>
      <td>
        <div className="mx-2">{status}</div>
      </td>
      <td>
        <div className="mx-2">{access}</div>
      </td>
    </>
  );
};

export default UserProfile;
