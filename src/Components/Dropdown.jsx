import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function Dropdown() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <div
      className="relative center flex-col md:flex-row"
      onMouseEnter={() => setToggleDropdown(true)}
      onMouseLeave={() => setToggleDropdown(false)}
      onClick={() => setToggleDropdown(!toggleDropdown)}
    >
      <button href="null">
        قنوات القبول{" "}
        {toggleDropdown ? (
          <ArrowDropUpIcon fontSize="large" />
        ) : (
          <ArrowDropDownIcon fontSize="large" />
        )}
      </button>
      <div
        className={`md:w-[200px]  bg-itemColor 
          rounded-md   
      ${
        toggleDropdown
          ? "showDropdown md:showDropdownMd"
          : "dropdown md:dropdownMd"
      }`}
      >
        <ul className="p-1 w-full text-center ">
          <li className="py-2  hover:bg-navColor">
            <a href="#">1. القبول المركزي</a>
          </li>
          <li className="py-2 hover:bg-navColor">
            <a href="#">2. قبول المسائي</a>
          </li>
          <li className="py-2 hover:bg-navColor">
            <a href="#">3. قبول الموازي</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
