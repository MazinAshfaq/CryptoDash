import React from "react";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import * as RiIcons from "react-icons/ri";
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
    title: "Exchange Coins",
    path: "/trading",
    icon: <RiIcons.RiExchangeDollarLine />,
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
