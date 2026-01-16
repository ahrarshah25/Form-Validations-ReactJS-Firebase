import React, { useEffect, useState } from "react";
import { auth } from '../../../firebase'
import { onAuthStateChanged } from "firebase/auth";

const ProfileImage = () => {

  const [userProfile, setUserProfile] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.photoURL) {
        setUserProfile(user.photoURL);
      } else {
        setUserProfile(
          "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        );
      }
    });

    return () => unsubscribe();
  }, []);

  
  
  

  return (
    <div className="relative group">
      <div className="absolute inset-0 -z-10 w-48 h-48 rounded-full bg-gray-200 animate-pulse" />

      <div className="w-44 h-44 rounded-full overflow-hidden shadow-xl transform transition-all duration-700 group-hover:-translate-y-4">
        <img
          className="w-full h-full object-cover"
          src={userProfile}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
