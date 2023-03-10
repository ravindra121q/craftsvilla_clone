import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Authentation/AuthContext";
import { Navigate } from "react-router-dom";
const PrivateRoutes = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoutes;
