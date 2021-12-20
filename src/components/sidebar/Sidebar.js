import React, { useState } from "react";
// import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import logo from "../../img/logo.svg";
import profile from "../../img/profile.svg";

import { SidebarData } from "./SidebarData";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar" data-aos="fade-down">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} className="text-white" />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu " : "nav-menu active"}>
        <ul className="nav-menu-items">
          <div className="nav-title my-1">
            <img src={logo} alt="logo" className=" w-16 mr-2" />
            <h1 className="text-2xl text-center text-slWhite font-bold ">
              Software <br /> Library
            </h1>
            <span
              to="#"
              className=" text-3xl absolute top-6 right-1 lg:hidden transition-all duration-500 ease-in-out"
            >
              <BsIcons.BsArrowLeftSquareFill
                onClick={showSidebar}
                className="text-slWhite opacity-50 hover:opacity-80 cursor-pointer "
              />
            </span>
          </div>
          <div className=" bg-slGray w-full h-802" />
          <div className="nav-title my-4 ">
            <img src={profile} alt="logo" className="w-12 mr-2" />
            <div className=" text-center">
              <h1 className="text-xl text-slWhite font-bold ">Maulana</h1>
              <h5 className=" text-lg text-gray-400 font-medium ">
                Super Admin
              </h5>
            </div>
          </div>
          <div className="bg-slGray w-full h-802 mb-2" />

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} onClick={showSidebar}>
                <NavLink to={item.path} activeClassName={item.isActive}>
                  {item.icon}
                  <span className="ml-4">{item.title}</span>
                </NavLink>
              </li>
            );
          })}
          <div className=" bg-slGray w-full h-802 mt-6" />
          <li className="nav-text">
            <Link to="/login">
              <RiIcons.RiLogoutBoxLine />
              <span className="ml-4">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
