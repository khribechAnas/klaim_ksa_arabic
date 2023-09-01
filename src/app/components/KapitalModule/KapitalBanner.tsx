import React from "react";

const KapitalBanner = () => {
  return (
    <section className="px-6 md:px-0 py-8 md:py-16 text-center text-white bg-linear">
      <p className="leading-[2.25rem] md:leading-10 font-bold text-[1.5rem] md:text-[2rem]">
        Healthcare providers wait up to 30 days{" "}
        <br className="hidden md:block" /> and longer for claim payments.
      </p>
    </section>
  );
};

export default KapitalBanner;
