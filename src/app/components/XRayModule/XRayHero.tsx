import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const XRayHero = () => {
  return (
    <section className="pt-[75px]">
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="flex-1 block lg:hidden flex flex-col items-start justify-center xl:px-0 px-4 pt-4 md:pt-0 md:mt-8 mb-8">
            <p className="text-[#6135FB] leading-[1.5rem] text-[16px] md:text-lg font-semibold">
              KLAIM X-RAY
            </p>
            <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] xl:leading-[70px] tracking-tighter">
              Make Confident Data-Driven Decisions
            </h1>
            <h3 className="font-bold leading-[36px] md:leading-[40px] text-2xl md:text-[32px] text-[#3F465D]">
              For Faster Growth and Fewer Wrong Turns
            </h3>
            <p className="text-[14px] md:text-base leading-[1.5625rem] md:tracking-[0.04rem] text-[#3F465D] pr-0 sm:pr-32 md:pr-28 xl:pr-36 my-4 md:my-7">
              Klaim X-Ray replaces slow, unreliable, and expensive manual
              reporting with comprehensive real-time reporting. See
              up-to-the-minute data at a glance.
            </p>
            <ButtonPrimary title="Talk to an expert" />
          </div>
          <div className="flex-1 block lg:hidden">
            <img
              src="assets/images/xray-hero1.png"
              className="h-[250px] w-full sm:h-[500px] object-cover"
            />
          </div>
          <div
            className="flex-1 hidden lg:block overflow-hidden"
            style={{
              backgroundImage: "url('assets/images/xray-hero.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "80%",
            }}
          >
            <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 h-full">
              <div className="flex flex-col items-start justify-center px-4 md:px-0 lg:pl-4 pt-16 md:pt-0 lg:my-20">
                <p className="text-[#6135FB] leading-[1.5rem] text-[16px] md:text-lg font-semibold">
                  KLAIM X-RAY
                </p>
                <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[3.75rem] xl:leading-[4.375rem] -tracking-[0.1124rem]">
                  Make Confident Data-Driven Decisions
                </h1>
                <h3 className="font-bold leading-[36px] md:leading-[40px] text-2xl md:text-[32px] text-[#3F465D]">
                  For Faster Growth and Fewer Wrong Turns
                </h3>
                <p className="text-[14px] md:text-base leading-[1.5625rem] text-[#3F465D] mr-0 md:pr-[550px] xl:pr-48 my-4 md:my-7">
                  Klaim X-Ray replaces slow, unreliable, and expensive manual
                  reporting with comprehensive real-time reporting. See
                  up-to-the-minute data at a glance.
                </p>
                <ButtonPrimary title="Talk to an expert" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XRayHero;
