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
      className="inline-block px-6 py-2 duration-200 bg-[#999fad57] hover:text-black hover:bg-gray-200 shadow-xl rounded-full cursor-pointer"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
