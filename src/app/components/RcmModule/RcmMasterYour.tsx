import React from "react";

const RcmMasterYour = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4 md:px-0">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
        Master your revenue cycle <br className="hidden md:block" />
        <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          starting in as little as 7 days
        </span>
      </h2>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="py-16">
          <div className="flex mb-6">
            <img src="assets/images/check.svg" />
            <p className="ml-2 text-[1.125rem] font-semibold leading-[1.5rem]">
              Get claims paid in 48 hours instead of 45+ days
            </p>
          </div>
          <div className="flex mb-6">
            <img src="assets/images/check.svg" />
            <p className="ml-2 text-[1.125rem] font-semibold leading-[1.5rem]">
              Take revenue cycle management off your plate
            </p>
          </div>
          <div className="flex mb-6">
            <img src="assets/images/check.svg" />
            <p className="ml-2 text-[1.125rem] font-semibold leading-[1.5rem]">
              Minimize denial-related revenue loss by fixing claims prior to
              submission
            </p>
          </div>
          <div className="flex mb-6">
            <img src="assets/images/check.svg" />
            <p className="ml-2 text-[1.125rem] font-semibold leading-[1.5rem]">
              Accelerate eligibility checking for a better experience and fewer
              denials
            </p>
          </div>
          <div className="flex">
            <img src="assets/images/check.svg" />
            <p className="ml-2 text-[1.125rem] font-semibold leading-[1.5rem]">
              Make confident data-driven decisions based on real-time reporting
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start xl:justify-end">
          <img
            src="assets/images/rcm-1.png"
            className="w-full h-[391px] object-cover ml-0 xl:ml-24 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default RcmMasterYour;
