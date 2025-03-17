import React from "react";

const AboutUsClients = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4">
      <div className="">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D]">
          Trusted by <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            100+ healthcare providers
          </span>{" "}
        </h2>
        <div className="mt-8 mb-12 md:mb-32">
          <div className="grid grid-cols-2 gap-x-12 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 items-center justify-center">
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client1.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client2.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client3.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client4.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client5.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client6.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client7.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client8.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client9.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client10.png"
                className="h-[50px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
            <h2 className="text-2xl md:text-[30px] 2xl:text-[32px] font-bold leading-[36px] md:leading-[40px] text-[#3F465D]">
              <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                Over 1,300,000
              </span>{" "}
            </h2>
            <p className="text-[18px] font-normal md:font-semibold leading-[24px] text-[#3F465D]">
              claims processed globally
            </p>
          </div>
          <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
            <h2 className="text-2xl md:text-[30px] 2xl:text-[32px] font-bold leading-[36px] md:leading-[40px] text-[#3F465D]">
              <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                {`AED 270 million`}
              </span>{" "}
            </h2>
            <p className="text-[18px] font-normal md:font-semibold leading-[24px] text-[#3F465D]">
              disbursed in claim payments
            </p>
          </div>
          <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
            <h2 className="text-2xl md:text-[30px] 2xl:text-[32px] font-bold leading-[36px] md:leading-[40px] text-[#3F465D]">
              <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                Founded in 2019
              </span>{" "}
            </h2>
            <p className="text-[18px] font-normal md:font-semibold leading-[24px] text-[#3F465D]">
              Offices in the UAE, KSA, and Oman
            </p>
          </div>
          <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
            <h2 className="text-2xl md:text-[30px] 2xl:text-[32px] font-bold leading-[36px] md:leading-[40px] text-[#3F465D]">
              <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                Honored as an
              </span>{" "}
            </h2>
            <p className="text-[18px] font-normal md:font-semibold leading-[24px] text-[#3F465D]">
              Innovative Fintech Pioneer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsClients;
