import React from "react";

const HomeCardBanner = () => {
  return (
    <section className="bg-linear py-16">
      <div className="flex items-center justify-center">
        <div className="px-6 py-4 text-white border-[3px] rounded-lg flex flex-col items-center justify-center w-56">
          <img src="assets/images/Banner1.svg" />
          <p className="text-lg font-semibold leading-6">Responsive </p>
          <p className="text-lg font-semibold leading-6">Support</p>
        </div>
        <div className="px-6 py-4 text-white border-[3px] rounded-lg flex flex-col items-center justify-center w-56 mx-4">
          <img src="assets/images/Banner1.svg" />
          <p className="text-lg font-semibold leading-6">Fast</p>
          <p className="text-lg font-semibold leading-6">Onboarding</p>
        </div>
        <div className="px-6 py-4 text-white border-[3px] rounded-lg flex flex-col items-center justify-center w-56">
          <img src="assets/images/Banner1.svg" />
          <p className="text-lg font-semibold leading-6">Advanced Data</p>
          <p className="text-lg font-semibold leading-6">Security</p>
        </div>
      </div>
    </section>
  );
};

export default HomeCardBanner;
