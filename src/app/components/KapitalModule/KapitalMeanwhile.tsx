import React from "react";

const KapitalMeanwhile = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4 md:px-0">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
        Meanwhile, <br className="hidden md:block" />
        <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          you're working hard to...
        </span>
      </h2>
      <div className="grid grid-cols-2 mt-8">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="px-8 py-7 bg-[#F5F7FB] rounded-lg">
              <h2 className="text-2xl md:text-[2rem] 2xl:text-[32px] font-bold leading-[36px] md:leading-[2.5rem] text-[#3F465D]">
                <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                  Run
                </span>{" "}
              </h2>
              <p className="text-[1.375rem] font-normal leading-[1.875rem] text-[#3F465D]">
                seamless operations
              </p>
            </div>
            <div className="px-8 py-7 bg-[#F5F7FB] rounded-lg">
              <h2 className="text-2xl md:text-[2rem] 2xl:text-[32px] font-bold leading-[36px] md:leading-[2.5rem] text-[#3F465D]">
                <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                  Improve
                </span>{" "}
              </h2>
              <p className="text-[1.375rem] font-normal leading-[1.875rem] text-[#3F465D]">
                patient experience
              </p>
            </div>
            <div className="px-8 py-7 bg-[#F5F7FB] rounded-lg">
              <h2 className="text-2xl md:text-[2rem] 2xl:text-[32px] font-bold leading-[36px] md:leading-[2.5rem] text-[#3F465D]">
                <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                  Attract
                </span>{" "}
              </h2>
              <p className="text-[1.375rem] font-normal leading-[1.875rem] text-[#3F465D]">
                top-tier talent
              </p>
            </div>
            <div className="px-8 py-7 bg-[#F5F7FB] rounded-lg">
              <h2 className="text-2xl md:text-[2rem] 2xl:text-[32px] font-bold leading-[36px] md:leading-[2.5rem] text-[#3F465D]">
                <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                  Entice
                </span>{" "}
              </h2>
              <p className="text-[1.375rem] font-normal leading-[1.875rem] text-[#3F465D]">
                investors
              </p>
            </div>
          </div>
          <div className="mt-8 text-[#3F465D] text-[1.75rem] leading-[2.25rem]">
            Without reliable cash flow, achieving your top objectives becomes
            nearly impossible.
          </div>
        </div>
        <div className="flex items-center justify-end">
          <img src="assets/images/kapital1.png" />
        </div>
      </div>
    </section>
  );
};

export default KapitalMeanwhile;
