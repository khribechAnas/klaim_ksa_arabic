import React from "react";

const XRayManualReporting = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D]">
          Are you relying <br className="block md:hidden" /> on
          <br className="hidden md:block" />
          <span className="ml-2 md:ml-0 bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            manual reporting?
          </span>
        </h2>
        <p className="text-[#3F465D] text-[20px] md:text-[28px] leading-[30px] md:leading-[36px] mt-4 mb-8 md:mt-8 md:mb-8">
          Unfortunately, manual reporting is usually…
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="px-8 py-7 bg-white rounded-lg text-[#3F465D] shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
            <p className="text-[1.25rem] xl:text-[1.65rem] 2xl:text-[1.75rem] font-bold leading-[1.875rem] 2xl:leading-[2.25rem] mb-2">
              Time-consuming
            </p>
            <p className="text-[18px] font-semibold leading-[24px]">
              which makes it slow and expensive
            </p>
          </div>
          <div className="px-8 py-7 bg-white rounded-lg text-[#3F465D] shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
            <p className="text-[1.25rem] xl:text-[1.65rem] 2xl:text-[1.75rem] font-bold leading-[1.875rem] 2xl:leading-[2.25rem] mb-2">
              Out-of-date
            </p>
            <p className="text-[18px] font-semibold leading-[24px]">
              irregular updates create lags in your response time
            </p>
          </div>
          <div className="px-8 py-7 bg-white rounded-lg text-[#3F465D] shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
            <p className="text-[1.25rem] xl:text-[1.65rem] 2xl:text-[1.75rem] font-bold leading-[1.875rem] 2xl:leading-[2.25rem] mb-2">
              Incomplete
            </p>
            <p className="text-[18px] font-semibold leading-[24px]">
              which can result in missing critical insights
            </p>
          </div>
          <div className="px-8 py-7 bg-white rounded-lg text-[#3F465D] shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
            <p className="text-[1.25rem] xl:text-[1.65rem] 2xl:text-[1.75rem] font-bold leading-[1.875rem] 2xl:leading-[2.25rem] mb-2">
              Inaccurate
            </p>
            <p className="text-[18px] font-semibold leading-[24px]">
              due to the high risk of human error
            </p>
          </div>
        </div>
        <p className="text-[#3F465D] text-[20px] md:text-[28px] leading-[30px] leading-[36px] mt-8">
          As a result, costly operational problems can go unnoticed as the
          revenue losses pile up.
        </p>
      </div>
    </section>
  );
};

export default XRayManualReporting;
