import React from "react";

const HomeHero = () => {
  return (
    <div className=" h-screen pt-[92px] flex flex-col">
      <div className="flex container mx-auto bg-red-200 flex-1">
        <div className="flex-1 flex flex-col justify-center">
          <div>
            <img src="assets/images/dhcc2-1.png" />
            <h3 className="text-lg font-semibold leading-6 text-[#6135FB]">
              OFFICIAL PARTNERS
            </h3>
            <h1 className="text-6xl font-semibold leading-[70px] tracking-tighter mt-8 mb-7">
              You take care of your <br /> patients, we take care of
              <br />
              <span className="text-linear">your cash flow</span>
            </h1>
            <div className="flex items-center">
              <a className="bg-[#6135FB] text-white rounded-lg py-4 px-6 text-lg font-bold leading-4 tracking-tighter">
                See What's Inside
              </a>
              <div className="flex items-center py-4 px-6">
                <a className="rounded-lg  text-[#6135FB] text-lg font-bold leading-4 tracking-tighter">
                  Get Started Now
                </a>
                <img src="assets/images/Vector1.svg" className="ml-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <img src="assets/images/Homepage_Hero.png" className="absolute" />
        </div>
      </div>
      <div className="bg-linear px-16 flex items-center justify-between">
        <img src="assets/images/hero1.png" className="py-2" />
        <img src="assets/images/hero2.png" className="py-2" />
        <img src="assets/images/hero3.png" className="py-2" />
        <img src="assets/images/hero4.png" className="py-2" />
        <img src="assets/images/hero5.png" className="py-2" />
        <img src="assets/images/hero6.png" className="py-2" />
        <img src="assets/images/hero7.png" className="py-2" />
        <img src="assets/images/hero8.png" className="py-2" />
      </div>
    </div>
  );
};

export default HomeHero;
