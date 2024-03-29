import React, { useState } from "react";
import { Header } from "../common/Header";
import { BACKGROUND_IMG } from "../../utils/constants";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);

  const handleClick = () => {
    console.log("Handle Click")
  }

  return (
    <div className=" w-full bg-gradient-to-b from-black text-white">
      <div className="absolute w-full -z-10">
        <img
          src={BACKGROUND_IMG}
          alt="Background"
          className="h-100 w-full"
        />
      </div>
      <div className="container mx-auto z-10 h-100">
        <div className="flex w-100">
          <Header />
        </div>
        <div className="w-full mx-auto max-w-lg ">
          <form className="bg-[#00000080] rounded px-8 pt-6 pb-8 mb-4">
            <div className="font-bold text-lg mb-5">
              {isSignIn ? "Sign In" : "Sign Up"}
            </div>
            {!isSignIn && (
              <div className="mb-4">
                <label
                  className="block text-gray-200 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Full Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
            )}
            <div className="mb-4">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleClick}
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/#"
                onClick={() => setSignIn(!isSignIn)}
              >
                {isSignIn ? "New to Netflix? Sign Up Now" : "Already have account?"}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
