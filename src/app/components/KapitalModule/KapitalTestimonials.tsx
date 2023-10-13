import React from "react";
import SlickSliderVideo from "../CommonModule/SlickSliderVideo";
import SlickSlider from "../CommonModule/SlickSlider";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const KapitalTestimonials = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 md:mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] leading-[130%] text-[#3F465D] mb-4 md:mb-8">
            Here’s what our clients <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              are saying about us
            </span>
          </h2>
          <p className="text-[20px] md:text-[28px] leading-[30px] md:leading-9 text-[#3F465D] mb-4 md:mb-0">
            Don’t take our word for it, <br /> we let our clients do the
            talking.
          </p>
        </div>
        <SlickSliderVideo />
      </div>
      {/* <div className="relative">
        <SlickSlider />
        <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-white to-[rgba(255, 255, 255, 0.52)] w-[33%] lg:block hidden" />
      </div> */}

      {/* <div className="text-center mt-14">
        <ButtonPrimary title="I'm interested!" />
      </div> */}
    </section>
  );
};

export default KapitalTestimonials;
