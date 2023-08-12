import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const HomeGetStarted = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto flex">
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="text-6xl font-semibold leading-[70px] mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              Get started NOW
            </span>
          </h2>
          <p className="text-[28px] leading-9 text-[#3F465D] mb-12">
            Get higher profits, faster growth <br /> and happier patients.
          </p>
          <ButtonPrimary title="I'm interested" />
        </div>
        <div className="flex-1">
          <img src="assets/images/GetStarted.png" />
        </div>
      </div>
    </section>
  );
};

export default HomeGetStarted;
