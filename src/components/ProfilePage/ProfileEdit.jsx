import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";
import Input from "../SignupPage/Input";
import Button from "../SignupPage/Button";
import ImageContainer from "./ImageContainer";
import { Save } from "lucide-react";
import Swal from "sweetalert2";

const ProfileEdit = () => {
  const user = auth.currentUser;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!user) return;

    setFormData({
      name: user.displayName || "",
      phone: user.phoneNumber || "",
    });

    setImage(user.photoURL);
  }, [user]);

  const inputs = [
    {
      type: "text",
      placeholder: "Enter your name",
      value: formData.name,
      func: (e) =>
        setFormData({ ...formData, name: e.target.value }),
    },
    {
      type: "text",
      placeholder: "Enter phone number",
      value: formData.phone,
      func: (e) =>
        setFormData({ ...formData, phone: e.target.value }),
    },
  ];

  const saveProfile = async () => {
    if (!formData.name) {
      Swal.fire("Error", "Name is required", "error");
      return;
    }

    try {
      await updateProfile(user, {
        displayName: formData.name,
        photoURL: image,
      });

      Swal.fire({
        title: "Success",
        text: "Profile updated successfully",
        icon: "success",
      });
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="max-w-sm mx-auto space-y-6">
      <ImageContainer
        image={image}
        func={(e) =>
          setImage(URL.createObjectURL(e.target.files[0]))
        }
      />

      {inputs.map((inp, i) => (
        <Input key={i} {...inp} />
      ))}

      <Button icon={Save} name="Save Profile" func={saveProfile} />
    </div>
  );
};

export default ProfileEdit;
