import React from "react";

const EligibleFastAndEasy = () => {
  return (
    <section className="bg-[#3F465D]">
      <div className="container mx-auto py-12 md:py-32 px-4">
        <h2 className="text-[1.875rem] md:text-5xl font-semibold leading-[2.25rem] md:leading-[3.9rem] text-[#3F465D]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5186d9] to-[#42d9b7]">
            Fast and easy upgrade
          </span>
        </h2>
        <p className="text-white text-[1.25rem] md:text-[1.75rem] leading-[1.875rem] md:leading-[2.25rem] my-8">
          With Klaim Eligible, your staff will be able to…
        </p>
        <div className="text-white grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="px-8 py-7 bg-[#323748] rounded-lg">
            <h4 className="text-[1.5rem] md:text-[2rem] font-bold leading-[2.25rem] md:leading-[2.5rem] mb-2">
              <span className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-[#5186d9] to-[#42d9b7]">
                Instantly check
              </span>
            </h4>
            <p className="text-[1.125rem] leading-[1.625rem] md:text-[1.375rem] md:leading-[1.875rem]">
              patient credentials across 94% of insurance portals, all at once
            </p>
          </div>
          <div className="px-8 py-7 bg-[#323748] rounded-lg">
            <h4 className="text-[1.5rem] md:text-[2rem] font-bold leading-[2.25rem] md:leading-[2.5rem] mb-2">
              <span className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-[#5186d9] to-[#42d9b7]">
                Identify
              </span>
            </h4>
            <p className="text-[1.125rem] leading-[1.625rem] md:text-[1.375rem] md:leading-[1.875rem]">
              patients’ insurance in a few clicks, even if they forget coverage
              details
            </p>
          </div>
          <div className="px-8 py-7 bg-[#323748] rounded-lg">
            <h4 className="text-[1.5rem] md:text-[2rem] font-bold leading-[2.25rem] md:leading-[2.5rem] mb-2">
              <span className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-[#5186d9] to-[#42d9b7]">
                Easily re-check
              </span>
            </h4>
            <p className="text-[1.125rem] leading-[1.625rem] md:text-[1.375rem] md:leading-[1.875rem]">
              eligibility to detect changes that would otherwise lead to a
              denial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibleFastAndEasy;
