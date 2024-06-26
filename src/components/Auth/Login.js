import React, { useRef, useState } from "react";
import { Header } from "../common/Header";
import { BACKGROUND_IMG, PROFILE_IMG } from "../../utils/constants";
import { validateData } from "../../utils/validation";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/store/userSlice";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const username = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleClick = () => {
    const message = validateData(
      username.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) {
      return;
    }

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        username.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: PROFILE_IMG
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        username.current.value,
        password.current.value
      )
        .then(() => {})
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    }
  };

  const toggleSignIn = () => {
    setErrorMessage(null);
    setSignIn(!isSignIn);
  };

  return (
    <div className=" w-full bg-gradient-to-b from-black text-white">
      <div className="absolute w-full h-full -z-10">
        <img src={BACKGROUND_IMG} alt="Background" className="h-full w-full" />
      </div>
      <div className="container mx-auto z-10 ">
        <div className="flex w-100">
          <Header />
        </div>
        <div className="w-full mx-auto max-w-lg pt-60 ">
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
                  ref={fullName}
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
                ref={username}
              />
            </div>
            <div className="mb-4">
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
                ref={password}
              />
            </div>
            {errorMessage && (
              <p className="text-red-700 mb-4">{errorMessage}</p>
            )}
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
                onClick={toggleSignIn}
              >
                {isSignIn
                  ? "New to Netflix? Sign Up Now"
                  : "Already have account?"}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
