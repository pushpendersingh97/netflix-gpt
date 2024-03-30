import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";

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
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between items-center py-4">
      <img src="/Netflix_Logo_PMS.png" alt="Logo" className="h-16" />
      {user && (
        <div className="flex">
          <span className="font-bold pr-3">
            <img src={user.photoURL} alt="Logo" className="h-12" />
          </span>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};
