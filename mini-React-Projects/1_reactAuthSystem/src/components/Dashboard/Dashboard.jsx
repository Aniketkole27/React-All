import React from "react";

function Dashboard() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-600 to-emerald-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome,{" "}
            <span className="text-green-700 font-semibold">Aniket</span> 👋
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
