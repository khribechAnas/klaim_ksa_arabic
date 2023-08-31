import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const KapitalHowItWorks = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4 md:px-0">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
        <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          How it works
        </span>
      </h2>
      <div className="flex items-center justify-between px-36 mt-[4.63rem]">
        <div className="px-8 py-2 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#6136fb] to-[#5e47f4]">
          <p className="text-white text-[1.125rem] font-semibold leding-[1.5rem]">
            STEP
          </p>
          <p className="text-white text-[3.75rem] font-bold leading-[4.375rem] tracking-[0.1125rem]">
            01
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#5e47f4] to-[#527ddc] w-full" />
        <div className="px-8 py-2 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#527ddc] to-[#4f8fd5]">
          <p className="text-white text-[1.125rem] font-semibold leding-[1.5rem]">
            STEP
          </p>
          <p className="text-white text-[3.75rem] font-bold leading-[4.375rem] tracking-[0.1125rem]">
            02
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#4f8fd5] to-[#45c5be] w-full" />
        <div className="px-8 py-2 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#45c5be] to-[#41d8b6]">
          <p className="text-white text-[1.125rem] font-semibold leding-[1.5rem]">
            STEP
          </p>
          <p className="text-white text-[3.75rem] font-bold leading-[4.375rem] tracking-[0.1125rem]">
            03
          </p>
        </div>
      </div>
      <div className="flex justify-between text-center px-[6.5rem] mt-[1.13rem] mb-24">
        <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D]">
          We purchase your <br /> submitted claims.
        </p>
        <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D]">
          You get paid within <br /> 48 hours of claims <br /> submission.
        </p>
        <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D]">
          We work with the <br /> insurance companies <br /> to get reimbursed.
        </p>
      </div>
      <div className="inline-block flex items-center justify-center text-[#3F465D]">
        <div className="border border-[#6135FB] rounded-lg flex items-center justify-center">
          <div className="px-8 py-4 text-center">
            <p className="text-[1.75rem] font-bold leading-[2.25rem]">
              Less requirements
            </p>
            <p className="text-[1.375rem] font-normal leading-[1.875rem]">
              vs. conventional loans
            </p>
          </div>
          <div className="">
            <img src="assets/images/kapital-line.svg" />
          </div>
          <div className="px-8 py-4 text-center">
            <p className="text-[1.75rem] font-bold leading-[2.25rem]">1 fee</p>
            <p className="text-[1.375rem] font-normal leading-[1.875rem]">
              One-time legal/admin fee
            </p>
          </div>
          <div className="">
            <img src="assets/images/kapital-line.svg" />
          </div>
          <div className="px-8 py-4 text-center">
            <p className="text-[1.75rem] font-bold leading-[2.25rem]">
              0 commitment
            </p>
            <p className="text-[1.375rem] font-normal leading-[1.875rem]">
              Discontinue anytime
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-4 mt-8">
        <ButtonPrimary title="I'm interested" />
      </div>
      <div className="h-44 bg-img-linear relative bg-clip-text text-transparent">
        asdasd
        <div className="p-8 ">
          asdkjsdflkjfdglskdfjglsdkfgjsd;flgkjsdf;lgkjsd;flgjsdkf;glsdjkfg;lsdjkfg;lsdfgjks;dlfgjksd;lfgjksd;flgsdjkfg;lsdkjfg;lsdfgjk;sldfg
        </div>
      </div>
    </section>
  );
};

export default KapitalHowItWorks;
