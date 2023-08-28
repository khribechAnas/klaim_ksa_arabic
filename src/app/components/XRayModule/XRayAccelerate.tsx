import React from "react";

const XRayAccelerate = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4 md:px-0">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D]">
        Accelerate your growth <br /> with
        <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          data-driven <br /> decision-making
        </span>
      </h2>
      <p className="text-[#3F465D] text-[20px] md:text-[28px] leading-[30px] md:leading-[36px] mt-8">
        With Klaim X-Ray, you can get crystal-clear visibility of exactly what
        you need to know right now.
      </p>
      <p className="text-[#3F465D] text-[20px] md:text-[28px] leading-[30px] md:leading-[36px] mt-4 mb-8">
        Here are just a few examples of the areas you can track:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="py-7 md:py-4 px-8 md:px-12 bg-[#F5F7FB] rounded-lg flex items-center">
          <img src="assets/images/xray1.svg" />
          <div className="ml-8 xl:ml-8 2xl:ml-12 text-[#3F465D]">
            <p className="mb-0 md:mb-2 text-[24px] md:text-[32px] font-bold leading-[36px] md:leading-[40px]">
              Claims
            </p>
            <p className="text-[18px] md:text-[22px] leading-[26px] md:leading-[30px]">
              Track claims by <br /> status, denial reasons, and more
            </p>
          </div>
        </div>
        <div className="py-7 md:py-4 px-8 md:px-12 bg-[#F5F7FB] rounded-lg flex items-center">
          <img src="assets/images/xray2.svg" />
          <div className="ml-8 xl:ml-8 2xl:ml-12 text-[#3F465D]">
            <p className="mb-0 md:mb-2 text-[24px] md:text-[32px] font-bold leading-[36px] md:leading-[40px]">
              Team
            </p>
            <p className="text-[18px] md:text-[22px] leading-[26px] md:leading-[30px]">
              Monitor physicians performance and efficiency
            </p>
          </div>
        </div>
        <div className="py-7 md:py-4 px-8 md:px-12 bg-[#F5F7FB] rounded-lg flex items-center">
          <img src="assets/images/xray1.svg" />
          <div className="ml-8 xl:ml-8 2xl:ml-12 text-[#3F465D]">
            <p className="mb-0 md:mb-2 text-[24px] md:text-[32px] font-bold leading-[36px] md:leading-[40px]">
              Activities
            </p>
            <p className="text-[18px] md:text-[22px] leading-[26px] md:leading-[30px]">
              Compare and <br /> optimize revenue-producing activities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XRayAccelerate;
