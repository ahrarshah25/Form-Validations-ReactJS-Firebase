import React from "react";
import { Pencil } from "lucide-react";
// import defaultImg from "../../assets/default.png"; // apni image

const ImageContainer = (props) => {
  return (
    <div className="relative w-32 h-32 mx-auto">
      <img
        src={props.image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
        className="w-full h-full rounded-full object-cover border"
      />

      <label className="absolute bottom-1 right-1 bg-blue-600 p-2 rounded-full cursor-pointer">
        <Pencil size={16} className="text-white" />
        <input type="file" hidden onChange={props.func} />
      </label>
    </div>
  );
};

export default ImageContainer;
