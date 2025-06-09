import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const KapitalHowItWorks = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
        <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          How it works
        </span>
      </h2>
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between px-0 md:px-[4.8rem] lg:px-36 mt-[4.63rem] ">
        <div className="px-8 py-2 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#6136fb] to-[#5e47f4] w-[8.125rem]">
          <p className="text-white text-[1.125rem] font-semibold leding-[1.5rem]">
            STEP
          </p>
          <p className="text-white text-[3.75rem] font-bold leading-[4.375rem] tracking-[0.1125rem]">
            01
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#5e47f4] to-[#527ddc] w-full" />
        <div className="px-8 py-2 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#527ddc] to-[#4f8fd5] w-[8.125rem]">
          <p className="text-white text-[1.125rem] font-semibold leding-[1.5rem]">
            STEP
          </p>
          <p className="text-white text-[3.75rem] font-bold leading-[4.375rem] tracking-[0.1125rem]">
            02
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#4f8fd5] to-[#45c5be] w-full" />
        <div className="px-8 py-2 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#45c5be] to-[#41d8b6] w-[8.125rem]">
          <p className="text-white text-[1.125rem] font-semibold leding-[1.5rem]">
            STEP
          </p>
          <p className="text-white text-[3.75rem] font-bold leading-[4.375rem] tracking-[0.1125rem]">
            03
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden mt-4 mb-16 grid grid-cols-1">
        <div className="flex items-center">
          <div className="px-8 py-2 flex flex-col items-center rounded-lg bg-gradient-to-b from-[#603bf8] to-[#595cea] w-[6.375rem]">
            <p className="text-white text-[1rem] font-semibold leding-[1.5rem]">
              STEP
            </p>
            <p className="text-white text-[2.25rem] font-semibold leading-[2.75rem] tracking-[0.0675rem]">
              01
            </p>
          </div>
          <p className="text-[1.125rem] leading-[1.625rem] text-[#3F465D] ml-4">
            We purchase your <br /> submitted claims
          </p>
        </div>
        <div className="h-[4rem] w-1 bg-gradient-to-b from-[#595cea] to-[#5476e0] ml-[3.1875rem]" />
        <div className="flex items-center">
          <div className="px-8 py-2 flex flex-col items-center rounded-lg bg-gradient-to-b from-[#5476e0] to-[#4e98d1] w-[6.375rem]">
            <p className="text-white text-[1rem] font-semibold leding-[1.5rem]">
              STEP
            </p>
            <p className="text-white text-[2.25rem] font-semibold leading-[2.75rem] tracking-[0.0675rem]">
              02
            </p>
          </div>
          <p className="text-[1.125rem] leading-[1.625rem] text-[#3F465D] ml-4">
            We pay you within 24 hours
          </p>
        </div>
        <div className="h-[4rem] w-1 bg-gradient-to-b from-[#4e98d1] to-[#49afc7] ml-[3.1875rem]" />
        <div className="flex items-center">
          <div className="px-8 py-2 flex flex-col items-center rounded-lg bg-gradient-to-b from-[#49afc7] to-[#42d2b9] w-[6.375rem]">
            <p className="text-white text-[1rem] font-semibold leding-[1.5rem]">
              STEP
            </p>
            <p className="text-white text-[2.25rem] font-semibold leading-[2.75rem] tracking-[0.0675rem]">
              03
            </p>
          </div>
          <p className="text-[1.125rem] leading-[1.625rem] text-[#3F465D] ml-4">
            We handle reimbursement from the insurers
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex justify-between text-center px-[5rem] md:px-[1.5rem] lg:px-[5.4rem] xl:px-[5.6rem] mt-[1.13rem] mb-12 lg:mb-24">
        <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D] w-[15.16rem] px-0 md:px-3">
          We purchase your <br className="hidden lg:block" /> submitted claims
        </p>
        <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D] w-[15.16rem] px-0 md:px-5">
          We pay you within 24 hours
        </p>
        <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D] w-[15.16rem] px-0 md:px-3">
          We handle reimbursement from the insurers
        </p>
      </div>

      <div className="flex items-center justify-center text-[#3F465D]">
        <div className="border border-[#6135FB] rounded-lg flex flex-col xl:flex-row items-center justify-center">
          <div className="px-8 py-4 text-center w-[23rem]">
            <p className="text-[1.25rem] md:text-[1.75rem] font-bold leading-[1.875rem] md:leading-[2.25rem]">
              Less requirements
            </p>
            <p className="text-[1.125rem] md:text-[1.375rem] font-normal leadint-[1.625rem] md:leading-[1.875rem]">
              vs. conventional loans
            </p>
          </div>
          <div className="w-[1px] self-stretch my-4 bg-[#6135FB] hidden xl:block" />
          <div className="h-[1px] self-stretch mx-16 my-2 bg-[#6135FB] block xl:hidden" />
          <div className="px-8 py-4 text-center w-[23rem]">
            <p className="text-[1.25rem] md:text-[1.75rem] font-bold leading-[1.875rem] md:leading-[2.25rem]">
              1 fee
            </p>
            <p className="text-[1.125rem] md:text-[1.375rem] font-normal leadint-[1.625rem] md:leading-[1.875rem]">
              One-time legal/admin fee
            </p>
          </div>
          <div className="w-[1px] self-stretch my-4 bg-[#6135FB] hidden xl:block" />
          <div className="h-[1px] self-stretch mx-16 my-2 bg-[#6135FB] block xl:hidden" />
          <div className="px-8 py-4 text-center w-[23rem]">
            <p className="text-[1.25rem] md:text-[1.75rem] font-bold leading-[1.875rem] md:leading-[2.25rem]">
              0 commitment
            </p>
            <p className="text-[1.125rem] md:text-[1.375rem] font-normal leadint-[1.625rem] md:leading-[1.875rem]">
              Discontinue anytime
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-4 mt-8">
        <ButtonPrimary title="Sign Up Today" href="https://portal.uae.klaim.ai" target="_blank" />
      </div>
    </section>
  );
};

export default KapitalHowItWorks;
