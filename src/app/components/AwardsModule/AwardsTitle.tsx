import React from "react";

const AwardsTitle = () => {
  return (
    <section className="pt-[74px] container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] leading-[130%] text-[#3F465D] mb-4 md:mb-8 mt-14 text-center">
        Some of our
        <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          awards
        </span>
      </h2>
      <p className="text-[#696F81] text-[20px] md:text-[28px] leading-[30px] md:leading-9 text-[#3F465D] text-center">
        Untitled is growing fast, and we are always looking for passionate,
        dynamic, and talented individuals to join our distributed team all
        around the world.
      </p>
    </section>
  );
};

export default AwardsTitle;
