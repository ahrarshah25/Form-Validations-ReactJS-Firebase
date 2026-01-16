import React from "react";

const Tabs = () => {
  return (
    <nav className="flex flex-col gap-4 mt-8">
      <a href="/dashboard" className="sidebar-link">Dashboard</a>
      <a href="/profile" className="sidebar-link">Profile</a>
      <a href="/" className="sidebar-link">Back To Home</a>
    </nav>
  );
};

export default Tabs;
