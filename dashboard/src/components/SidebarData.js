import React from "react";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import * as GrIcons from "react-icons/gr";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <AiIcons.AiOutlineFileSearch />,
    cName: "nav-text",
  },
  {
    title: "News",
    path: "/news",
    icon: <ImIcons.ImNewspaper />,
    cName: "nav-text",
  },
  {
    title: "Currency",
    path: "/currency",
    icon: <GrIcons.GrCurrency />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <ImIcons.ImInfo />,
    cName: "nav-text",
  },

  {
    title: "Contact Us",
    path: "/contactus",
    icon: <AiIcons.AiOutlineMessage />,
    cName: "nav-text",
  },
];
