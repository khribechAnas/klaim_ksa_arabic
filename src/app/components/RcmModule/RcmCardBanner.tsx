import React from "react";

const RcmCardBanner = () => {
  return (
    <section className="bg-linear py-8 md:py-16 px-4 md:px-0">
      <div className="flex flex-wrap items-center justify-center">
        <div className="px-2 md:px-6 py-4 text-white border-[3px] rounded-lg flex flex-col items-center justify-center w-56">
          <img src="assets/images/Banner1.svg" className="mb-4" />
          <p className="text-base md:text-lg font-semibold leading-6">
            Responsive{" "}
          </p>
          <p className="text-base md:text-lg font-semibold leading-6">
            Support
          </p>
        </div>
        <div className="px-2 md:px-6 py-4 text-white border-[3px] rounded-lg flex flex-col items-center justify-center w-56 mx-2 md:mx-4 xl:mx-16 my-2 md:my-0">
          <img src="assets/images/Banner2.svg" className="mb-4" />
          <p className="text-base md:text-lg font-semibold leading-6">Fast</p>
          <p className="text-base md:text-lg font-semibold leading-6">
            Onboarding
          </p>
        </div>
        <div className="px-2 md:px-6 py-4 text-white border-[3px] rounded-lg flex flex-col items-center justify-center w-56">
          <img src="assets/images/Banner3.svg" className="mb-4" />
          <p className="text-base md:text-lg font-semibold leading-6 text-center">
            Advanced Data
          </p>
          <p className="text-base md:text-lg font-semibold leading-6">
            Security
          </p>
        </div>
      </div>
    </section>
  );
};

export default RcmCardBanner;
