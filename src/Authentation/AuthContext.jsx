import axios from "axios";
import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [cartpagedata, setCartpagedata] = useState([]);
  const [count1, setCount1] = useState(0);
  const navigate = useNavigate();
  const loginfn = (data) => {
    // console.log(isAuth);
    setIsAuth(true);
    setCartpagedata(data);
    navigate(`/`);
  };
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginfn, logout, cartpagedata }}>
      {children}
    </AuthContext.Provider>
  );
};
