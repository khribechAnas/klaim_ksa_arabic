import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";
import ButtonSecondary from "../CommonModule/ButtonSecondary";

const HomeSolutions = () => {
  return (
    <section className="bg-[#F5F7FB] py-12 md:py-32 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-6xl font-semibold leading-[120%] md:leading-[70px] mb-4 md:mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            Explore our solutions
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="py-8 px-8 md:py-12 md:px-16 rounded-lg bg-white">
            <div className="flex items-center mb-8">
              <img src="assets/images/Solution1.svg" />
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] text-[24px] md:text-[42px] font-bold leading-[36px] md:leading-[130%] ml-8">
                Klaim KAPITAL
              </h3>
            </div>
            <h4 className="text-[20px] md:text-[32px] text-[#3F465D] font-bold leading-[30px] md:leading-10 mb-4">
              24-Hour Claim Payments <br /> (No Loans Required)
            </h4>
            <p className="text-[18px] md:text-[22px] text-[#3F465D] leading-[26px] leading-[30px] mb-8">
              Get claim payments in 24 hours instead of 45+ days.
            </p>
            <div className="flex items-center">
              <ButtonPrimary title="I’m interested!" />
              <ButtonSecondary title="See more" />
            </div>
          </div>
          <div className="py-8 px-8 md:py-12 md:px-16 rounded-lg bg-white">
            <div className="flex items-center mb-8">
              <img src="assets/images/Solution2.svg" />
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] text-[24px] md:text-[42px] font-bold leading-[36px] md:leading-[130%] ml-8">
                Klaim ELIGIBLE
              </h3>
            </div>
            <h4 className="text-[20px] md:text-[32px] text-[#3F465D] font-bold leading-[30px] md:leading-10 mb-4">
              Automated Eligibility Checking
            </h4>
            <p className="text-[18px] md:text-[22px] text-[#3F465D] leading-[26px] leading-[30px] mb-8">
              Check patient eligibility on 94% of insurance <br /> portals, all
              at once.
            </p>
            <div className="flex items-center">
              <ButtonPrimary title="I’m interested!" />
              <ButtonSecondary title="See more" />
            </div>
          </div>
          <div className="py-8 px-8 md:py-12 md:px-16 rounded-lg bg-white">
            <div className="flex items-center mb-8">
              <img src="assets/images/Solution3.svg" />
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] text-[24px] md:text-[42px] font-bold leading-[36px] md:leading-[130%] ml-8">
                Klaim INSPECTOR
              </h3>
            </div>
            <h4 className="text-[20px] md:text-[32px] text-[#3F465D] font-bold leading-[30px] md:leading-10 mb-4">
              Smart Claim Analysis
            </h4>
            <p className="text-[18px] md:text-[22px] text-[#3F465D] leading-[26px] leading-[30px] mb-8">
              Quickly resolve claim issues before submission and dramatically
              reduce your claim rejection rate.
            </p>
            <div className="flex items-center">
              <ButtonPrimary title="I’m interested!" />
              <ButtonSecondary title="See more" />
            </div>
          </div>
          <div className="py-8 px-8 md:py-12 md:px-16 rounded-lg bg-white">
            <div className="flex items-center mb-8">
              <img src="assets/images/Solution1.svg" />
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] text-[24px] md:text-[42px] font-bold leading-[36px] md:leading-[130%] ml-8">
                Klaim X-RAY
              </h3>
            </div>
            <h4 className="text-[20px] md:text-[32px] text-[#3F465D] font-bold leading-[30px] md:leading-10 mb-4">
              Real-Time Reporting
            </h4>
            <p className="text-[18px] md:text-[22px] text-[#3F465D] leading-[26px] leading-[30px] mb-8">
              Make confident data-driven decisions for faster growth and fewer
              wrong turns.
            </p>
            <div className="flex items-center">
              <ButtonPrimary title="I’m interested!" />
              <ButtonSecondary title="See more" />
            </div>
          </div>
        </div>
        {/* <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] leading-[130%] text-[#3F465D] mb-4 md:mb-8">
          Or get our <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            all-in-one solution...
          </span>
        </h2>
        <div className="px-8 md:px-24 py-12 bg-linear rounded-lg text-white flex flex-col md:flex-row items-center">
          <div>
            <div className="flex items-center justify-center mb-12">
              <img src="assets/images/Allin1.svg" />
              <img src="assets/images/Allin2.svg" className="mx-12" />
              <img src="assets/images/Allin3.svg" />
            </div>
            <div className="flex items-center justify-center">
              <img src="assets/images/Allin4.svg" className="mr-12" />
              <img src="assets/images/Allin5.svg" />
            </div>
          </div>
          <div className="ml-0 md:ml-24 mt-8 md:mt-0">
            <h4 className="leading-[36px] md:leading-[130%] text-[24px] md:text-[42px] font-bold mb-4 md:mb-8">
              RCM 2.0
            </h4>
            <p className="text-[20px] md:text-[32px] font-bold leading-[30px] leading-10 mb-4">
              Comprehensive Cash Flow Solution
            </p>
            <p className="leading-[26px] md:leading-[30px] text-[18px] md:text-[22px] mb-8">
              It’s time to stop managing and start mastering your revenue cycle.
            </p>
            <div className="flex items-center">
              <a className="bg-white text-[#6135FB] rounded-lg py-4 px-6 text-sm md:text-lg font-bold leading-4 tracking-tighter">
                I’m interested!
              </a>
              <div className="flex items-center py-4 px-4 md:px-6 ml-2">
                <a className="rounded-lg  text-white text-sm md:text-lg font-bold leading-4 tracking-tighter">
                  See more
                </a>
                <img
                  src="assets/images/Vector1-white.svg"
                  className="ml-2 text-white"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HomeSolutions;
