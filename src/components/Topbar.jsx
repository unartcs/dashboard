import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { FaBell, FaSearch } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";

const Topbar = () => {
  const [toggleSearch, setToggleSearch] = useState('false')
  return (
    <div className="topbar-wrapper p-4 bg-[#141a27] flex justify-between w-full px-10 items-center">
      <div className="topbar-search flex items-center relative">
        <input className={`p-2 rounded-lg bg-[#222f45] text-white1 focus:animate-extend w-[10rem] 400 focus:outline-none focus:bg-slate-400 text-white animate-shrink`} onFocus={()=> setToggleSearch(true)} placeholder="Search.."></input>
        <div className="absolute right-0 pr-2 cursor-pointer"><FaSearch /></div>
      </div>

      <ul className="flex gap-3">
        <li>
          <MdDarkMode size={24} color="white"/>
        </li>
        <li>
          <FaBell size={24}  color="white"/>
        </li>
        <li>
          <IoSettings size={24}  color="white"/>
        </li>
        <li>
          <RiAccountCircleFill size={24}  color="white"/>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
