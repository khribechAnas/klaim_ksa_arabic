import React from "react";

const BlogNews = () => {
  return (
    <section className="bg-[#F5F7FB] py-12 md:py-32 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] leading-[130%] text-[#3F465D] text-center mb-[1.125rem]">
          Klaim in the
          <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            news
          </span>
        </h2>
        <p className="text-[#696F81] text-[20px] md:text-[28px] leading-[30px] md:leading-9 text-[#3F465D] mb-11 text-center">
          The latest and greatest on our platform
        </p>
        <div className="xl:px-[10rem] 2xl:px-[16rem]">
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-center gap-12">
            <a
              href="https://gulfnews.com/business/corporate-news/dubai-healthcare-city-and-klaim-join-forces-to-help-healthcare-providers-manage-insurance-claims-and-cashflow-1.1680255597674"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src="assets/images/hero1.png"
                className="h-[50px] png-color-gray object-contain"
              />
            </a>
            <a
              href="https://www.wamda.com/2022/11/klaim-raises-5-million-seed-round-knuru-capital"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src="assets/images/hero2.png"
                className="h-[50px] png-color-gray object-contain"
              />
            </a>
            <a
              href="https://www.khaleejtimes.com/business/alkhair-capital-launches-100m-islamic-healthcare-fund-in-dubai"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src="assets/images/hero3.png"
                className="h-[50px] png-color-gray object-contain"
              />
            </a>
            <a
              href="https://magnitt.com/news/klaim-seed-funding-52561"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src="assets/images/hero4.png"
                className="h-[50px] png-color-gray object-contain"
              />
            </a>
            <a
              href="https://www.entrepreneur.com/en-ae/growth-strategies/startup-spotlight-uae-based-healthcare-fintech-klaim/443598"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src="assets/images/hero5.png"
                className="h-[50px] png-color-gray object-contain"
              />
            </a>
            <a
              href="https://www.arabnews.com/tags/klaim"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src="assets/images/hero6.png"
                className="h-[50px] png-color-gray object-contain"
              />
            </a>
            <a
              href="https://www.thenationalnews.com/business/economy/2023/09/04/dubais-alkhair-capital-launches-100m-fund-for-heathtech-investments/"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src="assets/images/hero7.png"
                className="h-[50px] png-color-gray object-contain"
              />
            </a>
            <a
              href="https://www.arabianbusiness.com/startup/468250-sat-medical-fintech-klaim-closes-pre-series-funding-round"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src="assets/images/hero8.png"
                className="h-[50px] png-color-gray object-contain"
              />
            </a>
          </div>
        </div>
        <div className="text-center mt-[4.5rem]">
          <button className="border border-[#6135FB] rounded-lg px-9 py-4 text-[#6135FB] font-medium text-sm">
            Read our stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
