import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <ImIcons.ImInfo />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/information",
    icon: <AiIcons.AiOutlineFileSearch />,
    cName: "nav-text",
  },
  {
    title: "News",
    path: "/news",
    icon: <ImIcons.ImNewspaper />,
    cName: "nav-text",
  },
];
