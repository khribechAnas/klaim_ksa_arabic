import React from "react";

const KapitalCardsBanner = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg bg-white shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
            <h2 className="text-2xl md:text-[30px] 2xl:text-[32px] font-bold leading-[36px] md:leading-[40px] text-[#3F465D]">
              <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                Over 323,000
              </span>{" "}
            </h2>
            <p className="text-[18px] font-normal md:font-semibold leading-[24px] text-[#3F465D]">
              claims processed globally
            </p>
          </div>
          <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg bg-white shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
            <h2 className="text-2xl md:text-[30px] 2xl:text-[32px] font-bold leading-[36px] md:leading-[40px] text-[#3F465D]">
              <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                {`Over $25 milion`}
              </span>{" "}
            </h2>
            <p className="text-[18px] font-normal md:font-semibold leading-[24px] text-[#3F465D]">
              disbursed in claim payments
            </p>
          </div>
          <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg bg-white shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
            <h2 className="text-2xl md:text-[30px] 2xl:text-[32px] font-bold leading-[36px] md:leading-[40px] text-[#3F465D]">
              <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                Founded in 2019
              </span>{" "}
            </h2>
            <p className="text-[18px] font-normal md:font-semibold leading-[24px] text-[#3F465D]">
              Offices in the UAE, KSA, and Oman
            </p>
          </div>
          <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg bg-white shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
            <h2 className="text-2xl md:text-[30px] 2xl:text-[32px] font-bold leading-[36px] md:leading-[40px] text-[#3F465D]">
              <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                Honored as an
              </span>{" "}
            </h2>
            <p className="text-[18px] font-normal md:font-semibold leading-[24px] text-[#3F465D]">
              Innovative Fintech Pioneer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KapitalCardsBanner;
