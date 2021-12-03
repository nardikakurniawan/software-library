import React, { useState } from "react";
// import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
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
      <nav
        className={sidebar ? "nav-menu " : "nav-menu active"}
        data-aos="fade-right"
      >
        <ul className="nav-menu-items">
          <div className="nav-title">
            <img src={logo} alt="logo" className=" w-24 ml-6" />
            <h1 className="text-3xl text-center text-slWhite font-bold ">
              Software Library
            </h1>
            <span to="#" className="menu-bars-close">
              <BsIcons.BsArrowLeftSquareFill
                onClick={showSidebar}
                className="text-slWhite opacity-50 hover:opacity-80 cursor-pointer"
              />
            </span>
          </div>
          <hr className=" border border-gray-500" />
          <div className="nav-title ">
            <img src={profile} alt="logo" className="w-14 mr-4" />
            <div className=" text-center">
              <h1 className="text-3xl text-slWhite font-bold ">Maulana</h1>
              <h5 className="text-2xl text-gray-400 font-medium ">
                Super Admin
              </h5>
            </div>
          </div>
          <hr className=" border border-gray-500 mb-2" />

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink to={item.path} activeClassName={item.isActive}>
                  {item.icon}
                  <span className="ml-4">{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
