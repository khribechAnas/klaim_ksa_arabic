"use client";

import {useRef} from "react";
import {motion, useInView, useScroll, useTransform} from "framer-motion";
import {ArrowRight, DollarSign, BarChart4, Clock, Users, LineChart, Hourglass, Sparkles} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Compare} from "./ui/compare";
import Link from "next/link";

interface WhatIsKlaimFlowProps {    
  klaimFlowSubtitle?: string;
  klaimFlowTitle2?: string;
  klaimFlowDescription2?: string;
}

export default function WhatIsKlaimFlow({
  klaimFlowSubtitle,
  klaimFlowTitle2,
  klaimFlowDescription2,
} : WhatIsKlaimFlowProps) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, {once: true, amount: 0.2});
  const activeTab = "about"; // Always show the about tab

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: <DollarSign className="h-5 w-5 text-primary dark:text-secondary" />,
      title: "SMEs & B2B businesses that need immediate liquidity",
      color: "bg-secondary/10 text-secondary dark:bg-secondary-900/30 dark:text-secondary",
      delay: 0.1,
    },
    {
      icon: <Clock className="h-5 w-5 text-primary dark:text-secondary" />,
      title: "Business owners & CFOs who want predictable cash flow",
      color: "bg-secondary/10 text-secondary dark:bg-secondary-900/30 dark:text-secondary",
      delay: 0.2,
    },
    {
      icon: <BarChart4 className="h-5 w-5 text-primary dark:text-secondary" />,
      title: "Growth-Focused Companies looking to focus on making more money",
      color: "bg-secondary/10 text-secondary dark:bg-secondary-900/30 dark:text-secondary",
      delay: 0.3,
    },
  ];

  const challenges = [
    {
      icon: <Clock className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />,
      title: "Delayed Payments",
      description: "Invoices are due, but cash isn't available when you need it.",
      color: "bg-indigo-100 dark:bg-indigo-900/30",
      delay: 0.1,
    },
    {
      icon: <Users className="h-7 w-7 text-blue-500 dark:text-blue-400" />,
      title: "Operational Constraints",
      description: "Payroll, supplier payments, and expansion plans shouldn't be delayed due to slow cash flow.",
      color: "bg-blue-100 dark:bg-blue-900/30",
      delay: 0.2,
    },
    {
      icon: <LineChart className="h-7 w-7 text-teal-500 dark:text-teal-400" />,
      title: "Wasted Resources",
      description: "Worrying about cash flow and managing it manually takes time and effort.",
      color: "bg-teal-100 dark:bg-teal-900/30",
      delay: 0.3,
    },
  ];

  const tabVariants = {
    inactive: {
      opacity: 0.7,
      y: 0,
      transition: {duration: 0.3},
    },
    active: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.3},
    },
  };

  const contentVariants = {
    hidden: {opacity: 0, x: -20},
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.5},
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {duration: 0.3},
    },
  };

  return (
    <section id="what-is-klaimflow" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Subtle Gradient Effects */}
      <div className="absolute z-0 w-[40%] h-[30%] top-0 left-0 bg-primary/10 dark:bg-primary/15 blur-[120px] rounded-full opacity-40 dark:opacity-50"></div>

      {/* Additional subtle glows */}
      <div className="absolute z-0 w-[30%] h-[30%] top-40 right-[10%] bg-purple-500/5 dark:bg-purple-500/10 blur-[100px] rounded-full opacity-30 dark:opacity-40"></div>
      <div className="absolute z-0 w-[25%] h-[25%] bottom-[30%] left-[5%] bg-blue-400/5 dark:bg-blue-400/10 blur-[100px] rounded-full opacity-30 dark:opacity-40"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={contentRef} className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
            transition={{duration: 0.6}}>
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-secondary-900/30 border border-primary-200 dark:border-secondary-700 mb-10"
              initial={{opacity: 0, scale: 0.9}}
              animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.9}}
              transition={{duration: 0.4, delay: 0.1}}>
              <Sparkles className="h-5 w-5 text-primary dark:text-secondary-400 mr-2" />
              <span className="text-sm font-medium text-primary dark:text-secondary-400">KlaimFlow</span>
            </motion.div>
            <motion.h2
              className="text-3xl font-poppins md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6"
              initial={{opacity: 0, y: 20}}
              animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
              transition={{duration: 0.6, delay: 0.2}}>
              <span>What is </span>
              <span className="text-primary dark:text-secondary">KlaimFlow</span>
              <span> ?</span>
            </motion.h2>

            <motion.p
              className="text-lg font-inter md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
              initial={{opacity: 0, y: 20}}
              animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
              transition={{duration: 0.6, delay: 0.3}}>
              {klaimFlowSubtitle}
            </motion.p>
          </motion.div>

          {/* Interactive Tabs */}
          {/* Commenting out tabs to leave only "About KlaimFlow" content
          <motion.div
            className="flex justify-center mb-12"
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
            transition={{duration: 0.6, delay: 0.4}}>
            <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <motion.button
                className={`px-6 py-2 rounded-md text-sm font-medium ${
                  activeTab === "about"
                    ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-300"
                }`}
                onClick={() => setActiveTab("about")}
                variants={tabVariants}
                animate={activeTab === "about" ? "active" : "inactive"}
                whileHover={{scale: 1.03}}
                whileTap={{scale: 0.97}}>
                About KlaimFlow
              </motion.button>
              <motion.button
                className={`px-6 py-2 rounded-md text-sm font-medium ${
                  activeTab === "challenges"
                    ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-300"
                }`}
                onClick={() => setActiveTab("challenges")}
                variants={tabVariants}
                animate={activeTab === "challenges" ? "active" : "inactive"}
                whileHover={{scale: 1.03}}
                whileTap={{scale: 0.97}}>
                Business Challenges
              </motion.button>
            </div>
          </motion.div>
          */}

          {/* Tab Content */}
          <motion.div key={activeTab} initial="hidden" animate="visible" exit="exit" variants={contentVariants}>
            {/* Always show about content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Explanation */}
              <motion.div
                className="space-y-8"
                initial={{opacity: 0, x: -50}}
                animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
                transition={{duration: 0.8, delay: 0.4}}>
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-secondary rounded-full"></div>
                  <div className="pl-6">
                    <h3 className="text-2xl font-poppins font-semibold text-slate-900 dark:text-white mb-4">{klaimFlowTitle2}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {klaimFlowDescription2}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-slate-800 cursor-default rounded-xl p-5 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:bg-gradient-to-r hover:from-primary-100/30 hover:via-secondary-100/20 hover:to-accent-100/30 dark:hover:from-primary-900/20 dark:hover:via-secondary-900/10 dark:hover:to-accent-900/20 transition-all duration-300"
                      initial={{opacity: 0, y: 20}}
                      animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                      transition={{duration: 0.5, delay: feature.delay + 0.4}}>
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mr-4`}>{feature.icon}</div>
                        <div>
                          <h4 className="font-medium font-poppins text-slate-900 dark:text-white text-md">{feature.title}</h4>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                  transition={{duration: 0.5, delay: 0.8}}
                  whileTap={{scale: 0.95}}
                  className="pt-4">
                  <Link href="#cta">
                    <Button
                      size="lg"
                      className="group w-full sm:w-auto text-sm sm:text-base py-8 sm:py-6 bg-primary text-white shadow-lg transition-all">
                      <span className="whitespace-normal font-poppins sm:whitespace-nowrap">Apply Now & Secure Immediate Funding</span>{" "}
                      <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right side - Visual */}
              <motion.div
                className="relative"
                initial={{opacity: 0, x: 50}}
                animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
                transition={{duration: 0.8, delay: 0.4}}>
                <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-blue-500/5 to-teal-400/5 z-0"></div>

                  {/* Main illustration */}
                  <div className="relative z-10 p-6">
                    <div className="rounded-lg overflow-hidden mb-6">
                      <Compare
                        autoplay={true}
                        firstContent={
                          <div className="w-full h-[400px] select-none bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-4 md:p-6 flex flex-col items-center justify-center text-center">
                            <div className="w-full select-none mx-auto flex flex-col h-full justify-center">
                              <h3 className="text-base select-none md:text-lg font-semibold text-slate-700 dark:text-slate-200 mb-5">KlaimFlow</h3>

                              {/* Invoice stack with fast payment */}
                              <div className="relative w-[180px] mx-auto mb-6">
                                {/* Stack of invoices background */}
                                {[...Array(3)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="absolute origin-bottom-left rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-800"
                                    style={{
                                      width: `${Math.max(180 - i * 5, 160)}px`,
                                      height: `${Math.max(220 - i * 5, 200)}px`,
                                      transform: `rotate(${i * 3 - 3}deg) translateX(${i * 2}px) translateY(${i * 2}px)`,
                                      zIndex: 10 - i,
                                      left: "calc(50% - 90px)",
                                      top: 0,
                                    }}></div>
                                ))}

                                {/* Top/main invoice */}
                                <div className="relative w-[180px] h-[220px] rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 z-20 mx-auto">
                                  <div className="h-full w-full p-4 flex flex-col">
                                    <div className="flex justify-between items-center mb-3">
                                      <div className="bg-primary/10 dark:bg-primary/20 h-6 w-24 rounded-md flex items-center justify-center">
                                        <span className="text-primary text-[11px] dark:text-primary-300 font-medium">INVOICE</span>
                                      </div>
                                      <div className="h-6 w-12 rounded-md bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                        <span className="text-green-600 dark:text-green-400 text-[11px] font-medium">PAID</span>
                                      </div>
                                    </div>
                                    <div className="mt-2 space-y-2">
                                      <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-700"></div>
                                      <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-700"></div>
                                      <div className="h-3 w-3/4 rounded bg-slate-200 dark:bg-slate-700"></div>
                                    </div>
                                    <div className="my-4 border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                                    <div className="space-y-2 mb-auto">
                                      <div className="flex justify-between">
                                        <div className="h-3 w-1/3 rounded bg-slate-200 dark:bg-slate-700"></div>
                                        <div className="h-3 w-20 rounded bg-slate-200 dark:bg-slate-700"></div>
                                      </div>
                                      <div className="flex justify-between">
                                        <div className="h-3 w-1/4 rounded bg-slate-200 dark:bg-slate-700"></div>
                                        <div className="h-3 w-16 rounded bg-slate-200 dark:bg-slate-700"></div>
                                      </div>
                                    </div>
                                    <div className="mt-auto border-t border-slate-200 dark:border-slate-700 pt-3">
                                      <div className="flex justify-between items-center">
                                        <div className="h-4 w-12 rounded bg-slate-200 dark:bg-slate-700"></div>
                                        <div className="flex space-x-1 items-center">
                                          <div className="h-5 w-20 rounded-md bg-indigo-500 flex items-center justify-center">
                                            <span className="text-white text-[10px] font-medium">$12,450.00</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Green 24h stamp */}
                                    <div className="absolute -right-4 top-1/3 -rotate-12 border-2 border-green-500 dark:border-green-400 h-16 w-16 rounded-lg flex items-center justify-center p-1 bg-white/90 dark:bg-slate-800/90">
                                      <div className="text-center">
                                        <span className="text-green-500 dark:text-green-400 text-[10px] font-bold block">24</span>
                                        <span className="text-green-500 dark:text-green-400 text-[10px] font-bold block">HOURS</span>
                                      </div>
                                    </div>

                                    {/* Fast payment icon */}
                                    <div className="absolute -right-2.5 -top-2.5 bg-green-500 h-8 w-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-800">
                                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="w-full bg-white dark:bg-indigo-900/30 select-none flex flex-col items-center justify-center p-3 rounded-lg border border-slate-300 dark:border-indigo-800 mb-4">
                                <h4 className="text-sm select-none md:text-base font-medium text-slate-700 dark:text-slate-300 mb-1">
                                  Invoice Payment
                                </h4>
                                <div className="flex select-none items-center text-green-500 dark:text-green-400">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span className="text-xs select-none">Immediate Cash Flow</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                        secondContent={
                          <div className="w-full h-[400px] select-none bg-slate-100 dark:bg-slate-800 p-4 md:p-6 flex flex-col items-center justify-center text-center">
                            <div className="w-full select-none mx-auto flex flex-col h-full justify-center">
                              <h3 className="text-base select-none md:text-lg font-semibold text-slate-700 dark:text-slate-200 mb-5">Traditional</h3>

                              {/* Invoice stack with delayed payment */}
                              <div className="relative w-[180px] mx-auto mb-6">
                                {/* Stack of invoices background */}
                                {[...Array(3)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="absolute origin-bottom-left rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-800"
                                    style={{
                                      width: `${Math.max(180 - i * 5, 160)}px`,
                                      height: `${Math.max(220 - i * 5, 200)}px`,
                                      transform: `rotate(${i * 3 - 3}deg) translateX(${i * 2}px) translateY(${i * 2}px)`,
                                      zIndex: 10 - i,
                                      left: "calc(50% - 90px)",
                                      top: 0,
                                    }}></div>
                                ))}

                                {/* Top/main invoice */}
                                <div className="relative w-[180px] h-[220px] rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 z-20 mx-auto">
                                  <div className="h-full w-full p-4 flex flex-col">
                                    <div className="flex justify-between items-center mb-3">
                                      <div className="bg-slate-100 dark:bg-slate-700 h-6 w-24 rounded-md flex items-center justify-center">
                                        <span className="text-slate-600 text-[11px] dark:text-slate-300 font-medium">INVOICE</span>
                                      </div>
                                      <div className="h-6 w-12 rounded-md bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                        <span className="text-amber-600 dark:text-amber-400 text-[11px] font-medium">DUE</span>
                                      </div>
                                    </div>
                                    <div className="mt-2 space-y-2">
                                      <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-700"></div>
                                      <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-700"></div>
                                      <div className="h-3 w-3/4 rounded bg-slate-200 dark:bg-slate-700"></div>
                                    </div>
                                    <div className="my-4 border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                                    <div className="space-y-2 mb-auto">
                                      <div className="flex justify-between">
                                        <div className="h-3 w-1/3 rounded bg-slate-200 dark:bg-slate-700"></div>
                                        <div className="h-3 w-20 rounded bg-slate-200 dark:bg-slate-700"></div>
                                      </div>
                                      <div className="flex justify-between">
                                        <div className="h-3 w-1/4 rounded bg-slate-200 dark:bg-slate-700"></div>
                                        <div className="h-3 w-16 rounded bg-slate-200 dark:bg-slate-700"></div>
                                      </div>
                                    </div>
                                    <div className="mt-auto border-t border-slate-200 dark:border-slate-700 pt-3">
                                      <div className="flex justify-between items-center">
                                        <div className="h-4 w-12 rounded bg-slate-200 dark:bg-slate-700"></div>
                                        <div className="flex space-x-1 items-center">
                                          <div className="h-5 w-20 rounded-md bg-slate-400 dark:bg-slate-600 flex items-center justify-center">
                                            <span className="text-white text-[10px] font-medium">$12,450.00</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Red waiting stamp */}
                                    <div className="absolute -right-4 top-1/3 -rotate-12 border-2 border-red-500 dark:border-red-400 h-16 w-16 rounded-lg flex items-center justify-center p-1 bg-white/90 dark:bg-slate-800/90">
                                      <div className="text-center">
                                        <span className="text-red-500 dark:text-red-400 text-[10px] font-bold block">30-90</span>
                                        <span className="text-red-500 dark:text-red-400 text-[10px] font-bold block">DAYS</span>
                                      </div>
                                    </div>

                                    {/* Waiting icon */}
                                    <div className="absolute -right-2.5 -top-2.5 bg-slate-400 dark:bg-slate-600 h-8 w-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-800">
                                      <Hourglass className="h-4 w-4 text-white" />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="w-full select-none flex flex-col items-center justify-center p-3 bg-white dark:bg-slate-700/50 rounded-lg border border-slate-300 dark:border-slate-600 mb-4">
                                <h4 className="text-sm select-none md:text-base font-medium text-slate-700 dark:text-slate-300 mb-1">
                                  Invoice Payment
                                </h4>
                                <div className="flex select-none items-center text-red-500 dark:text-red-400">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span className="text-xs select-none">Long Waiting Period</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                        className="w-full select-none rounded-lg border border-slate-200 dark:border-slate-700 pointer-events-auto"
                        slideMode="hover"
                        initialSliderPercentage={20}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
