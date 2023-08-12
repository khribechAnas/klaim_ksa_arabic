import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const HomeTestimonials = () => {
  return (
    <section className="container mx-auto py-32">
      <div className="flex items-center mb-16">
        <div className="flex-1">
          <h2 className="text-5xl font-semibold leading-[130%] text-[#3F465D] mb-8">
            Here’s what our clients <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              are saying about us
            </span>
          </h2>
          <p className="text-[28px] leading-9 text-[#3F465D]">
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
