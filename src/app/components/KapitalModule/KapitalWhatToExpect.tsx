import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const KapitalWhatToExpect = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4 md:px-0">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
        <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          What to expect
        </span>
      </h2>
      <div className="hidden md:grid grid-cols-4 mt-8">
        <div className="flex items-center">
          <div className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#6135fb] to-[#5f3ff7] w-[5rem]">
            <p className="text-white text-[2.625rem] font-bold leading-[3.4125rem]">
              01
            </p>
          </div>
          <div className="h-1 bg-gradient-to-r from-[#5f3ff7] to-[#5767e6] w-full" />
        </div>
        <div className="flex items-center">
          <div className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#5767e6] to-[#5572e1] w-[5rem]">
            <p className="text-white text-[2.625rem] font-bold leading-[3.4125rem]">
              02
            </p>
          </div>
          <div className="h-1 bg-gradient-to-r from-[#5572e1] to-[#4d99d0] w-full" />
        </div>
        <div className="flex items-center">
          <div className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#4d99d0] to-[#4ba4cc] w-[5rem]">
            <p className="text-white text-[2.625rem] font-bold leading-[3.4125rem]">
              03
            </p>
          </div>
          <div className="h-1 bg-gradient-to-r from-[#4ba4cc] to-[#43ccbb] w-full" />
        </div>
        <div className="flex items-center">
          <div className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#43ccbb] to-[#41d8b6] w-[5rem]">
            <p className="text-white text-[2.625rem] font-bold leading-[3.4125rem]">
              04
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Start*/}
      <div className="block md:hidden mt-4 mb-16 grid grid-cols-1">
        <div className="flex items-center">
          <div className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-b from-[#6138fa] to-[#5b52ef] w-[5rem]">
            <p className="text-white text-[2.625rem] font-bold leading-[3.4125rem]">
              01
            </p>
          </div>
          <p className="text-[1.125rem] leading-[1.625rem] text-[#3F465D] ml-4">
            Let us know
            <br /> you’re interested
          </p>
        </div>
        <div className="h-[4rem] w-1 bg-gradient-to-b from-[#5b52ef] to-[#5764e7] ml-10" />
        <div className="flex items-center">
          <div className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-b from-[#5764e7] to-[#537ddc] w-[5rem]">
            <p className="text-white text-[2.625rem] font-bold leading-[3.4125rem]">
              02
            </p>
          </div>
          <p className="text-[1.125rem] leading-[1.625rem] text-[#3F465D] ml-4">
            Get a no-cost Claim <br /> Purchase Proposal
          </p>
        </div>
        <div className="h-[4rem] w-1 bg-gradient-to-b from-[#537ddc] to-[#5090d5] ml-10" />
        <div className="flex items-center">
          <div className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-b from-[#5090d5] to-[#4aa9ca] w-[5rem]">
            <p className="text-white text-[2.625rem] font-bold leading-[3.4125rem]">
              03
            </p>
          </div>
          <p className="text-[1.125rem] leading-[1.625rem] text-[#3F465D] ml-4">
            Onboard with us <br /> in as little as 5-7 days
          </p>
        </div>
        <div className="h-[4rem] w-1 bg-gradient-to-b from-[#4aa9ca] to-[#46bbc2] ml-10" />
        <div className="flex items-center">
          <div className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-b from-[#46bbc2] to-[#42d4b7] w-[5rem]">
            <p className="text-white text-[2.625rem] font-bold leading-[3.4125rem]">
              04
            </p>
          </div>
          <p className="text-[1.125rem] leading-[1.625rem] text-[#3F465D] ml-4">
            Start getting 48-hour claim <br /> payments
          </p>
        </div>
      </div>
      {/* Mobile End */}

      <div className="hidden md:grid grid-cols-4 mt-[1.06rem]">
        <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D]">
          Let us know
          <br /> you’re interested
        </p>
        <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D]">
          Get a no-cost Claim <br /> Purchase Proposal.
        </p>
        <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D]">
          Onboard with us
          <br /> in as little as 5-7 days
        </p>
        <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D]">
          Start getting 48-hour <br /> claim payments
        </p>
      </div>
      <div className="py-4 mt-8">
        <ButtonPrimary title="I'm interested!" />
      </div>
    </section>
  );
};

export default KapitalWhatToExpect;
