import React from "react";
import { deleteUser, signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { LogOut, Trash } from "lucide-react";
import Swal from "sweetalert2";

const Button = () => {
  const logout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/login";
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  const deleteAccount = async () => {
    const user = auth.currentUser;

    if (!user) {
      Swal.fire({
        title: "Error",
        text: "No user logged in",
        icon: "error",
      });
      return;
    }

    try {
      await deleteUser(user);
      Swal.fire({
        title: "Success",
        text: "User Deleted Successfully.",
        icon: "success",
      }).then(()=>{window.location.href = "/signup"});
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <>
      <button
        onClick={logout}
        className="flex items-center gap-2 mt-10 w-full px-10 py-2 rounded-md text-sm font-medium border border-red-600 text-red-600 hover:bg-red-50 transition-all duration-200"
      >
        <LogOut size={18} /> Logout
      </button>

      <button
        onClick={deleteAccount}
        className="flex items-center gap-2 mt-5 w-full px-10 py-2 rounded-md text-sm font-medium border border-red-600 text-red-600 hover:bg-red-50 transition-all duration-200"
      >
        <Trash size={18} /> Delete Account
      </button>
    </>
  );
};

export default Button;
