import React from "react";

const AboutUsClients = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4 md:px-0">
      <div className="">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
          Trusted by <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            40+ healthcare providers
          </span>{" "}
        </h2>
        <div className="mt-4 md:mt-8 mb-32">
          <div className="grid grid-cols-2 gap-4 items-center justify-center md:flex md:flex-row md:justify-between">
            <img src="assets/images/client1.png" />
            <img src="assets/images/client2.png" />
            <img src="assets/images/client3.png" />
            <img src="assets/images/client4.png" />
          </div>
          <div className="grid grid-cols-2 gap-4 items-center justify-center md:flex md:flex-row md:justify-between mt-8">
            <img src="assets/images/client5.png" />
            <img src="assets/images/client6.png" />
            <img src="assets/images/client7.png" />
            <img src="assets/images/client8.png" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
            <h2 className="text-3xl md:text-[32px] font-bold leading-[40px] text-[#3F465D]">
              <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                150,000+
              </span>{" "}
            </h2>
            <p className="text-[18px] font-semibold leading-[24px]">
              claims accelerated
            </p>
          </div>
          <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
            <h2 className="text-3xl md:text-[32px] font-bold leading-[40px] text-[#3F465D]">
              <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                {`$ {x} milion`}
              </span>{" "}
            </h2>
            <p className="text-[18px] font-semibold leading-[24px]">
              in claim payments
            </p>
          </div>
          <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
            <p className="text-[18px] font-semibold leading-[24px]">
              Established in
            </p>
            <h2 className="text-3xl md:text-[32px] font-bold leading-[40px] text-[#3F465D]">
              <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                2019
              </span>{" "}
            </h2>
          </div>
          <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
            <h2 className="text-3xl md:text-[32px] font-bold leading-[40px] text-[#3F465D]">
              <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                Award-winning
              </span>{" "}
            </h2>
            <p className="text-[18px] font-semibold leading-[24px]">team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsClients;
