import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const KapitalHero = () => {
  return (
    <section className="pt-[74px]">
      <div className="relative">
        <div className="">
          <img
            src="assets/images/kapital-hero.png"
            className="hidden md:block"
          />
          <div className="h-[380px] md:h-auto block md:hidden"></div>
          <div className="relative block md:hidden">
            <img src="assets/images/kapital-hero-mobile.png" className="" />
            <div className="bg-gradient-to-r from-white to-[rgba(255, 255, 255, 0.52)] absolute top-0 bottom-0 left-0 w-[40%] block md:hidden" />
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 absolute left-0 right-0 top-0 bottom-0">
          <div className="flex flex-col items-start justify-center md:px-0 px-4 pt-16 md:pt-0 h-[320px] md:h-auto">
            <p className="text-[#6135FB] leading-[1.5rem] text-[16px] md:text-lg font-semibold">
              KLAIM KAPITAL
            </p>
            <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[70px] tracking-tighter">
              Stabilize Cash Flow and Boost Profitability
            </h1>
            <p className="text-[14px] md:text-base leading-[1.5625rem] text-[#3F465D] mr-0 md:pr-36 my-4 md:my-7">
              With Klaim Kapital, you’ll get claim payments within 48 hours of
              submission—no loans or financing required. Get started in as
              little as 7 days.
            </p>
            <ButtonPrimary title="I'm interested!" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KapitalHero;
