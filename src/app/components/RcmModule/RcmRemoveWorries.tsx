import React from "react";
import ButtonWhite from "../CommonModule/ButtonWhite";

const RcmRemoveWorries = () => {
  return (
    <section className="px-6 md:px-0 py-8 md:py-16 text-center text-white bg-linear">
      <p className="leading-[2.25rem] md:leading-10 font-bold text-[1.5rem] md:text-[2rem] mb-8">
        Remove worries and focus
        <br className="hidden md:block" />
        on growing your business.
      </p>
      <div className="py-4">
        <ButtonWhite />
      </div>
    </section>
  );
};

export default RcmRemoveWorries;
