import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const RcmInterestedIn = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto px-4 grid grid-cols-2 pt-8">
        <div className="flex items-center justify-center">
          <img src="assets/images/rcm-2.png" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-[2.75rem] md:leading-[4.375rem] text-[#3F465D]">
            Interested in RCM 2.0
            <br />
            <span className="bg-clip-text text-transparent leading-[2.75rem] md:leading-[4.375rem] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              for your business?
            </span>{" "}
          </h2>
          <p className="text-[#3F465D] text-[1.75rem] leading-[2.25rem] my-8">
            It’s time to go from revenue cycle management to revenue cycle
            mastery.
          </p>
          <div className="py-4">
            <ButtonPrimary title="I'm interested!" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RcmInterestedIn;
