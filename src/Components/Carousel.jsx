import React, { useState } from "react";
import Slide from "./Slide";
import slideData from "../assets/slideData";
import Dots from "./Dots";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(1);

  function nextSlide() {
    if (slideIndex !== slideData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slideData.length) {
      setSlideIndex(1);
    }
  }

  function prevSlide() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slideData.length);
    }
  }

  function moveDot(index) {
    setSlideIndex(index);
  }

  return (
    <div
      className="bg-slideBg bgImage w-full mt-20
       h-80 my-2 mx-auto center"
    >
      <div className="w-11/12 h-72 center relative">
        <h2
          className="border-[1px] bg-[#FFECD6] py-2 px-6
           absolute text-lg font-bold top-3 sm:top-5 "
        >
          عاجل
        </h2>

        {slideData.map((item, index) => {
          return (
            <Slide
              key={item.id}
              index={index}
              content={item.content}
              link={item.link}
              linkText={item.linkText}
              slideIndex={slideIndex}
            />
          );
        })}
        <ArrowBackIcon
          onClick={nextSlide}
          fontSize="large"
          className="absolute hover:cursor-pointer left-[-20px]
           sm:left-[-5px] md:left-0 "
        />
        <ArrowForwardIcon
          onClick={prevSlide}
          fontSize="large"
          className="absolute hover:cursor-pointer right-[-20px]
           sm:right-[-5px] md:right-0"
        />
        <Dots slideIndex={slideIndex} moveDot={moveDot} />
      </div>
    </div>
  );
}
