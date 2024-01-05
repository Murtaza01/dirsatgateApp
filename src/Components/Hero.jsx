import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import cardData from "../assets/cardData";

export default function Hero() {
  return (
    <div
      className="min-h-96  flex flex-col
    gap-5 p-3 mt-10"
    >
      <Heading heading="قنوات القبول" />
      <div className="flex flex-col md:justify-center md:flex-row md:flex-wrap gap-3">
        {cardData.map((item) => {
          return (
            <Card
              key={item.id}
              heading={item.heading}
              content={item.content}
              link={item.link}
              linkText={item.linkText}
            />
          );
        })}
      </div>
    </div>
  );
}
