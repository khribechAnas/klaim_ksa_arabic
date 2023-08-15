import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const HomeBusinessGrowth = () => {
  return (
    <section className="container mx-auto pt-12 md:pt-32 pb-12 md:pb-36 px-4 md:px-0">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          Unleashing
        </span>{" "}
        <br />
        business growth
      </h2>
      <div className="bg-img-linear flex flex-col md:flex-row my-4 md:my-8">
        <div className="viktor-box flex-1">
          <div className="px-8 py-7 flex items-center">
            <img src="assets/images/Growth1.svg" />
            <p className="text-white ml-8">
              Stop losing revenue <br /> due to claim denials
            </p>
          </div>
        </div>
        <div className="w-8 bg-white" />
        <div className="h-2 bg-white block md:hidden" />
        <div className="viktor-box flex-1">
          <div className="px-8 py-7 flex items-center">
            <img src="assets/images/Growth1.svg" />
            <p className="text-white ml-8">
              Stabilize and <br /> accelerate cash flow
            </p>
          </div>
        </div>
        <div className="w-8 bg-white" />
        <div className="h-2 bg-white block md:hidden" />
        <div className="viktor-box flex-1">
          <div className="px-8 py-7 flex items-center">
            <img src="assets/images/Growth1.svg" />
            <p className="text-white ml-8">
              Reduce RCM-related <br /> staffing costs
            </p>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <ButtonPrimary title="I’m interested!" />
      </div>
    </section>
  );
};

export default HomeBusinessGrowth;
