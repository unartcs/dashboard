import React, { useState, useMemo } from "react";
import { MdDarkMode } from "react-icons/md";
import { FaBell, FaSearch } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { CiLight } from "react-icons/ci";

const Topbar = ({ darkTheme, setDarkTheme }) => {
  const [toggleSearch, setToggleSearch] = useState("false");
  const toggleTheme = useMemo(() => {
    if (darkTheme == true) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    if (darkTheme == false) {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkTheme]);
  return (
    <div className="topbar-wrapper p-4 bg-backColor flex justify-between w-full px-10 items-center">
      <div className="topbar-search flex items-center relative">
        <input
          className={`p-2 rounded-lg bg-mainColor text-white1 focus:animate-extend w-[10rem] 400 focus:outline-none focus:bg-focusColor text-textColor animate-shrink`}
          onFocus={() => setToggleSearch(true)}
          placeholder="Search.."
        ></input>
        <div className="absolute right-0 pr-2 cursor-pointer">
          <FaSearch />
        </div>
      </div>

      <ul className="flex gap-3 [&>li]:cursor-pointer">
        <li
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
        >
          {darkTheme ? <CiLight  size={24} className="text-textColor"/> : <MdDarkMode size={24} className="text-textColor" />}
        </li>
        <li>
          <FaBell size={24} className="text-textColor" />
        </li>
        <li>
          <IoSettings size={24} className="text-textColor" />
        </li>
        <li>
          <RiAccountCircleFill size={24} className="text-textColor" />
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
