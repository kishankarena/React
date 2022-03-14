import React from "react";
import "./UserProfile";
import { Trash2 } from "react-feather";

const UserProfile = (props) => {
  const { image, name, email, status, access } = props;
  return (
    <>
      <td className="d-flex">
        <div className="me-2">
          <img src={image} alt="avatar" />
        </div>
        <div>
          <div>{name}</div>
          <div className="text-muted">{email}</div>
        </div>
      </td>
      <td>
        <div className="mx-2">
          <select defaultValue={status}>
            <option value="Inactive">Inactive</option>
            <option value="Active">Active</option>
          </select>
        </div>
      </td>
      <td>
        <div className="mx-2">
          <select defaultValue={access}>
            <option value="Manager">Manager</option>
            <option value="Read">Read</option>
          </select>
        </div>
      </td>
      <td>
        <Trash2 className="text-muted" size={20} />
      </td>
    </>
  );
};

export default UserProfile;
