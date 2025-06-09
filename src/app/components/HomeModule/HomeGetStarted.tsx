import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const HomeGetStarted = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto flex flex-col md:flex-row px-4 pt-12 md:pt-0">
        <div className="flex-1 flex flex-col justify-center items-start mb-4 md:mb-0">
          <h2 className="text-4xl md:text-6xl font-semibold leading-[44px] leading-[70px] mb-4 md:mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              Get started now
            </span>
          </h2>
          <p className="text-[20px] md:text-[28px] leading-[30px] leading-9 text-[#3F465D] mb-8 md:mb-12">
            Get higher profits, faster growth{" "}
            <br className="block md:hidden lg:block" /> and happier patients.
          </p>
          <ButtonPrimary title="Sign up Today" href="https://portal.uae.klaim.ai" target="_blank" />
        </div>
        <div className="flex-1 flex items-center justify-center mt-0 md:mt-12">
          <img
            src="assets/images/GetStarted.png"
            className="h-[400px] md:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeGetStarted;
