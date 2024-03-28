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
        <Header />
      </div>
    </div>
  );
};

export default Login;
