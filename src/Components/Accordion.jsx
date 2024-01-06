import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function Accordion({ title, content }) {
  const [toggleArrow, setToggleArrow] = useState(false);
  return (
    <div
      className="bg-primary border-2 py-2 px-1
     w-[80%] flex-grow-0 shadow-sm rounded-md border-slate-800
     text-black"
    >
      <div className="center hover:cursor-pointer ">
        <h2 className="text-2xl " onClick={() => setToggleArrow(!toggleArrow)}>
          {toggleArrow ? (
            <ArrowDropUpIcon fontSize="large" />
          ) : (
            <ArrowDropDownIcon fontSize="large" />
          )}
          {title}
        </h2>
      </div>
      <div
        className={`text-center text-lg transition-all  ease-in-out
       ${toggleArrow ? "showAccordion" : "accordion"} `}
      >
        <div
          className="h-[3px] w-6/12 my-0 mx-auto
         bg-slate-800 "
        ></div>

        <p className="">{content}</p>
      </div>
    </div>
  );
}
