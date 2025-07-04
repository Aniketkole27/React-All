import React, { useState, useEffect } from "react";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";
import Card from "./Card";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !false ? (
    <div className="min-h-screen flex flex-col">
      <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
      <Footer />
    </div>
  ) : (
    // <div className="flex justify-center items-center h-screen">
    //     <div className="w-15 h-15 border-5 border-white border-t-transparent rounded-full animate-spin"></div>
    // </div>
    <Card />
  );
}

export default App;
