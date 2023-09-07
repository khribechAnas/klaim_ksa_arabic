import React from "react";

const InspectorFindAndFix = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4 md:px-0 flex flex-col-reverse md:flex-row items-center">
        <div className="flex-1">
          <img src="assets/images/inspector6.png" className="rounded-lg" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D]">
            <span className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              Find and fix
            </span>
            Medical <br /> Necessity mistakes <br />
            in your claims
          </h2>
          <p className="text-[#3F465D] font-normal text-[1.25rem] leading-[1.875rem] md:text-[1.75rem] md:leading-[2.25rem] my-4 md:my-8">
            Your staff will be able to find and fix issues that would be nearly
            impossible to see otherwise—and achieve an even higher acceptance
            rate.
          </p>
          <p className="text-[#3F465D] font-normal text-[0.875rem] leading-[1.5625rem] md:text-[1rem] md:leading-[1.5625rem] mb-8 md:mb-0">
            Inspector’s AI Doctor has a 89% success rate in identifying accurate
            claims and an 82% success rate in identifying denied claims.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InspectorFindAndFix;
