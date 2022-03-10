import React from "react";
// import UserProfile from "./UserProfile";
import userData from "../userData.json";
import ownerImage from "../images/jana.jpeg";
import UserProfile from "./UserProfile";

const UserList = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Access</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="d-flex">
              <div className="owner-image">
                <img src={ownerImage} alt="avatar" />
              </div>
              <div className="">
                <div>{userData[0].userName}</div>
                <div className="text-muted">{userData[0].userEmail}</div>
              </div>
            </td>
            <td>
              <div>{userData[0].userStatus}</div>
            </td>
            <td>
              <div>{userData[0].userAccess}</div>
            </td>
          </tr>

          {userData.map((data) => {
            return (
              <tr>
                <UserProfile
                  image={data.userImage}
                  name={data.userName}
                  email={data.userEmail}
                  status={data.userStatus}
                  access={data.userAccess}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
