import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ isLogged, path }) => {
  console.log("Private  Route");
  return isLogged ? <Navigate to={path} /> : <Outlet />;
};

export default PrivateRoute;
