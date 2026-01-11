import React, { useState } from "react";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import Input from "./Input";
import { UserPen } from "lucide-react";
import Button from "./Button";

const Form = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
  });

  const inputValues = [
    {
      type: "text",
      placeholder: "Enter Your Name...",
      value: formData.userName,
      func: (e) => {
        setFormData({ ...formData, userName: e.target.value });
      },
    },
    {
      type: "email",
      placeholder: "Enter Your Email...",
      value: formData.userEmail,
      func: (e) => {
        setFormData({ ...formData, userEmail: e.target.value });
      },
    },
    {
      type: "password",
      placeholder: "Enter Your Password...",
      value: formData.userPassword,
      func: (e) => {
        setFormData({ ...formData, userPassword: e.target.value });
      },
    },
    {
      type: "password",
      placeholder: "Enter Your Password Again...",
      value: formData.confirmPassword,
      func: (e) => {
        setFormData({ ...formData, confirmPassword: e.target.value });
      },
    },
  ];

  const registerUser = async (e) => {
    e.preventDefault();
    const { userEmail, userPassword, userName, confirmPassword } = formData;

    const validateEmail = (userEmail) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(userEmail)) {
        localStorage.setItem(
          "msg",
          "Please Enter Correct Email With Correct Syntax.\nFor Example: name@domain.com"
        );
        return false;
      }
      return true;
    };

    if (!userEmail || !userName || !confirmPassword || !userPassword) {
      Swal.fire({
        title: "Error",
        text: "Please Fill All The Fields.",
        icon: "error",
      });
      return;
    }

    if (!validateEmail(userEmail)) {
      Swal.fire({
        title: "Error",
        text: localStorage.getItem("msg"),
        icon: "error",
      });
      return;
    }

    if (userPassword.length < 8 || confirmPassword.length < 8) {
      Swal.fire({
        title: "Error",
        text: "Please Enter At Least Password That Contain 8 Characters.",
        icon: "error",
      });
      return;
    }

    if (userPassword !== confirmPassword) {
      Swal.fire({
        title: "Error",
        text: "Please Enter Same Password In Confirm Password Section.",
        icon: "error",
      });
      return;
    }

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      // console.log(user);

      const userCredential = user.user;
      // console.log(userCredential);

      await updateProfile(userCredential, {
        displayName: userName,
      });

      Swal.fire({
        title: "Success",
        text: "Signup Successfully.\nWelcome, " + userCredential.displayName,
        icon: "success",
      }).then(() => {
        window.location.href = "/dashboard";
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Error: " + error.message,
        title: "Error",
      });
    }

    const key = e.keyCode || e.which;
    if(key === 13) {
        registerUser();
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          registerUser(e);
        }}
        className="space-y-4"
      >
        {inputValues.map((e, i) => {
          return (
            <Input
              key={i}
              type={e.type}
              placeholder={e.placeholder}
              value={e.value}
              func={e.func}
            />
          );
        })}
        <Button icon={UserPen} name="Create Account" />
      </form>
    </div>
  );
};

export default Form;
