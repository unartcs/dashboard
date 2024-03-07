import React, { useState } from "react";
import Profile from "./Profile";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaUsersCogSolid } from "react-icons/lia";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineCampaign,
} from "react-icons/md";
import { FaRegNoteSticky, FaRegCircleQuestion } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { PiCurrencyDollarSimple, PiTrafficCone } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState("true");

  return (
    <div>
      {showMenu ? (
        <div className="navbar-wrapper flex flex-col gap-10 bg-mainColor p-4 h-full w-[16rem] text-white pt-5 animate-extendNavbar">
          <div className="flex items-end justify-between animate-fadeIn">
            <h1 className="text-xl font-bold font-sans animate-fadeIn">
              Dashboarder
            </h1>
            <div
              className="cursor-pointer animate-fadeIn"
              onClick={() => setShowMenu(!showMenu)}
            >
              <GiHamburgerMenu size={24} />
            </div>
          </div>
          <div className="navbar-main flex flex-col gap-2 animate-fadeIn">
            <Profile />
            <h2 className="text-sm font-semibold text-focusColor animate-fadeIn">
              General
            </h2>
            <ul className="navbar-main-menu flex flex-col gap-2 self-center animate-fadeIn w-fit">
              <li className="flex items-center gap-2 w-fit">
                <Link to={"/"} className="flex items-center gap-2">
                  <IoHomeOutline />
                  Overview
                </Link>
              </li>

              <li className="flex items-center gap-2">
                <Link to={"/users"} className="flex items-center gap-2">
                  <LiaUsersCogSolid />
                  Manage Users
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link to={"/products"} className="flex items-center gap-2">
                  <MdOutlineProductionQuantityLimits />
                  Manage Products
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link to={"/notes"} className="flex items-center gap-2">
                  <FaRegNoteSticky />
                  Manage Notes
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link to={"/faq"} className="flex items-center gap-2">
                  <FaRegCircleQuestion />
                  FAQ
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link to={"/settings"} className="flex items-center gap-2">
                  <IoSettingsOutline />
                  Settings
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-charts flex flex-col gap-2">
            <h2
              className="text-sm font-semibold text-focusColor
              animate-fadeIn"
            >
              Charts
            </h2>
            <ul className="navbar-charts-menu flex flex-col gap-2 self-center animate-fadeIn">
              <li className="flex items-center gap-2 ">
                <Link to={"/sales-chart"} className="flex items-center gap-2">
                  <PiCurrencyDollarSimple />
                  Sales chart
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link to={"/users-chart"} className="flex items-center gap-2">
                  <FiUsers />
                  Users chart
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link to={"/traffic-chart"} className="flex items-center gap-2">
                  <PiTrafficCone />
                  Traffic chart
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link to={"/campaigns-chart"} className="flex items-center gap-2">
                  <MdOutlineCampaign />
                  Campaigns chart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-wrapper flex flex-col gap-10 bg-[#222f45] p-4 h-full text-white pt-5 animate-shrinkNavbar">
          <div className="flex items-end flex-col">
            <div
              className="cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <GiHamburgerMenu size={24} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
