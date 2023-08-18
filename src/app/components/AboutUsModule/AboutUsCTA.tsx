import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";
import PlayIcon from "../CommonModule/PlayIcon";

const AboutUsCTA = () => {
  return (
    <section className="py-32 text-center">
      <h4 className="text-[32px] font-bold leading-[40px] mb-12 text-[#3F465D]">
        Interested in Klaim’s solutions <br /> for your organization?
      </h4>
      <ButtonPrimary title="Send us a message" />
    </section>
  );
};

export default AboutUsCTA;
