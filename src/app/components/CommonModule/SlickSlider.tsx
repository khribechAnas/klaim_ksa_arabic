"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    testimonial:
      "Klaim.ai is the best, fastest & most accurate solution in the medical sectior. Loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Dr. Adam Ali Titi",
    title:
      "Specialist Dermatology and Venereology Medical Director of Dar Al Shifa Hospitals",
    key: 1,
  },
  {
    testimonial:
      "Klaim.ai is the best, fastest & most accurate solution in the medical sectior. Loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Dr. Adam Ali Titi",
    title:
      "Specialist Dermatology and Venereology Medical Director of Dar Al Shifa Hospitals",
    key: 2,
  },
  {
    testimonial:
      "Klaim.ai is the best, fastest & most accurate solution in the medical sectior. Loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Dr. Adam Ali Titi",
    title:
      "Specialist Dermatology and Venereology Medical Director of Dar Al Shifa Hospitals",
    key: 3,
  },
  {
    testimonial:
      "Klaim.ai is the best, fastest & most accurate solution in the medical sectior. Loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Dr. Adam Ali Titi",
    title:
      "Specialist Dermatology and Venereology Medical Director of Dar Al Shifa Hospitals",
    key: 4,
  },
  {
    testimonial:
      "Klaim.ai is the best, fastest & most accurate solution in the medical sectior. Loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Dr. Adam Ali Titi",
    title:
      "Specialist Dermatology and Venereology Medical Director of Dar Al Shifa Hospitals",
    key: 5,
  },
];

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
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider ref={(c) => (sliderRef.current = c)} {...settings}>
        {testimonials.map((testimonial) => {
          return (
            <div key={testimonial.key}>
              <div className="pb-7 md:pb-8 pt-7 md:pt-12 px-6 mx-1 md:mx-2 bg-[#F5F7FB] rounded-lg">
                <p className="text-[14px] md:text-[16px] leading-[25px] text-[#3F465D]">
                  {testimonial.testimonial}
                </p>
                <div className="flex items-center mt-8 px-5">
                  <img src="assets/images/TestimonialProfile.png" />
                  <div className="ml-8 text-[#3F465D]">
                    <h4 className="text-[12px] md:text-[18px] font-semibold leading-[24px]">
                      {testimonial.name}
                    </h4>
                    <p className="text-[12px] md:text-[14px] leading-[18px]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="mt-12 flex items-center justify-end">
        <a className="mr-4 cursor-pointer" onClick={previous}>
          <img src="assets/images/arrowLeft.svg" />
        </a>
        <a className="cursor-pointer" onClick={next}>
          <img src="assets/images/arrowRight.svg" />
        </a>
      </div>
    </>
  );
};

export default SlickSlider;
