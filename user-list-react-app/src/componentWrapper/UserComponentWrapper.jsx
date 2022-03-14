import React, { useState } from "react";
import UserCard from "../components/UserCard/UserCard";
import UserList from "../components/UserList/UserList";
import userData from "../userData.json";

function UserComponentWrapper() {
  const [user, setUser] = useState(null);
  return (
    <div className="bg-white  ms-5 me-5">
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
