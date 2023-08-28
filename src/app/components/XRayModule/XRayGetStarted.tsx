import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const XRayGetStarted = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto px-4 md:px-0 pt-12 md:pt-0 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-4xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D]">
            Get started with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              real-time reporting now
            </span>{" "}
          </h2>
          <p className="text-[#3F465D] text-[20px] md:text-[28px] leading-[30px] md:leading-[36px] mt-4 md:mt-8 mb-8 md:mb-8">
            If you’re ready to embrace data-driven decision-making for faster
            growth, your first step is to connect with our team. We’ll learn
            more about your goals, answer your questions, and help you decide on
            your next steps.
          </p>
          <ButtonPrimary title="I'm interested!" />
        </div>
        <div className="flex justify-center">
          <img src="assets/images/xray5.png" className="mt-8" />
        </div>
      </div>
    </section>
  );
};

export default XRayGetStarted;
