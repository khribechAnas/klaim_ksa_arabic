"use client";
import React, { useRef } from "react";
import Slider from "react-slick";

const SlickSlider: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider ref={(c) => (sliderRef.current = c)} {...settings}>
        <div key={1} className="ml-36">
          <div className="mx-2 pb-8 pt-12 px-6 bg-[#F5F7FB] rounded-lg"></div>
        </div>
        <div key={2} className="ml-36">
          <div className="mx-2 pb-8 pt-12 px-6 bg-[#F5F7FB] rounded-lg"></div>
        </div>
        <div key={3} className="ml-36">
          <div className="mx-2 pb-8 pt-12 px-6 bg-[#F5F7FB] rounded-lg"></div>
        </div>
      </Slider>
      <div className="mt-12 flex items-center justify-end">
        <a className="mr-4 cursor-pointer" onClick={previous}>
          <img src="assets/images/arrowLeft.svg" />
        </a>
        <a className="cursor-pointer" onClick={next}>
          <img src="assets/images/arrowRight.svg" />
        </a>
      </div>
    </div>
  );
};

export default SlickSlider;
