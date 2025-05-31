import React from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
     onClick={logoutHandler}
     className="inline-block px-6 py-2 duration-200 hover: bg-blue-100 rounded-full cursor-pointer">
      Logout
    </button>
  );
}

export default LogoutBtn;
