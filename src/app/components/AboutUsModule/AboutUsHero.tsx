import React from "react";

const AboutUsHero = () => {
  return (
    <section className="pt-[74px]">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-[400px] md:h-auto"></div>
          <div className="relative">
            <img src="assets/images/about-hero.png" className="" />
            <div className="bg-gradient-to-r from-white to-[rgba(255, 255, 255, 0.52)] absolute top-0 bottom-0 left-0 w-[50%] hidden md:block" />
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 absolute left-0 right-0 top-0 bottom-0">
          <div className="flex flex-col items-start justify-center md:px-0 px-4 pt-16 md:pt-0 h-[360px] md:h-auto">
            <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[70px] tracking-tighter mb-4 md:mb-7">
              About us
            </h1>
            <p className="text-[18px] leading-[25px] text-[#3F465D] mr-0 md:pr-36">
              Klaim is an award-winning fintech company headquartered in Abu
              Dhabi Global Market (ADGM), Abu Dhabi, UAE [with offices in Dubai,
              Abu Dhabi and Riyadh]. Since 2019, we’ve been revolutionizing the
              healthcare industry by giving providers access to the working
              capital they need to grow faster and serve patients better. By
              helping providers thrive, we help patients thrive too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
