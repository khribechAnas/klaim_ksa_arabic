import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const XRayHero = () => {
  return (
    <section className="pt-[74px]">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-[460px] md:h-auto"></div>
          <div className="relative">
            <img src="assets/images/about-hero.png" className="" />
            <div className="bg-gradient-to-r from-white to-[rgba(255, 255, 255, 0.52)] absolute top-0 bottom-0 left-0 w-[50%] hidden md:block" />
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 absolute left-0 right-0 top-0 bottom-0">
          <div className="flex flex-col items-start justify-center md:px-0 px-4 pt-16 md:pt-0 h-[400px] md:h-auto">
            <p className="text-[#6135FB] leading-[24px] text-[16px] md:text-lg font-semibold">
              KLAIM X-RAY
            </p>
            <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[70px] tracking-tighter">
              Make Confident Data-Driven Decisions
            </h1>
            <h3 className="font-bold leading-[36px] md:leading-[40px] text-2xl md:text-[32px] text-[#3F465D]">
              For Faster Growth and Fewer Wrong Turns
            </h3>
            <p className="text-[14px] md:text-[18px] leading-[25px] text-[#3F465D] mr-0 md:pr-36 my-4 md:my-7">
              Klaim X-Ray replaces slow, unreliable, and expensive manual
              reporting with comprehensive real-time reporting. See
              up-to-the-minute data at a glance.
            </p>
            <ButtonPrimary title="I'm interested!" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default XRayHero;
