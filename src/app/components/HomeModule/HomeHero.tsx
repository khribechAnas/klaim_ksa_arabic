"use client";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "../CommonModule/ButtonPrimary";
import ButtonSecondary from "../CommonModule/ButtonSecondary";

const HomeHero = () => {
  const sentences = [
    "optimizing your cash flow",
    "reducing your expences",
    "minimizing claim rejections",
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  // const [isFadingOut, setIsFadingOut] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsFadingOut(true);

  //     setTimeout(() => {
  //       setCurrentSentenceIndex(
  //         (prevIndex) => (prevIndex + 1) % sentences.length
  //       );
  //       setIsFadingOut(false);
  //     }, 500);
  //   }, 3000); // Change sentence every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="pt-[74px] ">
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[380px] lg:h-auto">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 absolute left-0 right-0 top-0 bottom-0">
              <div
                  className="flex flex-col items-start justify-center px-4 pt-16 sm:pt-0 md:pt-0 h-[320px] md:h-[420px] lg:h-auto">
                <img src="assets/images/dhcc2-1.png"/>
                <h3 className="text-lg font-semibold leading-6 text-[#6135FB]">
                  OFFICIAL PARTNERS
                </h3>
                <h1 className="text-[#3F465D] text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[2.75rem] md:leading-[3rem] xl:leading-[4.375rem] tracking-tighter mt-8 mb-7">
              <span
                  className={`bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] ml-0 lg:ml-3 xl:ml-3 2xl:ml-0               
                `}
              >
                Focus on Healing,
              </span>
                  <br className="block lg:hidden xl:hidden 2xl:block"/>
                  Not Billing
                  {/* <span
                className={`bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] ml-0 xl:ml-3 2xl:ml-0 ${
                  isFadingOut ? "fade-out-word" : "fade-in-word"
                }`}
              >
                {sentences[currentSentenceIndex]}
              </span> */}
                </h1>
                <div className="flex items-center">
                  <ButtonPrimary title="Talk to an expert" href="/contact"/>
                  <ButtonSecondary title="Get Started Now" href="https://portal.uae.klaim.ai/sign-up" target="_blank"/>
                </div>
              </div>
            </div>
          </div>
          <div className="z-[9999]">
            <video src="assets/videos/Klaim_Explainer_video_v4.mp4" controls className="w-full p-2 z-[9999]"/>
          </div>
        </div>

      </div>
      <div
          className="bg-linear px-8 md:px-16 py-8 2xl:py-14 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 lg:gap-x-8 xl:gap-x-16 gap-y-8 items-center">
        <a
            href="https://gulfnews.com/business/corporate-news/dubai-healthcare-city-and-klaim-join-forces-to-help-healthcare-providers-manage-insurance-claims-and-cashflow-1.1680255597674"
            target="_blank"
            className="flex items-center justify-center"
        >
          <img
              src="assets/images/hero1.png"
              className="h-[30px] object-contain"
          />
        </a>
        <a
            href="https://www.wamda.com/2022/11/klaim-raises-5-million-seed-round-knuru-capital"
            target="_blank"
            className="flex items-center justify-center"
        >
          <img
              src="assets/images/hero2.png"
              className="h-[30px] object-contain"
          />
        </a>
        <a
            href="https://www.khaleejtimes.com/business/alkhair-capital-launches-100m-islamic-healthcare-fund-in-dubai"
            target="_blank"
            className="flex items-center justify-center"
        >
          <img
              src="assets/images/hero3.png"
              className="h-[30px] object-contain"
          />
        </a>
        <a
            href="https://magnitt.com/news/klaim-seed-funding-52561"
            target="_blank"
            className="flex items-center justify-center"
        >
          <img
            src="assets/images/hero4.png"
            className="h-[30px] object-contain"
          />
        </a>
        <a
          href="https://www.entrepreneur.com/en-ae/growth-strategies/startup-spotlight-uae-based-healthcare-fintech-klaim/443598"
          target="_blank"
          className="flex items-center justify-center"
        >
          <img
            src="assets/images/hero5.png"
            className="h-[30px] object-contain"
          />
        </a>
        <a
          href="https://www.arabnews.com/tags/klaim"
          target="_blank"
          className="flex items-center justify-center"
        >
          <img
            src="assets/images/hero6.png"
            className="h-[30px] object-contain"
          />
        </a>
        <a
          href="https://www.thenationalnews.com/business/economy/2023/09/04/dubais-alkhair-capital-launches-100m-fund-for-heathtech-investments/"
          target="_blank"
          className="flex items-center justify-center"
        >
          <img
            src="assets/images/hero7.png"
            className="h-[30px] object-contain"
          />
        </a>
        <a
          href="https://www.arabianbusiness.com/startup/468250-sat-medical-fintech-klaim-closes-pre-series-funding-round"
          target="_blank"
          className="flex items-center justify-center"
        >
          <img
            src="assets/images/hero8.png"
            className="h-[30px] object-contain"
          />
        </a>
      </div>
    </section>
  );
};

export default HomeHero;
