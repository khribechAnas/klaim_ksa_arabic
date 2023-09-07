import React from "react";

const InspectorClaimDenials = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4 md:px-0">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D] mb-8">
        86% of claim denials <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          are avoidable*
        </span>
      </h2>
      <div className="flex md:flex-row flex-col-reverse">
        <div className="flex-1 text-[#3F465D] mr-0 md:mr-2">
          <p className="text-[1.25rem] leading-[1.875rem] md:text-[1.75rem] md:leading-[2.25rem]">
            So we created an easy-to-use tool <br /> called Klaim Inspector
            that:
          </p>
          <div className="flex items-center bg-[#F5F7FB] px-6 py-4 rounded-lg mr-0 md:mr-[1.66rem] mt-8">
            <img src="assets/images/inspector3.svg" />
            <p className="ml-6 text-[1.125rem] leading-[1.625rem] md:text-[1.375rem] md:leading-[1.875rem]">
              Scans claims for mistakes
            </p>
          </div>
          <div className="flex items-center bg-[#F5F7FB] px-6 py-4 rounded-lg mr-0 md:mr-[1.66rem] my-2">
            <img src="assets/images/inspector4.svg" />
            <p className="ml-6 text-[1.125rem] leading-[1.625rem] md:text-[1.375rem] md:leading-[1.875rem]">
              Recommends fixes and adjustments
            </p>
          </div>
          <div className="flex items-center bg-[#F5F7FB] px-6 py-4 rounded-lg mr-0 md:mr-[1.66rem] mb-8">
            <img src="assets/images/inspector5.svg" />
            <p className="ml-6 text-[1.125rem] leading-[1.625rem] md:text-[1.375rem] md:leading-[1.875rem]">
              Predicts acceptance likelihood as a percentage
            </p>
          </div>
          <p className="text-[#3F465D] font-normal text-[0.875rem] leading-[1.125rem]">
            *These figures are based on{" "}
            <span className="underline text-[#6135FB]">
              <a
                href="https://www.entrepreneur.com/en-ae/technology/enabling-efficiency-dubai-based-klaim-is-helping-menas/424499"
                target="_blank"
              >
                internal research as reported by Entrepreneur Middle East.
              </a>
            </span>
          </p>
        </div>
        <div className="flex-1 ml-0 md:ml-2 flex items-center justify-center mb-8 md:mb-0">
          <img src="assets/images/inspector2.png" />
        </div>
      </div>
    </section>
  );
};

export default InspectorClaimDenials;
