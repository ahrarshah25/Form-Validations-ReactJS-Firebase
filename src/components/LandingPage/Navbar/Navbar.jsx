import React, { useState , useEffect } from "react";
import Logo from "./logo";
import Button from "./Button";
import { signOut } from 'firebase/auth'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";
import Swal from "sweetalert2";
import { UserPen, UserRoundPlus, User, LogOut } from "lucide-react";

const Navbar = () => {

  const defaultButtons = [
  {
    loginBtn: {
      icon: UserPen,
      name: "Login",
      func: () => {
        window.location.href = "/login";
      },
    },
    signupBtn: {
      icon: UserRoundPlus,
      name: "Create Account",
      func: () => {
        window.location.href = "/signup";
      },
    },
  },
];


  const [buttonData, setButtonData] = useState([
    {
      loginBtn: {
        icon: UserPen,
        name: "Login",

        func: () => {
          window.location.href = "/login";
        },
      },
      signupBtn: {
        icon: UserRoundPlus,
        name: "Create Account",

        func: () => {
          window.location.href = "/signup";
        },
      },
    },
  ]);


useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setButtonData([
        {
          loginBtn: {
            icon: LogOut,
            name: "Logout",
            func: async () => {
              try {
                await signOut(auth);
                Swal.fire({
                  title: "Success",
                  text: "Logout Successfully",
                  icon: "success",
                });
              } catch (error) {
                Swal.fire({
                  title: "Error",
                  text: error.message,
                  icon: "error",
                });
              }
            },
          },
          signupBtn: {
            icon: User,
            name: "Welcome, " + (user.displayName || "User"),
            func: () => {
              window.location.href = "/dashboard";
            },
          },
        },
      ]);
    } else {
    setButtonData(defaultButtons);
    }
  });

  return () => unsubscribe();
}, []);

  return (
    <div className="w-full bg-white border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          {buttonData.map((item, index) => (
            <React.Fragment key={index}>
              {item.loginBtn && (
                <Button
                  icon={item.loginBtn.icon}
                  name={item.loginBtn.name}
                  func={item.loginBtn.func}
                />
              )}
              {item.signupBtn && (
                <Button
                  icon={item.signupBtn.icon}
                  name={item.signupBtn.name}
                  func={item.signupBtn.func}
                />
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
