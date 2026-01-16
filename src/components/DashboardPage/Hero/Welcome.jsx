import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import Note from "./Note";

const Welcome = () => {

  const [userName, setUserName] = useState("")

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName)
      } else {
        setUserName("")
        window.location.href = "/login"
      }
    })
  }, [])
  
  return (
    <section>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Welcome,
            <span className="ml-2 text-blue-600">
              {userName}
            </span>
          </h2>

          <Note />
    </section>
  );
};

export default Welcome;
