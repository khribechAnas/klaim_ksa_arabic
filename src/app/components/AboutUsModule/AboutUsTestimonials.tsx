import React from "react";
import SlickSliderVideo from "../CommonModule/SlickSliderVideo";

const AboutUsTestimonials = () => {
  return (
    <section className="bg-[#F5F7FB] py-12 md:py-32 px-4">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] leading-[130%] text-[#3F465D] mb-4 md:mb-8">
            Here’s what our clients <br className="block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              are saying about us
            </span>
          </h2>
          <p className="text-[20px] md:text-[28px] leading-[30px] md:leading-9 text-[#3F465D] mb-8 xl:mb-0">
            Don’t take our word for it, <br /> we let our clients do the
            talking.
          </p>
        </div>
        <SlickSliderVideo />
      </div>
    </section>
  );
};

export default AboutUsTestimonials;
