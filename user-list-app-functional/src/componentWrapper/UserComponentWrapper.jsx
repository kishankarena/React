import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard/UserCard";
import UserList from "../components/UserList/UserList";
import { response } from "../misc/configData";
import ReactPaginate from "react-paginate"

const UserComponentWrapper = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    response.then((result) => {
      setUserData(result.data);
    });
  }, []);

  const handlePageClick = (event) => {
    console.log(event.selected);

  };

  return (
    <div className="bg-white ms-5 me-5">
      <UserList
        userData={userData}
        handleHover={(user) => {
          setUser(user);
        }}
      />
      <div className="d-flex justify-content-center">
        <ReactPaginate
          previousLabel={<>&laquo;</>}
          nextLabel={<>&raquo;</>}
          pageCount={2}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
        />
      </div>

      <UserCard user={user} />
    </div>
  );
};

export default UserComponentWrapper;
