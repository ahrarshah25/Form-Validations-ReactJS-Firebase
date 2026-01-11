import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Social = () => {
  return (
    <div className="flex gap-4 mt-6 md:mt-0">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-6 h-6 hover:text-blue-600 transition-transform transform hover:scale-110" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-6 h-6 hover:text-pink-500 transition-transform transform hover:scale-110" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <Youtube className="w-6 h-6 hover:text-red-600 transition-transform transform hover:scale-110" />
      </a>
    </div>
  );
};

export default Social;
