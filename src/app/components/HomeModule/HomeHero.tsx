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
          <div className="h-[380px] lg:h-auto"></div>
          <div className="">
            <img src="assets/images/Homepage_Hero.jpg" className="" />
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 absolute left-0 right-0 top-0 bottom-0">
          <div className="flex flex-col items-start justify-center px-4 pt-16 sm:pt-0 md:pt-0 h-[320px] md:h-[420px] lg:h-auto">
            <img src="assets/images/dhcc2-1.png" />
            <h3 className="text-lg font-semibold leading-6 text-[#6135FB]">
              OFFICIAL PARTNERS
            </h3>
            <h1 className="text-[#3F465D] text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[2.75rem] md:leading-[3rem] xl:leading-[4.375rem] tracking-tighter mt-8 mb-7">
              Treat your patient today,
              <br className="block md:hidden lg:hidden xl:hidden 2xl:block" />
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] ml-0 md:ml-3 xl:ml-3 2xl:ml-0               
                `}
              >
                receive payment tomorrow
              </span>
              {/* <span
                className={`bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] ml-0 xl:ml-3 2xl:ml-0 ${
                  isFadingOut ? "fade-out-word" : "fade-in-word"
                }`}
              >
                {sentences[currentSentenceIndex]}
              </span> */}
            </h1>
            <div className="flex items-center">
              <ButtonPrimary title="See What's Inside" />
              <ButtonSecondary title="Get Started Now" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-linear px-4 md:px-16 py-8 md:py-0 grid grid-cols-2 gap-4 md:flex items-center justify-center md:justify-between overflow-x-auto">
        <img
          src="assets/images/hero1.png"
          className="py-0 md:py-2 w-auto md:w-[150px] 2xl:w-auto"
        />
        <img
          src="assets/images/hero2.png"
          className="py-0 md:py-2 w-auto md:w-[150px] 2xl:w-auto"
        />
        <img
          src="assets/images/hero3.png"
          className="py-0 md:py-2 w-auto md:w-[150px] 2xl:w-auto"
        />
        <img
          src="assets/images/hero4.png"
          className="py-0 md:py-2 w-auto md:w-[150px] 2xl:w-auto"
        />
        <img
          src="assets/images/hero5.png"
          className="py-0 md:py-2 w-auto md:w-[150px] 2xl:w-auto"
        />
        <img
          src="assets/images/hero6.png"
          className="py-0 md:py-2 w-auto md:w-[150px] 2xl:w-auto"
        />
        <img
          src="assets/images/hero7.png"
          className="py-0 md:py-2 w-auto md:w-[150px] 2xl:w-auto"
        />
        <img
          src="assets/images/hero8.png"
          className="py-0 md:py-2 w-auto md:w-[150px] 2xl:w-auto"
        />
      </div>
    </section>
  );
};

export default HomeHero;
