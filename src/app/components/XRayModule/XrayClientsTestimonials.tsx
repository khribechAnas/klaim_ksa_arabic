import React from "react";
import SlickSlider from "../CommonModule/SlickSlider";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const XrayClientsTestimonials = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
        Trusted by <br className="hidden md:block" />
        <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          40+ healthcare providers
        </span>{" "}
        <br />
        in the UAE and KSA
      </h2>
      <div className="mt-8 mb-12 xl:mb-32">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12 md:mb-16">
        <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
          <p className="text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] text-[#3F465D]">
            Established in
          </p>
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold leading-[2.25rem] md:leading-[2.5rem] text-[#3F465D]">
            <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              2019
            </span>{" "}
          </h2>
        </div>
        <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold leading-[2.25rem] md:leading-[2.5rem] text-[#3F465D]">
            <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              Award-winning
            </span>{" "}
          </h2>
          <p className="text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] text-[#3F465D]">
            team
          </p>
        </div>
        <div className="px-6 py-4 bg-[#F5F7FB] rounded-lg">
          <p className="text-[1.125rem] md:text-[1.375rem] leading-[1.625rem] md:leading-[1.875rem] text-[#3F465D]">
            Offices in the
          </p>
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold leading-[2.25rem] md:leading-[2.5rem] text-[#3F465D]">
            <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              UAE, KSA, and Oman
            </span>{" "}
          </h2>
        </div>
      </div>
      {/* <div className="relative mb-8 md:mb-16">
        <SlickSlider />
        <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-white to-[rgba(255, 255, 255, 0.52)] w-[33%] lg:block hidden" />
      </div> */}
      <div className="text-center py-4">
        <ButtonPrimary title="I'm interested!" href="/contact" />
      </div>
    </section>
  );
};

export default XrayClientsTestimonials;
