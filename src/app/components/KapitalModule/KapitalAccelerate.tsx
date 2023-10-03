import React from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";

const KapitalAccelerate = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="flex items-center justify-start hidden xl:flex">
            <img src="assets/images/kapital6.png" />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold leading-[2.75rem] md:leading-[4.375rem] text-[#3F465D]">
              <span className="bg-clip-text text-transparent leading-[2.75rem] md:leading-[4.375rem] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                Accelerate your growth
              </span>{" "}
              <br className="hidden md:block" />
              with reliable cash flow
            </h2>
            <p className="mt-4 md:mt-8 text-[#3F465D] text-[1.25rem] md:text-[1.75rem] leading-[1.875rem] md:leading-[2.25rem]">
              To get started, let us know you&apos;re interested.
            </p>
            <p className="mt-4 md:mt-8 text-[#3F465D] text-[1.25rem] md:text-[1.75rem] leading-[1.875rem] md:leading-[2.25rem]">
              We&apos;ll learn more about your goals, answer your questions, and
              help you decide what to do next.
            </p>
            <div className="py-4 mt-8 md:mt-8">
              <ButtonPrimary title="Get a call back" />
            </div>
          </div>
          <div className="flex items-center justify-start block xl:hidden mt-12">
            <img
              src="assets/images/kapital6.png"
              className="w-full h-[391px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KapitalAccelerate;
