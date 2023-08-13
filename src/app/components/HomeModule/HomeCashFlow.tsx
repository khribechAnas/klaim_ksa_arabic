import React from "react";

const HomeCashFlow = () => {
  return (
    <section className="pt-12 md:pt-32 pb-12 md:pb-16 px-4 md:px-0 bg-[#F5F7FB]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D]">
          <span className="text-linear">Unpredictable cash flow</span>{" "}
          <br className="hidden md:block" />
          prevents you from...
        </h2>
        <div className="flex items-center mt-4 md:mt-8">
          <div className="flex-1 hidden md:block">
            <img
              src="assets/images/CashFlow1.png"
              className="rounded-lg w-full"
            />
          </div>
          <div className="flex-1">
            <p className="px-4 md:px-16 text-[20px] text-[28px] text-[#3F465D] leading-9 bg-white md:bg-transparent py-4 md:py-0 rounded-lg md:rounded-none shadow-lg md:shadow-none">
              <span className="md:hidden text-[#6135FB] mr-4">&#8226;</span>Pay
              for the talent, facilities, and <br className="hidden md:block" />{" "}
              equipment needed for growth
            </p>
          </div>
        </div>
        <div className="flex items-center mt-8">
          <div className="flex-1">
            <p className="px-4 md:px-16 text-[20px] text-[28px] text-[#3F465D] leading-9 bg-white md:bg-transparent py-4 md:py-0 rounded-lg md:rounded-none shadow-lg md:shadow-none">
              <span className="md:hidden text-[#6135FB] mr-4">&#8226;</span>Make
              investments to improve the <br className="hidden md:block" />{" "}
              patient experience
            </p>
          </div>
          <div className="flex-1 hidden md:block">
            <img
              src="assets/images/CashFlow2.png"
              className="rounded-lg w-full"
            />
          </div>
        </div>
        <div className="flex items-center mt-8">
          <div className="flex-1 hidden md:block">
            <img
              src="assets/images/CashFlow3.png"
              className="rounded-lg w-full"
            />
          </div>
          <div className="flex-1">
            <p className="px-4 md:px-16 text-[20px] text-[28px] text-[#3F465D] leading-9 bg-white md:bg-transparent py-4 md:py-0 rounded-lg md:rounded-none shadow-lg md:shadow-none">
              <span className="md:hidden text-[#6135FB] mr-4">&#8226;</span>
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
