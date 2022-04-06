import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const isLogged = useSelector((state) => state.isLogged);
  console.log(isLogged);
  return isLogged ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
