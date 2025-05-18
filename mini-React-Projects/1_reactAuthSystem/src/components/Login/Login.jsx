import React from "react";
import { useState } from "react";
import { useAuth2 } from "../../context/AuthContext2";
import useLogin from "../../hooks/login";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error } = useAuth2();
  const checkUser = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    checkUser(email, password);

    setPassword("");
    setEmail("");
  };

  return (
    <>
      <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
        <div className="max-w-screen-xl bg-gray-200  shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 bg-[#C7E0F6] text-center hidden md:flex">
            <div
              className="m-2 xl:m-2 inline w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(https://img.freepik.com/free-vector/flat-safer-internet-day-illustration_23-2151164065.jpg?ga=GA1.1.1707696618.1737786222&semt=ais_hybrid&w=740)`,
              }}
            ></div>
          </div>
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 rounded-md">
            <div className=" flex flex-col items-center">
              <div className="text-center">
                <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                  Login
                </h1>
                <p className="text-[12px] text-gray-500 mt-5">Welcome back!</p>
                <p>
                  {error && (
                    <span className="text-red-500">
                      {" "}
                      Invalid username or password{" "}
                    </span>
                  )}
                </p>
              </div>
              <div className="w-full flex-1 mt-8">
                <form
                  id={Date.now()}
                  onSubmit={handleLogin}
                  className="mx-auto max-w-xs flex flex-col gap-4"
                >
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    id="emailinLogin"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />

                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    id="passwordinLogin"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Login</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Don't have an account?
                    <Link
                      to="/signup"
                      className="font-semibold text-gray-800 hover:text-blue-900 focus:text-blue-900"
                    >
                      <span className="text-blue-900 font-semibold">
                        Register
                      </span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
