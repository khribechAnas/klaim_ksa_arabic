import React from "react";

const KapitalWhatWould = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
          What would you do with
          <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            48-hour claim payments?
          </span>
        </h2>
        <div className="my-8 text-[#3F465D] text-[1.75rem] leading-[2.25rem]">
          Reliable cashflow would allow you to...
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7">
            <img src="assets/images/kapital2.svg" />
            <p className="text-[#3F465D] text-[1.375rem] leading-[1.875rem] mt-8">
              Accelerate your revenue cycle from 45+ days to <br /> 48 hours
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7">
            <img src="assets/images/kapital3.svg" />
            <p className="text-[#3F465D] text-[1.375rem] leading-[1.875rem] mt-8">
              Stabilize your cash flow <br /> and increase <br /> profitability
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7">
            <img src="assets/images/kapital4.svg" />
            <p className="text-[#3F465D] text-[1.375rem] leading-[1.875rem] mt-8">
              Reduce administrative expenses
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)] px-8 py-7">
            <img src="assets/images/kapital5.svg" />
            <p className="text-[#3F465D] text-[1.375rem] leading-[1.875rem] mt-8">
              Finally catch up on fixed costs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KapitalWhatWould;
