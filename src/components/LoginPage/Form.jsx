import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Swal from "sweetalert2";
import Input from "../SignupPage/Input";
import { User } from "lucide-react";
import Button from "../SignupPage/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const inputValues = [
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
  ];

  const loginUser = async (e) => {
    e.preventDefault();
    const { userEmail , userPassword } = formData;

    if(!userEmail || !userPassword) {
      Swal.fire({
        title: "Error",
        text: "Please Fill All The Fields.",
        icon: "error"
      });
      return;
    }

    try {
      const user = await signInWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    )

    Swal.fire({
      title: "Success",
      text: "Login Successfully.\nWelcome Back, " + user.user.displayName,
      icon: "success"
    }).then(()=>{
      window.location.href = "/dashboard"
    })
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Error: " + error.message,
        icon: "error"
      });
    }

    const key = e.keyCode || e.which;
    if(key === 13) {
      loginUser();
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          loginUser(e);
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
        <Button icon={User} name="Login" />
      </form>
    </div>
  );
};

export default Form;
