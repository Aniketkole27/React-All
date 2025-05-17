import React from "react";

function Home() {
  return (
    <>
      {/* HomePage */}
      {/* <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Auth System 🚀
        </h1>

        {false ? (
          <div className="text-gray-700">
            <p className="text-xl font-semibold">
              Hello, <span className="text-purple-600">Aniket</span> 👋
            </p>
            <p className="mt-2 text-sm">You are successfully logged in.</p>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 text-lg mb-6">
              Please <span className="text-indigo-600 font-medium">Login</span> or{" "}
              <span className="text-indigo-600 font-medium">Register</span> to continue.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
                Login
              </button>
              <button className="bg-gray-200 text-indigo-700 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </div> */}

      {/* Dashboard */}
      {/* <div className="min-h-screen bg-gradient-to-br from-green-600 to-emerald-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome, <span className="text-green-700 font-semibold">Aniket</span> 👋
        </p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div> */}

      <div>
        <div>
          <div>
            <h2 className="text-3xl mt-7 mb-3 py-2 inline-block p-10 text-orange-700 font-stretch-100% text-shadow-2xs ">
              This is Auth Protector
            </h2>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <img
              className="w-120 mx-auto rounded-3xl mb-10 shadow-2xl"
              src="https://img.freepik.com/free-vector/man-sysadmine-computer-programmer-working-computer_575670-70.jpg?ga=GA1.1.1707696618.1737786222&semt=ais_hybrid&w=740"
              alt=""
            />
            <div className="mt-25 text-2xl">
              <p className="text-2xl text-gray-700 mb-6 text-justify">
                Welcome to our secure authentication system built with React.
                Whether you're new or returning, we're excited to have you here.
                Please login to access your dashboard or register to create a
                new account. Your information is protected and your experience
                is our priority.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <img
              className="w-110 mx-auto rounded-3xl shadow-2xl"
              src="https://img.freepik.com/free-vector/professional-office-worker-with-flat-design_23-2147900411.jpg?ga=GA1.1.1707696618.1737786222&semt=ais_hybrid&w=740"
              alt="Login concept illustration"
            />

            <div className="mt-10 text-2xl mx-auto cursor-pointer inline-block">
              <h2 className="text-2xl text-white px-8 py-3 rounded-2xl bg-orange-700 mb-6 text-justify hover:bg-orange-800  focus:ring-orange-100  focus:outline-none">
                Get Started
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
