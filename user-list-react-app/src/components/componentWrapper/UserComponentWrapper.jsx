import React, { useState } from "react";
import UserCard from "../UserCard";
import UserList from "../UserList";
import userData from "../../userData.json";

function UserComponentWrapper() {
  const [user, setUser] = useState(null);
  return (
    <div className="d-flex bg-white justify-content-between align-items-center my-3 ms-5 me-2">
      <UserList
        userData={userData}
        handleHover={(user) => {
          setUser(user);
        }}
      />

      <UserCard user={user} />
    </div>
  );
}

export default UserComponentWrapper;
