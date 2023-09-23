import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const EligibleHero = () => {
  return (
    <section className="pt-[75px]">
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="flex-1 block xl:hidden flex flex-col items-start justify-center md:px-0 px-4 pt-4 md:pt-0">
            <p className="text-[#6135FB] leading-[1.5rem] text-[16px] md:text-lg font-semibold">
              KLAIM ELIGIBLE
            </p>
            <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[70px] tracking-tighter">
              How Automated Eligibility Checking Leads to <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] ml-0 xl:ml-3 2xl:ml-0">
                Happier Patients.
              </span>
            </h1>
            <p className="text-[14px] md:text-base leading-[1.5625rem] text-[#3F465D] mr-0 md:pr-36 my-4 md:my-7">
              Use Klaim Eligible to check patient eligibility on 94% of
              insurance <br /> portals, all at once. Minimize wait times,
              improve the patient <br /> experience, streamline staffing costs,
              and dramatically reduce <br /> claim denials due to
              eligibility-related mistakes.
            </p>
            <ButtonPrimary title="Talk to an expert" />
          </div>
          <div className="flex-1 block xl:hidden mt-4 lg:mt-0">
            <img
              src="assets/images/eligible-hero-mobile.png"
              className="h-full object-cover"
            />
          </div>
          <div
            className="flex-1 hidden xl:block"
            style={{
              backgroundImage: "url('assets/images/eligible-hero.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "80%",
            }}
          >
            <div className="container mx-auto grid grid-cols-2 h-full">
              <div className="flex flex-col items-start justify-center md:px-0 px-4 pt-16 md:pt-0 my-0 md:my-32">
                <p className="text-[#6135FB] leading-[1.5rem] text-[16px] md:text-lg font-semibold">
                  KLAIM ELIGIBLE
                </p>
                <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[70px] tracking-tighter">
                  How Automated Eligibility Checking Leads to <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] ml-0 xl:ml-3 2xl:ml-0">
                    Happier Patients.
                  </span>
                </h1>
                <p className="text-[14px] md:text-base leading-[1.5625rem] text-[#3F465D] my-4 md:my-7">
                  Use Klaim Eligible to check patient eligibility on 94% of
                  insurance <br /> portals, all at once. Minimize wait times,
                  improve the patient <br /> experience, streamline staffing
                  costs, and dramatically reduce <br /> claim denials due to
                  eligibility-related mistakes.
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
