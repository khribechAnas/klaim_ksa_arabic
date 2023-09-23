import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const EligibleReadyFor = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h2 className="text-[2.25rem] md:text-[3.75rem] font-semibold xl:font-bold leading-[2.75rem] xl:leading-[4.375rem] -tracking-[0.0675] xl:-tracking-[0.1125rem] text-[#3F465D] mb-8">
              Ready for <br className="hidden md:block" />
              <span className="mr-2 lg:mr-0 bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                happier patients
              </span>
              <br className="hidden lg:block" />
              and
              <br className="block lg:hidden" />
              <span className="ml-2 bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                reliable cash flow?
              </span>
            </h2>
            <p className="text-[#3F465D] text-[1.25rem] xl:text-[1.75rem] leading-[1.875rem] xl:leading-[2.25rem] mb-8 pr-8">
              Our team is standing by to connect with you, answer your
              questions, and help you decide on your next steps.
            </p>
            <p className="text-[#3F465D] text-[1.25rem] xl:text-[1.75rem] leading-[1.875rem] xl:leading-[2.25rem] mb-8 pr-8">
              You may be surprised how quickly you can implement Klaim Eligible
              in your business.
            </p>
            <div className="py-4">
              <ButtonPrimary title="Get a call back" />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <img
              src="assets/images/eligible-1.png"
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibleReadyFor;
