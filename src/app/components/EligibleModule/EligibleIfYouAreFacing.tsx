import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const EligibleIfYouAreFacing = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
          <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            If you’re facing…
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8 mb-12 xl:mb-32">
          <div className="flex flex-col border rounded-[0.625rem]">
            <img src="assets/images/eligible-card1.png" />
            <p className="px-6 py-4 text-[1.375rem] leading-[1.875rem] text-[#3F465D]">
              Patients frustrated by <br /> long check-in times
            </p>
          </div>
          <div className="flex flex-col border rounded-[0.625rem]">
            <img src="assets/images/eligible-card2.png" />
            <p className="px-6 py-4 text-[1.375rem] leading-[1.875rem] text-[#3F465D]">
              Frequent eligibility-
              <br />
              related claim denials
            </p>
          </div>
          <div className="flex flex-col border rounded-[0.625rem]">
            <img src="assets/images/eligible-card3.png" />
            <p className="px-6 py-4 text-[1.375rem] leading-[1.875rem] text-[#3F465D]">
              Time-consuming <br /> eligibility procedures
            </p>
          </div>
          <div className="flex flex-col border rounded-[0.625rem]">
            <img src="assets/images/eligible-card4.png" />
            <p className="px-6 py-4 text-[1.375rem] leading-[1.875rem] text-[#3F465D]">
              Rising front-desk <br />
              staffing costs
            </p>
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
          …you need
          <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#5186d9] to-[#41d8b6] ml-3">
            automated
          </span>{" "}
          <br />
          <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            eligibility checking!
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7 flex items-center">
            <img src="assets/images/eligible-icon1.svg" />
            <p className="text-[#3F465D] text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] ml-8">
              Dramatically reduce lost revenue due to eligibility-related claim
              denials
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7 flex items-center">
            <img src="assets/images/eligible-icon2.svg" />
            <p className="text-[#3F465D] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] ml-8">
              Streamline staffing costs by improving front-desk efficiency
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7 flex items-center">
            <img src="assets/images/eligible-icon3.svg" />
            <p className="text-[#3F465D] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] ml-8">
              Drastically improve your patient experience and satisfaction
            </p>
          </div>
        </div>
        <div className="py-4">
          <ButtonPrimary title="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default EligibleIfYouAreFacing;
