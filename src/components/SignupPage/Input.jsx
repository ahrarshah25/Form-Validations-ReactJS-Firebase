import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.func}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
    </div>
  );
};

export default Input;
