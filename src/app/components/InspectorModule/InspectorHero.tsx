import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const InspectorHero = () => {
  return (
    // <section className="pt-[74px]">
    //   <div className="relative">
    //     <div className="">
    //       <img
    //         src="assets/images/inspector-hero.png"
    //         className="hidden md:block"
    //       />
    //       <div className="h-[450px] md:h-auto block md:hidden"></div>
    //       <div className="relative block md:hidden">
    //         <img src="assets/images/inspector-hero-mob.png" className="" />
    //         <div className="bg-gradient-to-r from-white to-[rgba(255, 255, 255, 0.52)] absolute top-0 bottom-0 left-0 w-[40%] block md:hidden" />
    //       </div>
    //     </div>
    //     <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 absolute left-0 right-0 top-0 bottom-0">
    //       <div className="flex flex-col items-start justify-center md:px-0 px-4 pt-16 md:pt-0 h-[400px] md:h-auto">
    //         <p className="text-[#6135FB] leading-[24px] text-[16px] md:text-lg font-semibold">
    //           KLAIM INSPECTOR
    //         </p>
    //         <h1 className="text-[#3F465D] text-4xl md:text-5xl xl:text-6xl font-semibold leading-[44px] md:leading-[70px] tracking-tighter">
    //           86% of Claim Denials Are Avoidable:
    //         </h1>
    //         <h3 className="font-bold leading-[36px] md:leading-[40px] text-2xl md:text-[32px] text-[#3F465D]">
    //           Maximize Acceptance Rate With One Simple Tool
    //         </h3>
    //         <p className="text-[14px] md:text-[18px] leading-[25px] text-[#3F465D] mr-0 md:pr-36 my-4 md:my-7">
    //           Maximize claim acceptance, stabilize your cash flow, and
    //           streamline staffing costs. Klaim Inspector is the only tool that
    //           detects data-filling errors and automatically compares diagnoses
    //           with provided services for higher acceptance rates.
    //         </p>
    //         <ButtonPrimary title="Talk to an expert" />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="pt-[75px]">
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="flex-1 block lg:hidden flex flex-col items-start justify-center xl:px-0 px-4 pt-4 md:pt-0 md:mt-8 mb-8">
            <p className="text-[#6135FB] leading-[1.5rem] text-[16px] md:text-lg font-semibold">
              KLAIM INSPECTOR
            </p>
            <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] xl:leading-[70px] tracking-tighter">
              86% of Claim Denials Are Avoidable:
            </h1>
            <h3 className="font-bold leading-[36px] md:leading-[40px] text-2xl md:text-[32px] text-[#3F465D]">
              Maximize Acceptance Rate With One Simple Tool
            </h3>
            <p className="text-[14px] md:text-base leading-[1.5625rem] md:tracking-[0.04rem] text-[#3F465D] pr-0 sm:pr-32 md:pr-28 xl:pr-36 my-4 md:my-7">
              Maximize claim acceptance, stabilize your cash flow, and
              streamline staffing costs. Klaim Inspector is the only tool that
              detects data-filling errors and automatically compares diagnoses
              with provided services for higher acceptance rates.
            </p>
            <ButtonPrimary title="Talk to an expert" />
          </div>
          <div className="flex-1 block lg:hidden">
            <img
              src="assets/images/inspector-hero-mob.png"
              className="h-[250px] w-full sm:h-[500px] object-cover"
            />
          </div>
          <div
            className="flex-1 hidden lg:block overflow-hidden"
            style={{
              backgroundImage: "url('assets/images/inspector-hero.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "80%",
            }}
          >
            <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 h-full">
              <div className="flex flex-col items-start justify-center px-4 md:px-0 lg:pl-4 pt-16 md:pt-0 lg:my-28">
                <p className="text-[#6135FB] leading-[1.5rem] text-[16px] md:text-lg font-semibold">
                  KLAIM INSPECTOR
                </p>
                <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[3.75rem] xl:leading-[4.375rem] -tracking-[0.1124rem]">
                  86% of Claim Denials <br className="block xl:hidden" /> Are
                  Avoidable:
                </h1>
                <h3 className="font-bold leading-[36px] md:leading-[40px] text-2xl md:text-[2rem] text-[#3F465D]">
                  Maximize Acceptance Rate <br className="block xl:hidden" />{" "}
                  With One Simple Tool
                </h3>
                <p className="text-[14px] md:text-base leading-[1.5625rem] text-[#3F465D] mr-0 md:pr-[550px] xl:pr-28 my-4 md:my-7">
                  Maximize claim acceptance, stabilize your cash flow, and
                  streamline staffing costs. Klaim Inspector is the only tool
                  that detects data-filling errors and automatically compares
                  diagnoses with provided services for higher acceptance rates.
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

export default InspectorHero;
