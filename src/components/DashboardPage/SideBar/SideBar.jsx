import React, { useState } from "react";
import Logo from "../../LandingPage/Navbar/logo";
import Tabs from "./Tabs";
import Button from "./Button";
import {Menu} from 'lucide-react'

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 left-5 z-50 md:hidden bg-blue-600 text-white p-2 rounded"
      >
        <Menu />
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="p-6">
          <Logo />
          <Tabs />
          <Button />
        </div>
      </aside>
    </>
  );
};

export default SideBar;
