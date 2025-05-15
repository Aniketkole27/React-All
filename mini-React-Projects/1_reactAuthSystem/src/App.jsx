import { useState } from "react";
import "./App.css";
// import Resister from "./components/Resister/Resister";
import { AuthProvider } from "./context/AuthContext.js";
import AuthContext from "./context/AuthContext";

function App() {
  return (
    <AuthProvider value={{isAuthenticated}}>
      <h1 className="text-3xl py-2 text-white">
        React Auth System with Router Protection
      </h1>
    </AuthProvider>
  );
}

export default App;
