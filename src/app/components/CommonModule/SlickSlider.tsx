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
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider ref={(c) => (sliderRef.current = c)} {...settings}>
        <div key={1}>
          <div className="pb-8 pt-12 px-6 ml-4 bg-[#F5F7FB] rounded-lg">
            <p className="text-[16px] leading-[25px] text-[#3F465D]">
              Klaim.ai is the best, fastest & most accurate solution in the
              medical sector. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex items-center mt-8 px-5">
              <img src="assets/images/TestimonialProfile.png" />
              <div className="ml-8 text-[#3F465D]">
                <h4 className="text-[18px] font-semibold leading-[24px]">
                  Dr. Adam Ali Titi
                </h4>
                <p className="text-[14px] leading-[18px]">
                  Specialist Dermatology and Venereology Medical Director of Dar
                  Al Shifa Hospitals
                </p>
              </div>
            </div>
          </div>
        </div>
        <div key={2}>
          <div className="pb-8 pt-12 px-6 ml-4 bg-[#F5F7FB] rounded-lg">
            <p className="text-[16px] leading-[25px] text-[#3F465D]">
              Klaim.ai is the best, fastest & most accurate solution in the
              medical sector. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex items-center mt-8 px-5">
              <img src="assets/images/TestimonialProfile.png" />
              <div className="ml-8 text-[#3F465D]">
                <h4 className="text-[18px] font-semibold leading-[24px]">
                  Dr. Adam Ali Titi
                </h4>
                <p className="text-[14px] leading-[18px]">
                  Specialist Dermatology and Venereology Medical Director of Dar
                  Al Shifa Hospitals
                </p>
              </div>
            </div>
          </div>
        </div>
        <div key={3}>
          <div className="pb-8 pt-12 px-6 ml-4 bg-[#F5F7FB] rounded-lg">
            <p className="text-[16px] leading-[25px] text-[#3F465D]">
              Klaim.ai is the best, fastest & most accurate solution in the
              medical sector. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex items-center mt-8 px-5">
              <img src="assets/images/TestimonialProfile.png" />
              <div className="ml-8 text-[#3F465D]">
                <h4 className="text-[18px] font-semibold leading-[24px]">
                  Dr. Adam Ali Titi
                </h4>
                <p className="text-[14px] leading-[18px]">
                  Specialist Dermatology and Venereology Medical Director of Dar
                  Al Shifa Hospitals
                </p>
              </div>
            </div>
          </div>
        </div>
        <div key={4}>
          <div className="pb-8 pt-12 px-6 ml-4 bg-[#F5F7FB] rounded-lg">
            <p className="text-[16px] leading-[25px] text-[#3F465D]">
              Klaim.ai is the best, fastest & most accurate solution in the
              medical sector. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex items-center mt-8 px-5">
              <img src="assets/images/TestimonialProfile.png" />
              <div className="ml-8 text-[#3F465D]">
                <h4 className="text-[18px] font-semibold leading-[24px]">
                  Dr. Adam Ali Titi
                </h4>
                <p className="text-[14px] leading-[18px]">
                  Specialist Dermatology and Venereology Medical Director of Dar
                  Al Shifa Hospitals
                </p>
              </div>
            </div>
          </div>
        </div>
        <div key={5}>
          <div className="pb-8 pt-12 px-6 ml-4 bg-[#F5F7FB] rounded-lg">
            <p className="text-[16px] leading-[25px] text-[#3F465D]">
              Klaim.ai is the best, fastest & most accurate solution in the
              medical sector. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex items-center mt-8 px-5">
              <img src="assets/images/TestimonialProfile.png" />
              <div className="ml-8 text-[#3F465D]">
                <h4 className="text-[18px] font-semibold leading-[24px]">
                  Dr. Adam Ali Titi
                </h4>
                <p className="text-[14px] leading-[18px]">
                  Specialist Dermatology and Venereology Medical Director of Dar
                  Al Shifa Hospitals
                </p>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default SlickSlider;
