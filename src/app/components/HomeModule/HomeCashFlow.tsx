import React from "react";

const HomeCashFlow = () => {
  return (
    <section className="pt-12 md:pt-32 pb-12 md:pb-32 px-4 bg-[#F5F7FB]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            Unpredictable cash flow
          </span>{" "}
          <br className="hidden md:block" />
          prevents you from...
        </h2>
        <div className="flex items-center flex-col md:flex-row mt-8 md:mt-8">
          <div className="flex-1">
            <div className="pr-0 lg:pr-12">
              <img
                src="assets/images/CashFlow1.png"
                className="rounded-lg w-full"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="px-4 md:px-16 text-[20px] md:text-[28px] text-[#3F465D] leading-9 bg-transparent py-4 md:py-0 rounded-b-lg md:rounded-none">
              Pay for the talent, facilities, and{" "}
              <br className="hidden xl:block" /> equipment needed for growth
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col-reverse md:flex-row mt-8 md:mt-8">
          <div className="flex-1 w-full">
            <p className="px-4 md:px-16 text-[20px] md:text-[28px] text-[#3F465D] leading-9 bg-transparent py-4 md:py-0 rounded-b-lg md:rounded-none">
              Make investments to improve the <br className="hidden xl:block" />{" "}
              patient experience
            </p>
          </div>
          <div className="flex-1">
            <div className="pl-0 lg:pl-12">
              <img
                src="assets/images/CashFlow2.png"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row mt-8 md:mt-8">
          <div className="flex-1">
            <div className="pr-0 lg:pr-12">
              <img
                src="assets/images/CashFlow3.png"
                className="rounded-lg w-full"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="px-4 md:px-16 text-[20px] md:text-[28px] text-[#3F465D] leading-9 bg-transparent py-4 md:py-0 rounded-b-lg md:rounded-none">
              Achieve the level of excellence that{" "}
              <br className="hidden md:block" /> attracts talent and investors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCashFlow;
