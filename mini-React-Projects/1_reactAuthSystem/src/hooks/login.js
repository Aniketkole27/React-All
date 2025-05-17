import React, { useState } from "react";
import { useAuth2 } from "../context/AuthContext2";

const useLogin = () => {
  const { users, login, error, setError } = useAuth2();
  const checkUser = (email, password) => {
    console.log("Inside Login");
    const status = users.find(
      (user) => user.email === email && user.password === password
    );
    if (status) {
      console.log("successfully login");
      setError(false);
    } else {
      setError(true);
    }
    return error;
  };
  return checkUser;
};

export default useLogin;
