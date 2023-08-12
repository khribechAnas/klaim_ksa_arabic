import React from "react";

const HomeCashFlow = () => {
  return (
    <section className="pt-32 pb-16 bg-[#F5F7FB]">
      <div className="container mx-auto">
        <h2 className="text-5xl font-semibold leading-[130%] text-[#3F465D]">
          <span className="text-linear">Unpredictable cash flow</span> <br />
          prevents you from...
        </h2>
        <div className="flex items-center mt-8">
          <div className="flex-1">
            <img
              src="assets/images/CashFlow1.png"
              className="rounded-lg w-full"
            />
          </div>
          <div className="flex-1">
            <p className="px-16 text-[28px] text-[#3F465D] leading-9">
              Pay for the talent, facilities, and <br /> equipment needed for
              growth
            </p>
          </div>
        </div>
        <div className="flex items-center mt-8">
          <div className="flex-1">
            <p className="px-16 text-[28px] text-[#3F465D] leading-9">
              Make investments to improve the <br /> patient experience
            </p>
          </div>
          <div className="flex-1">
            <img
              src="assets/images/CashFlow2.png"
              className="rounded-lg w-full"
            />
          </div>
        </div>
        <div className="flex items-center mt-8">
          <div className="flex-1">
            <img
              src="assets/images/CashFlow3.png"
              className="rounded-lg w-full"
            />
          </div>
          <div className="flex-1">
            <p className="px-16 text-[28px] text-[#3F465D] leading-9">
              Achieve the level of excellence that <br /> attracts talent and
              investors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCashFlow;
