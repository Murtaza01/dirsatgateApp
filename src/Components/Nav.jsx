import React, { useState } from "react";
import Dropdown from "./Dropdown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className="flex fixed top-0  bg-navColor  text-slate-100
       z-20 w-full items-center justify-between h-24 gap-5 px-3 md:px-0
    text-lg lg:gap-10 lg:p-3 md:justify-normal md:gap-2"
    >
      <a href="#" className="bg-navLogo min-w-16 min-h-16 bgImage"></a>
      <MenuIcon
        fontSize="large"
        onClick={() => setToggleMenu(!toggleMenu)}
        className="absolute text-black  top-8 left-8 hover:cursor-pointer md:invisible"
      />
      <ul
        className={`gap-5 absolute h-screen text-2xl text-white  ${
          toggleMenu
            ? "showMenu bg-navColor flex items-center flex-col pt-20"
            : "menu"
        } md:static md:center md:h-full`}
      >
        <CloseIcon
          fontSize="large"
          onClick={() => setToggleMenu(!toggleMenu)}
          className="absolute right-5 top-5 md:invisible"
        />
        <li
          className="bg-itemColor  md:bg-navColor md:hover:bg-itemColor rounded-lg 
        py-3 px-5 center flex-col relative transition-colors duration-300"
        >
          <Dropdown />
        </li>
        <li className="hover:text-textHoverColor">
          <a href="">مركز التحميل</a>
        </li>
        <li className="hover:text-textHoverColor">
          <a href="">منحة البنك الدولي</a>
        </li>
        <li className="hover:text-textHoverColor">
          <a href="">الجامعات الحكومية العراقية</a>
        </li>
        <li className="hover:text-textHoverColor">
          <a href="">الاستعلامات الالكترونية</a>
        </li>
      </ul>
    </nav>
  );
}
