import React from "react";

export default function Slide({ content, linkText, link, index, slideIndex }) {
  return (
    <>
      <div
        className={`border-[1px] border-black shadow-sm rounded-lg
         bg-componentColor min-h-32 text-center gap-2
         w-11/12 center flex-col absolute 
         ${slideIndex === index + 1 ? "flex" : "hidden"}`}
      >
        <p className="">{content}</p>
        <a href={link} className="hover:cursor-pointer">
          {linkText}
        </a>
      </div>
    </>
  );
}
