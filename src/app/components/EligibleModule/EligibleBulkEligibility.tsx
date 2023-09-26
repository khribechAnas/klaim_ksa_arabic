import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const EligibleBulkEligibility = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
          <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            Bulk eligibility checks
          </span>
          <br />
          allow you to…
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 xl:mt-8 mb-8 xl:mb-16">
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7 flex lg:block">
            <img src="assets/images/eligible-icon4.svg" />
            <p className="text-[#3F465D] text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] ml-8 mt-0 lg:mt-8 lg:ml-0">
              Check hundreds of patients in minutes instead of hours
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7 flex lg:block">
            <img src="assets/images/eligible-icon5.svg" />
            <p className="text-[#3F465D] text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] ml-8 mt-0 lg:mt-8 lg:ml-0">
              Save hours of manual work for your patient service team
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7 flex lg:block">
            <img src="assets/images/eligible-icon6.svg" />
            <p className="text-[#3F465D] text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] ml-8 mt-0 lg:mt-8 lg:ml-0">
              Check in patients ahead of time for a first-class experience
            </p>
          </div>
        </div>
        <div className="py-4 text-center">
          <ButtonPrimary title="I'm interested" />
        </div>
      </div>
    </section>
  );
};

export default EligibleBulkEligibility;
