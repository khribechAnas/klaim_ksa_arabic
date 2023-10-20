import React from "react";

const BlogNews = () => {
  return (
    <section className="container mx-auto">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] leading-[130%] text-[#3F465D] text-center mb-[1.125rem]">
        Klaim in the
        <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          news
        </span>
      </h2>
      <p className="text-[#696F81] text-[20px] md:text-[28px] leading-[30px] md:leading-9 text-[#3F465D] mb-11 text-center">
        The latest and greatest on our platform
      </p>
      <div className="px-[16rem] bg-red-200">
        <div className="grid grid-cols-3 items-center justify-center mb-10">
          <div className="flex items-center justify-center">
            <img src="assets/images/hero1.png" className="h-[50px]" />
          </div>
          <div className="flex items-center justify-center">
            <img src="assets/images/hero2.png" className="h-[50px]" />
          </div>
          <div className="flex items-center justify-center">
            <img src="assets/images/hero3.png" className="h-[50px]" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center mr-8">
            <img src="assets/images/hero4.png" className="h-[50px]" />
          </div>
          <div className="flex items-center justify-center ml-8">
            <img src="assets/images/hero5.png" className="h-[50px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
