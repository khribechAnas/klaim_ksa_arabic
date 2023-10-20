import React from "react";

const BlogTitle = () => {
  return (
    <section className="pt-[74px] container mx-auto">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] leading-[130%] text-[#3F465D] mb-4 md:mb-8 mt-14">
        Klaim
        <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          Blog
        </span>
      </h2>
      <p className="text-[#696F81] text-[20px] md:text-[28px] leading-[30px] md:leading-9 text-[#3F465D] mb-14">
        Discover what sustainable growth in RCM really looks like with expert
        insights shared every month
      </p>
    </section>
  );
};

export default BlogTitle;
