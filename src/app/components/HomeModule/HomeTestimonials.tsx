import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const HomeTestimonials = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center mb-8 md:mb-16">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] leading-[130%] text-[#3F465D] mb-4 md:mb-8">
            Here’s what our clients <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              are saying about us
            </span>
          </h2>
          <p className="text-[20px] text-[28px] leading-[30px] leading-9 text-[#3F465D]">
            Don’t take our word for it, <br /> we let our clients do the
            talking.
          </p>
        </div>
        <div className="flex-1 bg-gray-200">VIDEO SLIDER (LIBRARY)</div>
      </div>
      <div className="text-center">
        <ButtonPrimary title="I'm interested!" />
      </div>
    </section>
  );
};

export default HomeTestimonials;
