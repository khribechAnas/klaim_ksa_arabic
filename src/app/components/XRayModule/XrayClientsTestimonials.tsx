import React from "react";
import SlickSlider from "../CommonModule/SlickSlider";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const XrayClientsTestimonials = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4 md:px-0">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
        Trusted by <br className="hidden md:block" />
        <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          40+ healthcare providers
        </span>{" "}
        <br />
        in the UAE and KSA
      </h2>
      <div className="mt-8 mb-12 md:mb-32">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
          <p className="text-[18px] font-normal md:font-semibold leading-[24px] text-[#3F465D]">
            Established in
          </p>
          <h2 className="text-2xl md:text-[32px] font-bold leading-[36px] md:leading-[40px] text-[#3F465D]">
            <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              2019
            </span>{" "}
          </h2>
        </div>
        <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
          <h2 className="text-2xl md:text-[32px] font-bold leading-[36px] md:leading-[40px] text-[#3F465D]">
            <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              Award-winning
            </span>{" "}
          </h2>
          <p className="text-[18px] font-normal md:font-semibold leading-[24px] text-[#3F465D]">
            team
          </p>
        </div>
        <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
          <p className="text-[18px] font-normal md:font-semibold leading-[24px] text-[#3F465D]">
            Offices in the
          </p>
          <h2 className="text-2xl md:text-[32px] font-bold leading-[36px] md:leading-[40px] text-[#3F465D]">
            <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              UAE, KSA, and Oman
            </span>{" "}
          </h2>
        </div>
      </div>
      <div className="relative mb-16">
        <SlickSlider />
        <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-white to-[rgba(255, 255, 255, 0.52)] w-[33%] lg:block hidden" />
      </div>
      <div className="text-center py-4">
        <ButtonPrimary title="I'm interested!" />
      </div>
    </section>
  );
};

export default XrayClientsTestimonials;
