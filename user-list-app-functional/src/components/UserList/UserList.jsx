import React from "react";
import "./UserList.css";
import OwnerProfile from "../OwnerProfile/OwnerProfile";
import UserProfile from "../UserProfile/UserProfile";

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
                      key={data.id}
                      image={data.avatar}
                      name={`${data.first_name} ${data.last_name}`}
                      email={data.email}
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
                      key={data.id}
                      image={data.avatar}
                      name={`${data.first_name} ${data.last_name}`}
                      email={data.email}
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
