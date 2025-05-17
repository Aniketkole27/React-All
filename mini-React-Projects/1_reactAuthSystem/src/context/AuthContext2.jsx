import React, { useState } from "react";
import { createContext, useContext } from "react";

const AuthContext2 = createContext(null);

 const login = (user) => {}
 const logout =(id) => {}
 const register = (user) => {}


export const AuthContext2Provider = (props) => {
  const [users, setUsers] = useState([{username:"Aniket",email:"aniketkole818@gmail.com",password:"123"}]);
    const [error, setError] = useState(false);
  return (
    <AuthContext2.Provider value={{ users, setUsers, login, logout, register, error, setError }}>
      {props.children}
    </AuthContext2.Provider>
  );
};

export const useAuth2 = () => {
  return useContext(AuthContext2);
};

export default AuthContext2;
