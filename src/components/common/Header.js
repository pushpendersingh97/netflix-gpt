import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  console.log(user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between items-center py-4">
      <img src="/Netflix_Logo_PMS.png" alt="Logo" className="h-16" />
      {user && (
        <div className="flex">
          <span className="font-bold pr-3">{user.displayName}</span>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};
