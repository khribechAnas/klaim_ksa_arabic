"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DollarSign, BarChart4, Clock, Hourglass } from "lucide-react";
import { Compare } from "@/components/ui/compare";
import { SectionHeader } from "@/components/section-header";

export default function WhatIsKlaimFlow() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.2 });
  const activeTab = "about"; // Always show the about tab

  const features = [
    {
      icon: <DollarSign className="h-5 w-5 text-secondary" />,
      title: "SMEs that need immediate liquidity",
      color: "bg-accent/50 text-primary",
      delay: 0.1,
    },
    {
      icon: <Clock className="h-5 w-5 text-secondary" />,
      title: "Business owners & CFOs who want predictable cash flow",
      color: "bg-accent/50 text-primary",
      delay: 0.2,
    },
    {
      icon: <BarChart4 className="h-5 w-5 text-secondary" />,
      title: "Growth-Focused Companies",
      color: "bg-accent/50 text-primary",
      delay: 0.3,
    },
  ];

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="what-is-klaimflow"
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-16 pb-20 w-full relative px-6"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
          What is KlaimFlow?
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          A revolutionary receivables purchasing solution that turns your
          outstanding invoices into immediate cash flow
        </p>
      </SectionHeader>
      <div className="">
        <div ref={contentRef} className="max-w-7xl mx-auto">
          {/* Tab Content */}
          <motion.div
            className="mt-2"
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
          >
            {/* Always show about content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Explanation */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative">
                  <div className="pl-8 pr-4">
                    <h3 className="text-xl md:text-2xl font-poppins font-semibold text-primary mb-4">
                      The KlaimFlow Advantage
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      KlaimFlow is a receivables purchasing solution that turns
                      receivables into instant cash. Instead of waiting for your
                      business invoices to reach their payment terms to get
                      paid, KlaimFlow advances up to 90% of your receivables
                      within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 mx-2 md:mx-0 md:ml-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-background cursor-default rounded-xl p-5 border border-border hover:shadow-md transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: feature.delay + 0.4 }}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${feature.color} flex items-center justify-center mr-3 md:mr-4 flex-shrink-0`}
                        >
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium font-poppins text-primary text-sm md:text-md leading-tight">
                            {feature.title}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right side - Visual */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative z-10 bg-background rounded-l-2xl overflow-hidden border border-border">
                  <div className="absolute inset-0  z-0"></div>

                  {/* Main illustration */}
                  <div className="relative z-10 p-6">
                    <div className="rounded-lg overflow-visible relative">
                      {/* Top pattern */}
                      <div className="absolute -top-6 md:-top-16 left-0 w-full h-6 md:h-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                      {/* Bottom pattern */}
                      <div className="absolute -bottom-6 md:-bottom-16 left-0 w-full h-6 md:h-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                      {/* Left pattern */}
                      <div className="absolute top-0 -left-6 md:-left-16 h-full w-6 md:w-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                      {/* Right pattern */}
                      <div className="absolute top-0 -right-6 md:-right-16 h-full w-6 md:w-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                      {/* Corner patterns */}
                      {/* Top-left corner */}
                      <div className="absolute -top-6 md:-top-16 -left-6 md:-left-16 w-6 md:w-16 h-6 md:h-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                      {/* Top-right corner */}
                      <div className="absolute -top-6 md:-top-16 -right-6 md:-right-16 w-6 md:w-16 h-6 md:h-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                      {/* Bottom-left corner */}
                      <div className="absolute -bottom-6 md:-bottom-16 -left-6 md:-left-16 w-6 md:w-16 h-6 md:h-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                      {/* Bottom-right corner */}
                      <div className="absolute -bottom-6 md:-bottom-16 -right-6 md:-right-16 w-6 md:w-16 h-6 md:h-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                      <Compare
                        autoplay={true}
                        firstContent={
                          <div className="w-full h-[400px] select-none bg-background p-4 md:p-6 flex flex-col items-center justify-center text-center">
                            <div className="w-full select-none mx-auto flex flex-col h-full justify-center">
                              <h3 className="text-base select-none md:text-lg font-semibold text-primary mb-5">
                                KlaimFlow
                              </h3>

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
                                      transform: `rotate(${
                                        i * 3 - 3
                                      }deg) translateX(${i * 2}px) translateY(${
                                        i * 2
                                      }px)`,
                                      zIndex: 10 - i,
                                      left: "calc(50% - 90px)",
                                      top: 0,
                                    }}
                                  ></div>
                                ))}

                                {/* Top/main invoice */}
                                <div className="relative w-[180px] h-[220px] rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 z-20 mx-auto">
                                  <div className="h-full w-full p-4 flex flex-col">
                                    <div className="flex justify-between items-center mb-3">
                                      <div className="bg-primary/10 dark:bg-primary/20 h-6 w-24 rounded-md flex items-center justify-center">
                                        <span className="text-primary text-[11px] dark:text-primary-300 font-medium">
                                          INVOICE
                                        </span>
                                      </div>
                                      <div className="h-6 w-12 rounded-md bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                        <span className="text-green-600 dark:text-green-400 text-[11px] font-medium">
                                          PAID
                                        </span>
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
                                            <span className="text-white text-[10px] font-medium">
                                              $12,450.00
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Green 24h stamp */}
                                    <div className="absolute -right-4 top-1/3 -rotate-12 border-2 border-green-500 dark:border-green-400 h-16 w-16 rounded-lg flex items-center justify-center p-1 bg-white/90 dark:bg-slate-800/90">
                                      <div className="text-center">
                                        <span className="text-green-500 dark:text-green-400 text-[10px] font-bold block">
                                          24
                                        </span>
                                        <span className="text-green-500 dark:text-green-400 text-[10px] font-bold block">
                                          HOURS
                                        </span>
                                      </div>
                                    </div>

                                    {/* Fast payment icon */}
                                    <div className="absolute -right-2.5 -top-2.5 bg-green-500 h-8 w-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-800">
                                      <svg
                                        className="h-4 w-4 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2.5"
                                          d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="w-full bg-background select-none flex flex-col items-center justify-center p-3 rounded-lg border border-border mb-4">
                                <h4 className="text-sm select-none md:text-base font-medium text-primary mb-1">
                                  Invoice Payment
                                </h4>
                                <div className="flex select-none items-center text-green-500">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span className="text-xs select-none">
                                    Immediate Cash Flow
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                        secondContent={
                          <div className="w-full h-[400px] select-none bg-muted p-4 md:p-6 flex flex-col items-center justify-center text-center">
                            <div className="w-full select-none mx-auto flex flex-col h-full justify-center">
                              <h3 className="text-base select-none md:text-lg font-semibold text-muted-foreground mb-5">
                                Traditional
                              </h3>

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
                                      transform: `rotate(${
                                        i * 3 - 3
                                      }deg) translateX(${i * 2}px) translateY(${
                                        i * 2
                                      }px)`,
                                      zIndex: 10 - i,
                                      left: "calc(50% - 90px)",
                                      top: 0,
                                    }}
                                  ></div>
                                ))}

                                {/* Top/main invoice */}
                                <div className="relative w-[180px] h-[220px] rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 z-20 mx-auto">
                                  <div className="h-full w-full p-4 flex flex-col">
                                    <div className="flex justify-between items-center mb-3">
                                      <div className="bg-slate-100 dark:bg-slate-700 h-6 w-24 rounded-md flex items-center justify-center">
                                        <span className="text-slate-600 text-[11px] dark:text-slate-300 font-medium">
                                          INVOICE
                                        </span>
                                      </div>
                                      <div className="h-6 w-12 rounded-md bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                        <span className="text-amber-600 dark:text-amber-400 text-[11px] font-medium">
                                          DUE
                                        </span>
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
                                            <span className="text-white text-[10px] font-medium">
                                              $12,450.00
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Red waiting stamp */}
                                    <div className="absolute -right-4 top-1/3 -rotate-12 border-2 border-red-500 dark:border-red-400 h-16 w-16 rounded-lg flex items-center justify-center p-1 bg-white/90 dark:bg-slate-800/90">
                                      <div className="text-center">
                                        <span className="text-red-500 dark:text-red-400 text-[10px] font-bold block">
                                          30-90
                                        </span>
                                        <span className="text-red-500 dark:text-red-400 text-[10px] font-bold block">
                                          DAYS
                                        </span>
                                      </div>
                                    </div>

                                    {/* Waiting icon */}
                                    <div className="absolute -right-2.5 -top-2.5 bg-slate-400 dark:bg-slate-600 h-8 w-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-800">
                                      <Hourglass className="h-4 w-4 text-white" />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="w-full select-none flex flex-col items-center justify-center p-3 bg-background rounded-lg border border-border mb-4">
                                <h4 className="text-sm select-none md:text-base font-medium text-muted-foreground mb-1">
                                  Invoice Payment
                                </h4>
                                <div className="flex select-none items-center text-red-500">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span className="text-xs select-none">
                                    Long Waiting Period
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                        className="w-full select-none rounded-lg border border-border pointer-events-auto"
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
