import React from "react";
import "./UserProfile";
import { Trash2 } from "react-feather";
import { mouseEnter, mouseLeave } from "../../Services/actions/index";
import { useDispatch } from "react-redux";

const UserProfile = (props) => {
  const { image, name, email } = props;
  const dispatch = useDispatch();
  return (
    <>
      <td
        className="d-flex"
        onMouseEnter={() => {
          // console.log("props:", props);
          // handleHover(props);
          dispatch(mouseEnter(props));
        }}
        onMouseLeave={() => {
          dispatch(mouseLeave());
        }}
      >
        <div className="me-2">
          <img src={image} alt="avatar" />
        </div>
        <div>
          <div className="fs-5">{name}</div>
          <div className="text-muted fs-6">{email}</div>
        </div>
      </td>
      <td>
        <div className="mx-2 fs-5">
          <select>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </td>
      <td>
        <div className="mx-2 fs-5">
          <select>
            <option value="Manager">Manager</option>
            <option value="Read">Read</option>
          </select>
        </div>
      </td>
      <td>
        <Trash2 className="text-muted" size={30} />
      </td>
    </>
  );
};

export default UserProfile;
