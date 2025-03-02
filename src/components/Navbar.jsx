import React from "react";
import { Menu } from "lucide-react";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" nav-bg w-full px-5 py-10 flex items-center justify-between border-b border-white/20 fixed top-0 left-0 h-16 z-50">
      
      <div className="flex items-center gap-5">
        <div className="h-full flex items-center border-r border-white/20 pr-5">
          <Menu className="w-6 h-6 text-white cursor-pointer" />
        </div>
        
        <img src={logo} alt="Logo" className="w-12 h-12 ms-5" />
        <p className="text-2xl font-bold text-white">
          <i>DedalDev</i>
        </p>
      </div>

      <div className="h-full flex items-center border-l border-white/20 px-5">
        <p className="text-sm font-bold text-white uppercase mx-5">Contact</p>
      </div>

    </div>
  );
};

export default Navbar;