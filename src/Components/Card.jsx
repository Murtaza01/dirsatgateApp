import React from "react";
import SchoolIcon from "@mui/icons-material/School";

export default function Card({ heading, content, link, linkText }) {
  return (
    <div
      className="border-[1px] bg-componentColor rounded-lg border-black
     shadow-md flex flex-col items-center gap-2 p-2 md:basis-96"
    >
      <div>
        {heading} <SchoolIcon />
      </div>
      <div className="h-1 w-6/12 my-0 mx-auto bg-slate-800"></div>
      <p className="text-center">{content}</p>
      <a
        href={link}
        className="border-[1px]  font-bold m-auto border-transparent
         rounded-md py-2 px-4 bg-white hover:text-white hover:bg-secondary transition-all duration-300"
      >
        {linkText}
      </a>
    </div>
  );
}
