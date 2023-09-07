import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const InspectorStartMinimizing = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto px-4 md:px-0 pt-12 md:pt-0 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h2 className="text-[2.25rem] md:text-[3.75rem] leading-[2.75rem] md:leading-[4.375rem] -tracking-[0.0675rem] md:-tracking-[0.1125rem] font-semibold md:font-bold text-[#3F465D] mb-4 md:mb-8">
            Start minimizing <br className="hidden md:block" /> lost revenue
            today
          </h2>
          <p className="text-[1.25rem] md:text-[1.75rem] leading-[1.875rem] md:leading-[2.25rem] text-[#3F465D] mb-4 md:mb-8">
            Klaim Inspector helps increase profitability and invest more in
            business growth.
          </p>
          <p className="text-[1.25rem] md:text-[1.75rem] leading-[1.875rem] md:leading-[2.25rem] text-[#3F465D] mb-4 md:mb-8">
            Our team is standing by to learn about your needs, answer your
            questions, and help you decide on your next steps.
          </p>
          <div className="py-4">
            <ButtonPrimary title="Get Started" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src="assets/images/inspector7.png" />
        </div>
      </div>
    </section>
  );
};

export default InspectorStartMinimizing;
