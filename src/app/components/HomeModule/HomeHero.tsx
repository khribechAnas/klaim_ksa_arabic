import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";
import ButtonSecondary from "../CommonModule/ButtonSecondary";

const HomeHero = () => {
  return (
    <section className="pt-[74px] ">
      <div className="flex container mx-auto">
        <div className="flex-1 flex flex-col justify-center h-[600px]">
          <div>
            <img src="assets/images/dhcc2-1.png" />
            <h3 className="text-lg font-semibold leading-6 text-[#6135FB]">
              OFFICIAL PARTNERS
            </h3>
            <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[70px] tracking-tighter mt-8 mb-7">
              You take care of your <br /> patients, we take care of
              <br />
              <span className="text-linear">your cash flow</span>
            </h1>
            <div className="flex items-center">
              <ButtonPrimary title="See What's Inside" />
              <ButtonSecondary title="Get Started Now" />
            </div>
          </div>
        </div>
        {/* <div className="flex-1 relative">
          <img
            src="assets/images/Hero_purple.svg"
            className="absolute bottom-4 -right-48"
          />
          <img
            src="assets/images/Hero_green.svg"
            className="absolute bottom-28 -right-24"
          />
          <img
            src="assets/images/Homepage_Hero.png"
            className="absolute bottom-0 -right-24"
          />
        </div> */}
      </div>
      <div className="bg-linear px-4 md:px-16 py-8 md:py-0 grid grid-cols-2 gap-4 md:flex items-center justify-center md:justify-between">
        <img src="assets/images/hero1.png" className="py-0 md:py-2" />
        <img src="assets/images/hero2.png" className="py-0 md:py-2" />
        <img src="assets/images/hero3.png" className="py-0 md:py-2" />
        <img src="assets/images/hero4.png" className="py-0 md:py-2" />
        <img src="assets/images/hero5.png" className="py-0 md:py-2" />
        <img src="assets/images/hero6.png" className="py-0 md:py-2" />
        <img src="assets/images/hero7.png" className="py-0 md:py-2" />
        <img src="assets/images/hero8.png" className="py-0 md:py-2" />
      </div>
    </section>
  );
};

export default HomeHero;
