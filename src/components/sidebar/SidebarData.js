import React from "react";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <MdIcons.MdDashboard />,
    cName: "nav-text",
    isAcvtive: "active",
  },
  {
    title: "Source Code",
    path: "/source-code",
    icon: <FaIcons.FaCode />,
    cName: "nav-text ",
    isAcvtive: "active",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Java Script",
        path: "/source-code/java-script",
        icon: <SiIcons.SiJavascript />,
      },
      {
        title: "PHP",
        path: "/source-code/php",
        icon: <SiIcons.SiPhp />,
      },
      {
        title: "Python",
        path: "/source-code/python",
        icon: <SiIcons.SiPython />,
      },
    ],
  },
  {
    title: "User Management",
    path: "/user-management",
    icon: <FaIcons.FaUsersCog />,
    cName: "nav-text ",
    isAcvtive: "active",
  },
  {
    title: "Video Tutorial",
    path: "/video-tutorial",
    icon: <MdIcons.MdOndemandVideo />,
    cName: "nav-text ",
    isAcvtive: "active",
  },
  {
    title: "Ebook Tutorial",
    path: "/ebook-tutorial",
    icon: <MdIcons.MdLibraryBooks />,
    cName: "nav-text ",
    isAcvtive: "active",
  },
  {
    title: "Demo",
    path: "/demo",
    icon: <IoIcons.IoMdLink />,
    cName: "nav-text ",
    isAcvtive: "active",
  },
  {
    title: "Dokumen Pendukung",
    path: "/dokumen-pendukung",
    icon: <SiIcons.SiReadthedocs />,
    cName: "nav-text ",
    isAcvtive: "active",
  },
  {
    title: "Account",
    path: "/account",
    icon: <MdIcons.MdAccountCircle />,
    cName: "nav-text ",
    isAcvtive: "active",
  },
];
