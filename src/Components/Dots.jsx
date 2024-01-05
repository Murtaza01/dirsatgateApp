import React from "react";
import slideData from "../assets/slideData";

export default function Dots({ slideIndex, moveDot }) {
  return (
    <div
      className="relative bottom-[-140px]
            min-w-20 h-7 center gap-1"
    >
      {slideData.map((item, index) => {
        return (
          <div
            className="w-4 h-4 bg-white rounded-[50%] center"
            onClick={() => moveDot(index + 1)}
            key={item.id}
          >
            {slideIndex === index + 1 && (
              <div className="bg-navColor  w-[90%] h-[90%] rounded-[50%]"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
