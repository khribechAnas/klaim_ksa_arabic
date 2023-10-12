import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const EligibleHero = () => {
  return (
    <section className="pt-[75px]">
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="flex-1 block lg:hidden flex flex-col items-start justify-center xl:px-0 px-4 pt-4 md:pt-0 md:mt-8 mb-8">
            <p className="text-[#6135FB] leading-[1.5rem] text-[16px] md:text-lg font-semibold">
              KLAIM ELIGIBLE
            </p>
            <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] xl:leading-[70px] tracking-tighter">
              How Automated Eligibility Checking Leads to
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] ml-2">
                Happier Patients.
              </span>
            </h1>
            <p className="text-[14px] md:text-base leading-[1.5625rem] md:tracking-[0.04rem] text-[#3F465D] pr-0 sm:pr-32 md:pr-28 xl:pr-36 my-4 md:my-7">
              Use Klaim Eligible to check patient eligibility on 94% of
              insurance portals, all at once. Minimize wait times, improve the
              patient experience, streamline staffing costs, and dramatically
              reduce claim denials due to eligibility-related mistakes. mobile
            </p>
            <ButtonPrimary title="Talk to an expert" />
          </div>
          <div className="flex-1 block lg:hidden">
            <img
              src="assets/images/eligible-hero-mobile.jpg"
              className="w-full object-cover"
            />
          </div>
          <div
            className="flex-1 hidden lg:block overflow-hidden"
            style={{
              backgroundImage: "url('assets/images/eligible-hero.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "80%",
            }}
          >
            <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 h-full">
              <div className="flex flex-col items-start justify-center px-4 md:px-0 lg:pl-4 pt-16 md:pt-0 lg:my-12">
                <p className="text-[#6135FB] leading-[1.5rem] text-[16px] md:text-lg font-semibold">
                  KLAIM ELIGIBLE
                </p>
                <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[3.75rem] xl:leading-[4.375rem] -tracking-[0.1124rem]">
                  How Automated Eligibility Checking Leads to <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] ml-0 xl:ml-0 2xl:ml-0">
                    Happier Patients.
                  </span>
                </h1>
                <p className="text-[14px] md:text-base leading-[1.5625rem] text-[#3F465D] mr-0 md:pr-[550px] xl:pr-28 my-4 md:my-7">
                  Use Klaim Eligible to check patient eligibility on 94% of
                  insurance portals, all at once. Minimize wait times, improve
                  the patient experience, streamline staffing costs, and
                  dramatically reduce claim denials due to eligibility-related
                  mistakes...
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

export default EligibleHero;
