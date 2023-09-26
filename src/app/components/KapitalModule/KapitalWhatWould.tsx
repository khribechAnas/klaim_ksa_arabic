import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const KapitalWhatWould = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
          What would you do with
          <br />
          <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            24-hour claim payments?
          </span>
        </h2>
        <div className="mt-4 md:mt-8 mb-8 text-[#3F465D] text-[1.25rem] md:text-[1.75rem] leading-[1.875rem] md:leading-[2.25rem]">
          Reliable cashflow would allow you to...
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7 flex items-center md:block">
            <img src="assets/images/kapital2.svg" />
            <p className="text-[#3F465D] text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] ml-8 mt-0 md:mt-8 md:ml-0">
              Accelerate your revenue cycle from 30+ days to 24 hours
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7 flex items-center md:block">
            <img src="assets/images/kapital3.svg" />
            <p className="text-[#3F465D] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] ml-8 mt-0 md:mt-8 md:ml-0">
              Stabilize your cash flow and increase profitability
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7 flex items-center md:block">
            <img src="assets/images/kapital4.svg" />
            <p className="text-[#3F465D] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] ml-8 mt-0 md:mt-8 md:ml-0">
              Reduce administrative expenses
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7 flex items-center md:block">
            <img src="assets/images/kapital5.svg" />
            <p className="text-[#3F465D] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] ml-8 mt-0 md:mt-8 md:ml-0">
              Finally catch up on fixed costs
            </p>
          </div>
        </div>
        <div className="py-4 mt-8">
          <ButtonPrimary title="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default KapitalWhatWould;
