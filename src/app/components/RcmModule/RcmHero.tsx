import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const RcmHero = () => {
  return (
    <section className="h-auto pt-[75px]">
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="flex-1 block xl:hidden flex flex-col items-start justify-center px-4 pt-4 md:pt-0 lg:my-12 xl:my-0">
            <p className="text-[#6135FB] leading-[1.5rem] text-[16px] md:text-lg font-semibold">
              RCM 2.0
            </p>
            <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[70px] tracking-tighter">
              Comprehensive Cash Flow Solution to <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] ml-0 xl:ml-3 2xl:ml-0">
                Boost Profitability.
              </span>
            </h1>
            <p className="text-[14px] md:text-base leading-[1.5625rem] text-[#3F465D] mr-0 md:pr-36 my-4 md:my-7">
              Klaim All-in-One gives you access to 48-hour claim payments,
              user-friendly management tools, and a robust RCM team. Click the
              button below to connect with us.
            </p>
            <ButtonPrimary title="I'm interested!" />
          </div>
          <div className="flex-1 block xl:hidden mt-4 lg:mt-0">
            <img
              src="assets/images/rcm-hero-mobile.png"
              className="w-full lg:h-full object-cover"
            />
          </div>
          <div
            className="flex-1 hidden xl:block"
            style={{
              backgroundImage: "url('assets/images/rcm-hero.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="container mx-auto grid grid-cols-2 h-full px-4">
              <div className="flex flex-col items-start justify-center md:px-0 px-4 pt-16 md:pt-0 my-0 md:my-32">
                <p className="text-[#6135FB] leading-[1.5rem] text-[16px] md:text-lg font-semibold">
                  RCM 2.0
                </p>
                <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[70px] tracking-tighter">
                  Comprehensive Cash <br /> Flow Solution to <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] ml-0 xl:ml-3 2xl:ml-0">
                    Boost Profitability.
                  </span>
                </h1>
                <p className="text-[14px] md:text-base leading-[1.5625rem] text-[#3F465D] my-4 md:my-7">
                  Klaim All-in-One gives you access to 48-hour claim <br />{" "}
                  payments, user-friendly management tools, and a robust RCM
                  <br /> team. Click the button below to connect with us.
                </p>
                <ButtonPrimary title="I'm interested!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RcmHero;
