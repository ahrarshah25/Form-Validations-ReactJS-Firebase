import React from "react";

const CopyWrite = () => {
  return (
    <p className="text-gray-400 text-sm text-center mt-8">
      &copy; {new Date().getFullYear()} <span className="text-blue-500 font-semibold">Firebase Authentication.</span>. All rights reserved.
    </p>
  );
};

export default CopyWrite;