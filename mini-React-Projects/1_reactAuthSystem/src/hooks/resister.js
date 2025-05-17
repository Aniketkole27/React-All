import { useState } from "react";
import { useAuth2 } from "../context/AuthContext2";

const useResister = () => {
  const { users, setUsers, register } = useAuth2();

  const resisterUser = (name, email, password) => {
    const user = {
      id: Date.now(),
      name,
      email,
      password,
    };

    register(setUsers([user, ...users]));
    return users;
  };
  return resisterUser;
};

export default useResister;
