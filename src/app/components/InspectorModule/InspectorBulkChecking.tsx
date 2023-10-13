import React from "react";
import ButtonWhite from "../CommonModule/ButtonWhite";

const InspectorBulkChecking = () => {
  return (
    <section className="bg-[#3F465D]">
      <div className="container mx-auto py-12 md:py-32 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D]">
          <span className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-[#5186d9] to-[#42d9b7]">
            Bulk checking and more
          </span>
        </h2>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 my-4 md:my-8">
          <div className="px-8 py-7 bg-[#323748] rounded-lg">
            <h4 className="text-[1.5rem] md:text-[2rem] font-bold leading-[2.25rem] md:leading-[2.5rem] mb-2">
              Bulk claim checking
            </h4>
            <p className="text-[1.125rem] leading-[1.625rem] md:text-[1.375rem] md:leading-[1.875rem]">
              Processing speeds surpassing industry standards
            </p>
          </div>
          <div className="px-8 py-7 bg-[#323748] rounded-lg">
            <h4 className="text-[1.5rem] md:text-[2rem] font-bold leading-[2.25rem] md:leading-[2.5rem] mb-2">
              Claim <br className="hidden md:block" /> scrubber
            </h4>
            <p className="text-[1.125rem] leading-[1.625rem] md:text-[1.375rem] md:leading-[1.875rem]">
              Finds missing data in seconds
            </p>
          </div>
          <div className="px-8 py-7 bg-[#323748] rounded-lg">
            <h4 className="text-[1.5rem] md:text-[2rem] font-bold leading-[2.25rem] md:leading-[2.5rem] mb-2">
              Download <br className="hidden md:block" /> reports
            </h4>
            <p className="text-[1.125rem] leading-[1.625rem] md:text-[1.375rem] md:leading-[1.875rem]">
              With denial reasons, risk scores, and more
            </p>
          </div>
          <div className="px-8 py-7 bg-[#323748] rounded-lg">
            <h4 className="text-[1.5rem] md:text-[2rem] font-bold leading-[2.25rem] md:leading-[2.5rem] mb-2">
              Rule <br className="hidden md:block" /> engine
            </h4>
            <p className="text-[1.125rem] leading-[1.625rem] md:text-[1.375rem] md:leading-[1.875rem]">
              Cross references data with medical and coding rules
            </p>
          </div>
        </div>
        {/* <div className="py-4 mt-8 md:mt-0">
          <ButtonWhite title="Learn More" />
        </div> */}
      </div>
    </section>
  );
};

export default InspectorBulkChecking;
