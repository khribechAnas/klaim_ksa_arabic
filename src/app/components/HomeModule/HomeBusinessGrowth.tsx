import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const HomeBusinessGrowth = () => {
  return (
    <section className="container mx-auto pt-32 pb-36">
      <h2 className="text-5xl font-semibold leading-[130%] text-[#3F465D]">
        <span className="text-linear">Unleashing</span> <br />
        business growth
      </h2>
      <div className="bg-img-linear flex my-8">
        <div className="viktor-box flex-1">
          <div className="px-8 py-7 flex items-center">
            <img src="assets/images/Growth1.svg" />
            <p className="text-white ml-8">
              Stop losing revenue <br /> due to claim denials
            </p>
          </div>
        </div>
        <div className="w-8 bg-white" />
        <div className="viktor-box flex-1">
          <div className="px-8 py-7 flex items-center">
            <img src="assets/images/Growth1.svg" />
            <p className="text-white ml-8">
              Stop losing revenue <br /> due to claim denials
            </p>
          </div>
        </div>
        <div className="w-8 bg-white" />
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
