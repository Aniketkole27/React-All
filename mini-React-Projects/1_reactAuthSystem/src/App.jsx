import { useEffect, useState } from "react";
import "./App.css";
import Resister from "./components/Resister/Resister";
// import { AuthProvider } from "./context/AuthContext.js";
// import AuthContext from "./context/AuthContext";

import { AuthContext2Provider } from "./context/AuthContext2";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";



function App() {
  return (
    <AuthContext2Provider>
      {/* <h1 className="text-3xl py-2 text-white">
        React Auth System with Router Protection
      </h1> */}
      {/* <Resister /> */}
      {/* <Login /> */}
      {/* <Header /> */}
      <Home />
    </AuthContext2Provider>
  );
}

export default App;
