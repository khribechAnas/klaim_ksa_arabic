import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const InspectorHero = () => {
  return (
    <section className="pt-[74px]">
      <div className="relative">
        <div className="">
          <img
            src="assets/images/inspector-hero.png"
            className="hidden md:block"
          />
          <div className="h-[450px] md:h-auto block md:hidden"></div>
          <div className="relative block md:hidden">
            <img src="assets/images/inspector-hero-mob.png" className="" />
            <div className="bg-gradient-to-r from-white to-[rgba(255, 255, 255, 0.52)] absolute top-0 bottom-0 left-0 w-[40%] block md:hidden" />
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 absolute left-0 right-0 top-0 bottom-0">
          <div className="flex flex-col items-start justify-center md:px-0 px-4 pt-16 md:pt-0 h-[400px] md:h-auto">
            <p className="text-[#6135FB] leading-[24px] text-[16px] md:text-lg font-semibold">
              KLAIM INSPECTOR
            </p>
            <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[70px] tracking-tighter">
              86% of Claim Denials Are Avoidable:
            </h1>
            <h3 className="font-bold leading-[36px] md:leading-[40px] text-2xl md:text-[32px] text-[#3F465D]">
              Maximize Acceptance Rate With One Simple Tool
            </h3>
            <p className="text-[14px] md:text-[18px] leading-[25px] text-[#3F465D] mr-0 md:pr-36 my-4 md:my-7">
              Maximize claim acceptance, stabilize your cash flow, and
              streamline staffing costs. Klaim Inspector is the only tool that
              detects data-filling errors and automatically compares diagnoses
              with provided services for higher acceptance rates.
            </p>
            <ButtonPrimary title="Talk to an expert" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspectorHero;
