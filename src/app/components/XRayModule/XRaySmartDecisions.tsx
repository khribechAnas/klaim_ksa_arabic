import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const XRaySmartDecisions = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4 md:px-0 flex flex-col md:flex-row">
        <img
          src="assets/images/xray4.png"
          className="flex-1 mr-4 hidden md:block"
        />
        <div className="flex-1 ml-0 md:ml-4 flex flex-col items-start justify-center">
          <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              Make smart <br className="block md:hidden" /> decisions
            </span>{" "}
            <br className="hidden md:block" />
            (faster <br className="block md:hidden" /> and more easily)
          </h2>
          <p className="text-[#3F465D] text-[20px] md:text-[28px] leading-[30px] md:leading-[36px] mt-4 md:mt-8">
            Klaim X-Ray gives you the insights you need to fulfill your most
            important roles—like increasing profitability, streamlining costs,
            and satisfying patients.
          </p>
          <p className="text-[#3F465D] font-semibold text-[16px] md:text-[18px] leading-[24px] mt-4 mb-8">
            That’s why Klaim X-Ray is one of our most popular solutions!
          </p>
          <ButtonPrimary title="I'm interested!" />
        </div>
        <img
          src="assets/images/xray4.png"
          className="flex-1 mt-8 block md:hidden"
        />
      </div>
    </section>
  );
};

export default XRaySmartDecisions;
