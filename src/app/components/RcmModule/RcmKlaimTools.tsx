import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const RcmKlaimTools = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[2.25rem] md:leading-[3.9rem] text-[#3F465D] mb-4 md:mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          Klaim tools
        </span>
        <br />
        vs. alternatives
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-8">
        <div className="text-[#3F465D]">
          <div className="flex items-center bg-[#F5F7FB] px-6 py-4 rounded-t-lg mb-2">
            <img src="assets/images/rcm-icon6.svg" />
            <h3 className="ml-7 text-[1.5rem] leading-[2.25rem] md:text-[2rem] md:leading-[2.5rem] font-bold">
              Klaim Eligible
            </h3>
          </div>
          <div className="flex items-center bg-[#F5F7FB] px-6 py-4 rounded-b-lg">
            <p className="text-[1.125rem] leading-[1.625rem] md:text-[1.375rem] md:leading-[1.875rem]">
              Klaim Eligible is the only available tool that integrates with 94%
              of insurance portals.
            </p>
          </div>
        </div>
        <div className="text-[#3F465D]">
          <div className="flex items-center bg-[#F5F7FB] px-6 py-4 rounded-t-lg mb-2">
            <img src="assets/images/rcm-icon7.svg" />
            <h3 className="ml-7 text-[1.5rem] leading-[2.25rem] md:text-[2rem] md:leading-[2.5rem] font-bold">
              Klaim Inspector
            </h3>
          </div>
          <div className="flex items-center bg-[#F5F7FB] px-6 py-4 rounded-b-lg">
            <p className="text-[1.125rem] leading-[1.625rem] md:text-[1.375rem] md:leading-[1.875rem]">
              Beyond detecting data-filling errors, Klaim Inspector is the only
              tool that performs medical necessity checks.
            </p>
          </div>
        </div>
        <div className="text-[#3F465D]">
          <div className="flex items-center bg-[#F5F7FB] px-6 py-4 rounded-t-lg mb-2">
            <img src="assets/images/rcm-icon8.svg" />
            <h3 className="ml-7 text-[1.5rem] leading-[2.25rem] md:text-[2rem] md:leading-[2.5rem] font-bold">
              Klaim X-Ray
            </h3>
          </div>
          <div className="flex items-center bg-[#F5F7FB] px-6 py-4 rounded-b-lg">
            <p className="text-[1.125rem] leading-[1.625rem] md:text-[1.375rem] md:leading-[1.875rem]">
              The alternative to Klaim X-Ray is manual “spreadsheet reporting,”
              which is highly unreliable.
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 text-center">
        <ButtonPrimary title="I'm interested!" />
      </div>
    </section>
  );
};

export default RcmKlaimTools;
