import React from "react";

function Home() {
  return (
    <>
        {/* Topbar */}
        {/* <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <span className="text-sm">Welcome, Aniket!</span>
        </header> */}
    
               {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6">
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to the React Auth System</h2>
          <p className="text-gray-600 mb-6">
            This project demonstrates a secure authentication flow in React with login, signup, and protected routes using <strong>React Router</strong> and <strong>Context API</strong>.
          </p>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" 
            alt="Auth Icon"
            className="mx-auto w-32 mb-6"
          />
          <div className="space-x-4">
            <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Login</a>
            <a href="/signup" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">Sign Up</a>
          </div>
        </section>
      </main>

    </>
  );
}

export default Home;
