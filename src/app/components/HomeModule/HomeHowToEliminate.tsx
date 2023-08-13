import React from "react";

const HomeHowToEliminate = () => {
  return (
    <section>
      <div className="container mx-auto py-12 md:py-32 px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D]">
          How to eliminate your
          <br />
          <span className="text-linear">biggest growth obsticle</span> <br />
          so that you can
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-center px-8 py-7 bg-[#F5F7FB] rounded-lg">
            <img src="assets/images/HowToEliminate1.svg" />
            <p className="ml-8 text-[#3F465D text-[18px] leading-[26px] md:text-[22px] md:leading-[30px]">
              Grow and expand your business
            </p>
          </div>
          <div className="flex items-center justify-center px-8 py-7 bg-[#F5F7FB] rounded-lg">
            <img src="assets/images/HowToEliminate2.svg" />
            <p className="ml-8 text-[#3F465D] text-[18px] leading-[26px] md:text-[22px] md:leading-[30px]">
              Increase patient satisfaction and referrals
            </p>
          </div>
          <div className="flex items-center justify-center px-8 py-7 bg-[#F5F7FB] rounded-lg">
            <img src="assets/images/HowToEliminate3.svg" />
            <p className="ml-8 text-[#3F465D] text-[18px] leading-[26px] md:text-[22px] md:leading-[30px]">
              Attract top-tier talent and investors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowToEliminate;
