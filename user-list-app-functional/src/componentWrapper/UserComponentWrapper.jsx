import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard/UserCard";
import UserList from "../components/UserList/UserList";
import { getUserData } from "../misc/configData";
import ReactPaginate from "react-paginate";
import "./UserComponentWrapper.css";

const UserComponentWrapper = () => {
  const [userData, setUserData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    getUserData(pageNum).then((result) => {
      setUserData(result.data);
    });
  }, [pageNum]);

  const handlePageClick = (event) => {
    setPageNum(event.selected + 1);
  };

  return (
    <div className="Wrapper bg-white">
      <UserList userData={userData} />
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
          activeClassName="active"
        />
      </div>

      <UserCard />
    </div>
  );
};

export default UserComponentWrapper;
