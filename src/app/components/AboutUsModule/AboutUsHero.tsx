import React from "react";

const AboutUsHero = () => {
  return (
    <section className="pt-[75px]">
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="flex-1 block lg:hidden flex flex-col items-start justify-center xl:px-0 px-4 pt-4 md:pt-0 md:mt-8 mb-8">
            <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] xl:leading-[70px] tracking-tighter">
              About us
            </h1>
            <p className="text-[14px] md:text-base leading-[1.5625rem] md:tracking-[0.04rem] text-[#3F465D] pr-0 sm:pr-32 md:pr-28 xl:pr-36 my-4 md:my-7">
              Klaim is an award-winning fintech company headquartered in Abu
              Dhabi Global Market (ADGM), Abu Dhabi, UAE [with offices in Dubai,
              Abu Dhabi and Riyadh]. Since 2019, we’ve been revolutionizing the
              healthcare industry by giving providers access to the working
              capital they need to grow faster and serve patients better. By
              helping providers thrive, we help patients thrive too.
            </p>
          </div>
          <div className="flex-1 block lg:hidden">
            <img
              src="assets/images/about-hero.png"
              className="h-[250px] w-full sm:h-[500px] object-cover"
            />
          </div>
          <div
            className="flex-1 hidden lg:block overflow-hidden"
            style={{
              backgroundImage: "url('assets/images/about-hero-xl.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "80%",
            }}
          >
            <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 h-full">
              <div className="flex flex-col items-start justify-center px-4 md:px-0 lg:pl-4 pt-16 md:pt-0 lg:my-36">
                <h1 className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[3.75rem] xl:leading-[4.375rem] -tracking-[0.1124rem]">
                  About us
                </h1>
                <p className="text-[14px] md:text-base leading-[1.5625rem] text-[#3F465D] mr-0 md:pr-[550px] xl:pr-28 my-4 md:my-7">
                  Klaim is an award-winning fintech company headquartered in Abu
                  Dhabi Global Market (ADGM), Abu Dhabi, UAE [with offices in
                  Dubai, Abu Dhabi and Riyadh]. Since 2019, we’ve been
                  revolutionizing the healthcare industry by giving providers
                  access to the working capital they need to grow faster and
                  serve patients better. By helping providers thrive, we help
                  patients thrive too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
