"use client";

import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {AnimatedCounter} from "./animated-counter";
import {StatsCard} from "./stats-card";
import {Sparkles} from "lucide-react";
import {InfiniteSlider} from "./ui/infinite-slider";
import {ProgressiveBlur} from "./ui/progressive-blur";

interface StatsSectionProps {
  aboutTitle?: string;
  aboutSubtitle?: string;
}

export default function StatsSection({
  aboutTitle,
  aboutSubtitle,
}: StatsSectionProps) {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, {once: true, amount: 0.3});

  const stats = [
    {
      value: 270,
      prefix: "AED ",
      suffix: "million",
      label: "Disbursed in claim payments",
      from: 0,
      to: 270,
      duration: 2500,
      formatter: (value: number) => `AED ${value.toFixed(0)} million`,
    },
    {
      value: 2019,
      suffix: "Founded in",
      label: "Offices in the UAE, KSA and Oman",
      from: 2010,
      to: 2019,
      duration: 2000,
      formatter: (value: number) => `Founded in ${value.toFixed(0)}`,
    },
    {
      value: 500,
      suffix: "+",
      label: "Innovative Fintech Pioneer",
      from: 0,
      to: 500,
      duration: 2200,
      formatter: (value: number) => `Honored as an`,
    },
  ];

  const awards = [
    {id: 1, src: "/images/awards/kpmg.svg", alt: "KPMG Logo"},
    {id: 2, src: "/images/awards/Award2.png", alt: "Award 2"},
    {id: 3, src: "/images/awards/Award3.png", alt: "Award 3"},
    {id: 7, src: "/images/awards/enterprise.svg", alt: "Enterprise Logo"},
    {id: 4, src: "/images/awards/Award4.png", alt: "Award 4"},
    {id: 5, src: "/images/awards/Award5.png", alt: "Award 5"},
    {id: 6, src: "/images/awards/Award6.png", alt: "Award 6"},
  ];

  return (
    <section id="about-us" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle Gradient Effects */}
      <div className="absolute z-0 w-[40%] h-[30%] top-0 right-0 bg-primary/10 dark:bg-primary/15 blur-[120px] rounded-full opacity-40 dark:opacity-50"></div>
      <div className="absolute z-0 w-[30%] h-[30%] bottom-20 left-[10%] bg-purple-500/5 dark:bg-purple-500/10 blur-[100px] rounded-full opacity-30 dark:opacity-40"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto mb-24"
          initial={{opacity: 0, y: 20}}
          animate={statsInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
          transition={{duration: 0.5}}>
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-secondary-900/30 border border-primary-200 dark:border-secondary-700 mb-10"
            initial={{opacity: 0, scale: 0.9}}
            animate={statsInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.9}}
            transition={{duration: 0.4, delay: 0.1}}>
            <Sparkles className="h-5 w-5 text-primary dark:text-secondary-400 mr-2" />
            <span className="text-sm font-medium text-primary dark:text-secondary-400">The Klaim Story</span>
          </motion.div>
          <h2 className="text-3xl font-poppins md:text-4xl lg:text-5xl font-semibold tracking-tight mb-16">{aboutTitle}</h2>
          <motion.p
            className="text-lg font-inter md:text-xl text-slate-600 dark:text-slate-300 mx-auto"
            initial={{opacity: 0, y: 20}}
            animate={statsInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
            transition={{duration: 0.6, delay: 0.2}}>
            {aboutSubtitle}
          </motion.p>
        </motion.div>

        {/* Stats with animated counters */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              animate={statsInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
              transition={{duration: 0.5, delay: 0.3 + index * 0.1}}>
              <StatsCard>
                <div className="text-3xl cursor-default font-bold mb-2 text-primary dark:text-secondary">
                  <AnimatedCounter from={stat.from} to={stat.to} duration={stat.duration} delay={index * 200} formatter={stat.formatter} />
                </div>
                <div className="text-gray-600 cursor-default font-semibold dark:text-gray-300">{stat.label}</div>
              </StatsCard>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="group bg-primary py-16 sm:py-24 rounded-2xl sm:rounded-3xl relative m-auto max-w-7xl px-4 sm:px-6 mt-8">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full md:max-w-44 md:border-r border-white md:pr-6 mb-6 md:mb-0">
            <p className="text-center md:text-end text-white font-semibold text-lg">Award winning company</p>
          </div>
          <div className="relative py-4 md:py-6 w-full md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={56} className="px-4 sm:px-0" direction="horizontal" reverse={false}>
              {awards.map((award) => (
                <div key={award.id} className="flex items-center justify-center px-4">
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    <img className="max-h-full max-w-full object-contain" src={award.src} alt={award.alt} style={{aspectRatio: "auto"}} />
                  </div>
                </div>
              ))}
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-8 sm:w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-8 sm:w-20"></div>
            <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-20" direction="left" blurIntensity={0.5} />
            <ProgressiveBlur className="pointer-events-none absolute -right-2 top-0 h-full w-8 sm:w-20" direction="right" blurIntensity={0.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
