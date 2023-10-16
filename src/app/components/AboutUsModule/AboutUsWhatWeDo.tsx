import React from "react";

const AboutUsWhatWeDo = () => {
  return (
    <section className="bg-[#F5F7FB] py-12 md:py-32 px-4">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4 items-center">
        <img src="assets/images/about-us1.png" className="hidden xl:block" />
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D] mb-4 md:mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              What we do
            </span>
          </h2>
          <p className="text-[16px] leading-[25px] text-[#3F465D] mb-8">
            By regulation, accepted claims should be paid within 45 days after
            submission. However, according to our database, a typical cycle from
            submission preparation to claim payment takes between 60 to 90 days,
            heavily impacting healthcare facilities cash flow. On average,
            insurers take 120 days to pay 90% of submitted claims.
          </p>
          <p className="text-[16px] leading-[25px] text-[#3F465D] mb-8">
            We work to restore a balance of power between providers and
            insurance companies by converting pending claims into working
            capital within 24 hours of submission. This liberates providers to
            get back to what’s important: caring for patients.
          </p>
          <p className="text-[16px] leading-[25px] text-[#3F465D] mb-8">
            We accomplish this using an innovative combination of claim
            purchasing, user-friendly software tools, and expert done-for-you
            services. Our software tools are simple yet sophisticated and
            embrace the latest in artificial intelligence and smart automation.
          </p>
          <p className="text-[16px] leading-[25px] text-[#3F465D] mb-8">
            Our current focus is healthcare providers in the UAE and KSA. In the
            future, we anticipate expanding across the GCC and beyond.
          </p>
        </div>
        <img
          src="assets/images/about-us1.png"
          className="block xl:hidden w-full h-[450px] object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutUsWhatWeDo;
