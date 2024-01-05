import React from "react";
import Heading from "./Heading";
import Accordion from "./Accordion";
import accordionData from "../assets/accordionData";

export default function Section() {
  return (
    <div className="p-10 text-center">
      <Heading heading="قنوات تم إنتهاء التقديم إليها" />
      <div className="center flex-col gap-2 mt-8 text-white ">
        {accordionData.map((item, index) => {
          return (
            <Accordion
              key={item.id}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
}
