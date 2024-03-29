import React from "react";
import { Header } from "../common/Header";
import { BACKGROUND_IMG } from "../../utils/constants";

const Login = () => {
  return (
    <div className=" w-full bg-gradient-to-b from-black text-white">
      <div className="absolute w-full -z-10">
        <img
          src={BACKGROUND_IMG}
          alt="Background"
          className="h-[100vh] w-full"
        />
      </div>
      <div className="container mx-auto z-10 h-[100vh]">
        <div className="flex w-100">
          <Header />
        </div>
          <div class="w-full mx-auto max-w-lg ">
            <form className="bg-[#00000080] rounded px-8 pt-6 pb-8 mb-4">
              <div className="font-bold text-lg mb-5">Log IN</div>
              <div className="mb-4">
                <label
                  className="block text-gray-200 text-sm font-bold mb-2"
                  for="username"
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
                  for="password"
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
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="/#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Login;
