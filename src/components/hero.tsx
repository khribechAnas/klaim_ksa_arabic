"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  heroTitleBlack?: string;
  heroTitlePurple?: string;
  heroSubtitle?: string;
}

const Hero: React.FC<HeroProps> = ({
  heroTitleBlack = "Financial Clarity & Peace of Mind for", // Default value
  heroTitlePurple = "Your Business", // Default value
  heroSubtitle = "Running a business comes with enough surprises — your cash flow shouldn't be one of them. KlaimFlow ensures you get paid in 24 hours, so you can focus on building your business instead of worrying about billing and collections of your already earned revenue.", // Default value
}) => {
  const primary_gradient =
    "bg-gradient-to-r from-primary-300 to-primary-600 filter blur-[900px]";
  const secondary_gradient =
    "bg-gradient-to-r from-secondary-200 to-secondary-500 filter blur-[750px]";
  const accent_gradient =
    "bg-gradient-to-t from-transparent via-accent-500 to-transparent filter blur-[123px]";

  // Remove useAnimate as it seems to be causing issues
  const containerRef = useRef(null);

  return (
    <section id="home" className=" bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950">
    <div
      className="min-h-screen flex items-center pt-24 pb-8 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16 lg:py-32 overflow-hidden relative"
    >
      <div
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        ref={containerRef}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex-1 mb-8 md:mb-0 z-10">
            {/* <div
              className={`inline-flex items-center py-2 px-4 bg-indigo-600/10 dark:bg-indigo-600/20 border border-indigo-600/20 dark:border-indigo-600/30 rounded-full mb-6 hero-badge`}>
              <span className="font-poppins font-medium text-primary-700 dark:text-primary-300 text-[16px] md:text-[18px] ml-1">
                <span className="text-primary-600 text-[14px] md:text-[16px] dark:text-primary-400">Receivables Financing Solution</span>
              </span>
            </div> */}

            <motion.h1
              className="font-poppins font-semibold text-[38px] md:text-[48px] lg:text-[56px] xl:text-[64px] text-gray-900 dark:text-white leading-[1.2] mb-3 sm:mb-4 md:mb-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {heroTitleBlack}{" "}
              <span className="text-primary dark:text-secondary">
                {heroTitlePurple}
              </span>
            </motion.h1>

            <motion.p
              className="font-inter font-normal text-gray-700 dark:text-gray-300 text-[14px] sm:text-[15px] md:text-[18px] leading-[1.5] sm:leading-[1.6] md:leading-[30.8px] max-w-xl mb-5 sm:mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {heroSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center md:justify-start"
            >
              <a
                href="#"
                className="font-poppins group bg-primary dark:bg-secondary dark:text-black dark:hover:bg-secondary/90 text-white font-medium rounded-xl px-8 sm:px-10 md:px-14 py-3 sm:py-4 text-[16px] sm:text-[18px] flex items-center gap-x-2 sm:gap-x-3 max-w-fit transition-all duration-300 hero-cta"
              >
                I&apos;m Interested
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Hero image here */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Image
                src="/hero.png"
                alt="KlaimFlow Dashboard"
                width={600}
                height={600}
                className="object-contain max-w-full h-auto"
                priority
              />

              {/* Decorative elements */}
              <div className="absolute -z-10 w-64 h-64 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              {/* <div className="absolute -z-10 w-32 h-32 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-2xl -bottom-10 -right-10"></div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    <motion.div
        className="w-full mt-auto pb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm py-6 px-5 rounded-2xl border border-primary dark:border-secondary flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-center">
            <div className="flex-1 border-b md:border-b-0 md:border-r border-primary/30 dark:border-secondary/30 pb-5 md:pb-0 md:pr-6 flex flex-col items-center">
              <h3 className="text-gray-700 dark:text-gray-300 text-xl font-semibold mb-1">
                Less requirements
              </h3>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                vs. conventional loans
              </p>
            </div>

            <div className="flex-1 border-b md:border-b-0 md:border-r border-primary/30 dark:border-secondary/30 pb-5 md:pb-0 md:px-6 flex flex-col items-center">
              <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-100">
                Not a loan
              </h3>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                No debt on your balance sheet
              </p>
            </div>

            <div className="flex-1 md:pl-6 flex flex-col items-center">
              <h3 className="text-gray-700 dark:text-gray-300 text-xl font-semibold mb-1">
                0 commitment
              </h3>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                Discontinue anytime
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
