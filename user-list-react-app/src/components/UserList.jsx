import React from "react";
import OwnerProfile from "./OwnerProfile";
import UserProfile from "./UserProfile";

const UserList = (props) => {
  return (
    <div className="user-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Access</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.userData.map((data, index) => {
            return (
              <>
                {index === 0 && (
                  <tr className="mt-2">
                    <OwnerProfile
                      image={data.userImage}
                      name={data.userName}
                      email={data.userEmail}
                      status={data.userStatus}
                      access={data.userAccess}
                    />
                  </tr>
                )}
                {index !== 0 && (
                  <tr
                    className="pt-5"
                    onMouseEnter={() => {
                      props.handleHover(data);
                    }}
                    onMouseLeave={() => {
                      props.handleHover(null);
                    }}
                  >
                    <UserProfile
                      image={data.userImage}
                      name={data.userName}
                      email={data.userEmail}
                      status={data.userStatus}
                      access={data.userAccess}
                    />
                  </tr>
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
