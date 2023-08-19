import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const AboutUsCTA = () => {
  return (
    <section className="pt-8 pb-12 md:pt-32 md:pb-32 px-4 md:px-0 text-center">
      <h4 className="text-[24px] md:text-[32px] font-bold leading-[36px] md:leading-[40px] mb-12 text-[#3F465D]">
        Interested in Klaim’s solutions <br /> for your organization?
      </h4>
      <ButtonPrimary title="Send us a message" />
    </section>
  );
};

export default AboutUsCTA;
