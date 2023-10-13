import React from "react";
import ButtonWhite from "../CommonModule/ButtonWhite";

const InspectorTheResult = () => {
  return (
    <section className="py-8 text-center text-white bg-linear px-4">
      <h3 className="leading-[2.4rem] md:leading-[3.4125rem] font-bold text-[2rem] md:text-[2.625rem] mb-2">
        The result?
      </h3>
      <p className="text-[1.25rem] leading-[1.875rem] md:text-[1.75rem] md:leading-[2.25rem] mb-8">
        Higher revenues, reliable cash flow, and lower operational costs.
      </p>
      <div className="py-4">
        <ButtonWhite title="I'm interested!" href="/contact" />
      </div>
    </section>
  );
};

export default InspectorTheResult;
