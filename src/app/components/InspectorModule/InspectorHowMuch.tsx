import React from "react";

const InspectorHowMuch = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4 flex lg:flex-row flex-col-reverse items-center">
        <div className="flex-1 mr-2 2xl:mr-0 mt-8 2xl:mt-0 w-full 2xl:w-auto">
          <img
            src="assets/images/inspector1.png"
            className="w-full 2xl:w-auto"
          />
        </div>
        <div className="flex-1 ml-2 2xl:ml-0">
          <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D]">
            How much are <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              claim denials costing you?
            </span>
          </h2>
          <p className="text-[#3F465D] font-bold text-[1.5rem] md:text-[2rem] leading-[2.25rem] md:leading-[2.5rem] my-4 md:my-8">
            An alarming 15%-30% of claims are rejected.*
          </p>
          <p className="text-[#3F465D] font-normal text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] mb-4 md:mb-8">
            And the results are costly: lost revenue, unreliable cash flow, and
            escalating staffing costs as your team works overtime to
            troubleshoot and resubmit claims.
          </p>
          <p className="text-[#3F465D] font-normal text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] mb-4 md:mb-8">
            Over time, these costs can prevent you from investing in growth. In
            some cases, they lead to bankruptcy.
          </p>
          <p className="text-[#3F465D] font-normal text-[0.75rem] md:text-[0.875rem] leading-[1.125rem] mb-8 md:mb-0">
            *These figures are based on{" "}
            <span className="underline text-[#6135FB]">
              <a
                href="https://www.entrepreneur.com/en-ae/technology/enabling-efficiency-dubai-based-klaim-is-helping-menas/424499"
                target="_blank"
              >
                internal research as reported by Entrepreneur Middle East.
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InspectorHowMuch;
