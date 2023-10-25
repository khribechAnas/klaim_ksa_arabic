import React from "react";

const NewsCTA = () => {
  return (
    <div className="pt-20 pb-32 w-full lg:w-1/2 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D] mb-4 md:mb-8">
        That&apos;s why our clients choose
        <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          Klaim RCM Suite
        </span>
      </h2>
      <p className="text-[#696F81] text-[20px] md:text-[28px] leading-[30px] md:leading-9 text-[#3F465D] mb-4 md:mb-8">
        Powerful brown fox jumps over a lazy dog. <br /> DJs flock by when MTV
        ax quiz prog.
      </p>
      <div>
        <a href="/contact">
          <button className="border border-[#6135FB] rounded-lg px-9 py-4 text-[#6135FB] font-medium text-sm">
            Get in touch with us
          </button>
        </a>
      </div>
    </div>
  );
};

export default NewsCTA;
