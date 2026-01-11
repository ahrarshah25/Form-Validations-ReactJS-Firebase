import React from "react";

const Tabs = () => {
  const links = ["Home", "Login", "Signup", "Dashboard"];

  return (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-0 text-gray-300 font-medium">
      {links.map((link , i) => (
        <li key={i}>
          <a
            href={`/${link.toLowerCase()}`}
            className="transition-colors duration-300 hover:text-blue-500"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
