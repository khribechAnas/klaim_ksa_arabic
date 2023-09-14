import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const RcmSeamless = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
        Seamless <br />
        <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          done-for-you solution
        </span>
      </h2>
      <p className="my-8 text-[1.25rem] leading-[1.875rem] md:text-[1.75rem] md:leading-[2.25rem] text-[#3F465D]">
        RCM 2.0 blends all our products and services into one seamless solution:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="px-8 md:px-16 py-7 md:py-12 bg-[#F5F7FB] rounded-lg">
          <div className="flex md:flex-col flex-row items-center md:items-start mb-2 md:mb-0">
            <img src="assets/images/rcm-icon1.svg" />
            <h3 className="text-[#6135FB] md:text-[#3F465D] text-[1.5rem] md:text-[2rem] leading-[2.25rem] md:leading-[2.5rem] font-bold ml-8 md:ml-0 mb-0 md:mb-4 mt-0 md:mt-8">
              Klaim <br className="block lg:hidden" /> Kapital
            </h3>
          </div>
          <p className="text-[#3F465D] text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem]">
            Get claim payments in 48 hours instead of 45+ days.
          </p>
        </div>
        <div className="px-8 md:px-16 py-7 md:py-12 bg-[#F5F7FB] rounded-lg">
          <div className="flex md:flex-col flex-row items-center md:items-start mb-2 md:mb-0">
            <img src="assets/images/rcm-icon2.svg" />
            <h3 className="text-[#6135FB] md:text-[#3F465D] text-[1.5rem] md:text-[2rem] leading-[2.25rem] md:leading-[2.5rem] font-bold ml-8 md:ml-0 mb-0 md:mb-4 mt-0 md:mt-8">
              Klaim RCM Team
            </h3>
          </div>
          <p className="text-[#3F465D] text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem]">
            Take revenue cycle management off your plate.
          </p>
        </div>
        <div className="px-8 md:px-16 py-7 md:py-12 bg-[#F5F7FB] rounded-lg">
          <div className="flex md:flex-col flex-row items-center md:items-start mb-2 md:mb-0">
            <img src="assets/images/rcm-icon3.svg" />
            <h3 className="text-[#6135FB] md:text-[#3F465D] text-[1.5rem] md:text-[2rem] leading-[2.25rem] md:leading-[2.5rem] font-bold ml-8 md:ml-0 mb-0 md:mb-4 mt-0 md:mt-8">
              Klaim <br className="block lg:hidden" /> Eligible
            </h3>
          </div>
          <p className="text-[#3F465D] text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem]">
            Check patient eligibility on 94% of insurance portals, all at once.
          </p>
        </div>
        <div className="px-8 md:px-16 py-7 md:py-12 bg-[#F5F7FB] rounded-lg">
          <div className="flex md:flex-col flex-row items-center md:items-start mb-2 md:mb-0">
            <img src="assets/images/rcm-icon4.svg" />
            <h3 className="text-[#6135FB] md:text-[#3F465D] text-[1.5rem] md:text-[2rem] leading-[2.25rem] md:leading-[2.5rem] font-bold ml-8 md:ml-0 mb-0 md:mb-4 mt-0 md:mt-8">
              Klaim <br className="block lg:hidden" /> Inspector
            </h3>
          </div>
          <p className="text-[#3F465D] text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem]">
            Quickly resolve claim issues before submission, rather than 45+ days
            later when the claim is denied.
          </p>
        </div>
        <div className="px-8 md:px-16 py-7 md:py-12 bg-[#F5F7FB] rounded-lg">
          <div className="flex md:flex-col flex-row items-center md:items-start mb-2 md:mb-0">
            <img src="assets/images/rcm-icon5.svg" />
            <h3 className="text-[#6135FB] md:text-[#3F465D] text-[1.5rem] md:text-[2rem] leading-[2.25rem] md:leading-[2.5rem] font-bold ml-8 md:ml-0 mb-0 md:mb-4 mt-0 md:mt-8">
              Klaim <br className="block md:hidden" /> X-Ray
            </h3>
          </div>
          <p className="text-[#3F465D] text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem]">
            Make confident data-driven decisions for faster growth and fewer
            wrong turns.
          </p>
        </div>
        <div className="px-0 md:px-8 pt-8 bg-[#fff] rounded-lg">
          <p className="text-[#3F465D] text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem]">
            RCM 2.0 frees up your time and <br /> energy to focus on your
            highest priorities—like growth and <br /> profitability, patient and
            staff satisfaction, and attracting talent and investors.
          </p>
          <p className="text-[#3F465D] text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] my-4 md:my-8">
            Get started in as little as 7 days.
          </p>
          <div className="py-4">
            <ButtonPrimary title="I'm interested!" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RcmSeamless;
