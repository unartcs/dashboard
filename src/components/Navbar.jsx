import React from "react";
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

const Navbar = () => {
  return (
    <div className="navbar-wrapper flex flex-col gap-10 bg-[#222f45] p-4 h-full w-[15rem] text-white pt-5">
      <div className="flex items-end justify-between">
        <h1 className="text-xl font-bold font-sans">Dashboarder</h1>
        <div className="cursor-pointer">
          <GiHamburgerMenu size={24} />
        </div>
      </div>
      <div className="navbar-main flex flex-col gap-2">
        <Profile />
        <h2 className="text-sm font-semibold text-gray-400">General</h2>
        <ul className="navbar-main-menu flex flex-col gap-2 self-center">
          <li className="flex items-center gap-2">
            <IoHomeOutline />
            Overview
          </li>
          <li className="flex items-center gap-2">
            <LiaUsersCogSolid />
            Manage Users
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineProductionQuantityLimits />
            Manage Products
          </li>
          <li className="flex items-center gap-2">
            <FaRegNoteSticky />
            Manage Notes
          </li>
          <li className="flex items-center gap-2">
            <FaRegCircleQuestion />
            FAQ
          </li>
          <li className="flex items-center gap-2">
            <IoSettingsOutline />
            Settings
          </li>
        </ul>
      </div>
      <div className="navbar-charts flex flex-col gap-2">
        <h2
          className="text-sm font-semibold text-gray-400
        "
        >
          Charts
        </h2>
        <ul className="navbar-charts-menu flex flex-col gap-2 self-center">
        <li className="flex items-center gap-2">
            <PiCurrencyDollarSimple />
            Sales chart
          </li>
          <li className="flex items-center gap-2">
            <FiUsers />
            Users chart
          </li>
          <li className="flex items-center gap-2">
            <PiTrafficCone />
            Traffic chart
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineCampaign />
            Campaigns chart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
