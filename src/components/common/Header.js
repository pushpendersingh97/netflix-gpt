import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/store/userSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const suscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Remove the event listner if header dismount
    return () => suscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
      });
  };

  const handleSearch = () => {
    navigate("/search")
  }

  return (
    <div className="flex justify-between items-center py-4 bg-gradient-to-b from-black text-white px-12 absolute z-10 w-screen">
      <img src="/Netflix_Logo_PMS.png" alt="Logo" className="h-16" />
      {user && (
        <div className="flex justify-center items-center">
          <span className="mr-3" onClick={handleSearch}><span className="pr-2">&#128269;</span> Search</span>
          <span className="font-bold pr-3">
            <img src={user.photoURL} alt="Logo" className="h-12" />
          </span>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};
