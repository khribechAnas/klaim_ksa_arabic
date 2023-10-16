import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const HomeBusinessGrowth = () => {
  return (
    <section className="container mx-auto pt-12 md:pt-32 pb-12 md:pb-36 px-4">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          Unleashing
        </span>{" "}
        <br />
        business growth
      </h2>
      <div className="bg-img-linear flex flex-col lg:flex-row my-4 md:my-8">
        <div className="viktor-box flex-1">
          <div className="px-8 py-7 flex items-center h-full">
            <img src="assets/images/Growth1.svg" />
            <p className="text-white ml-8">
              Stop losing revenue <br className="hidden 2xl:block" /> due to
              claim denials
            </p>
          </div>
        </div>
        <div className="w-8 bg-white" />
        <div className="h-2 bg-white block lg:hidden" />
        <div className="viktor-box flex-1">
          <div className="px-8 py-7 flex items-center h-full">
            <img src="assets/images/Growth2.svg" />
            <p className="text-white ml-8">
              Stabilize and accelerate <br className="hidden 2xl:block" /> cash
              flow
            </p>
          </div>
        </div>
        <div className="w-8 bg-white" />
        <div className="h-2 bg-white block lg:hidden" />
        <div className="viktor-box flex-1">
          <div className="px-8 py-7 flex items-center h-full">
            <img src="assets/images/Growth3.svg" />
            <p className="text-white ml-8">
              Reduce RCM-related <br className="hidden 2xl:block" /> staffing
              costs
            </p>
          </div>
        </div>
        <div className="w-1 bg-white hidden md:block 2xl:hidden" />
      </div>
      <div className="pt-4">
        <ButtonPrimary title="I’m interested!" href="/contact" />
      </div>
    </section>
  );
};

export default HomeBusinessGrowth;
