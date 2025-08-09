"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  DollarSign,
  Clock,
  CheckCircle,
  Loader2,
  Zap,
  ShieldCheck,
  Users,
  Settings,
  Timer,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { GlowCard } from "../spotlight-card";

// Animated Deal Status Component
function AnimatedDealStatus() {
  const [isAfter, setIsAfter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAfter((prev) => !prev);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-secondary/5 rounded-xl" />

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-6">
        {/* Status Icon */}
        <motion.div
          className="mx-auto w-16 h-16 rounded-full flex items-center justify-center"
          animate={{
            backgroundColor: isAfter
              ? "rgb(34, 197, 94)"
              : "rgb(156, 163, 175)",
            scale: isAfter ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 0.6,
            scale: { duration: 0.3, times: [0, 0.5, 1] },
          }}
        >
          <AnimatePresence mode="wait">
            {isAfter ? (
              <motion.div
                key="success"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="loading"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
              >
                <Loader2 className="w-8 h-8 text-white animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Deal Status Text */}
        <motion.div className="space-y-2" layout>
          <motion.h3
            className="text-xl font-semibold"
            animate={{
              color: isAfter ? "rgb(34, 197, 94)" : "rgb(107, 114, 128)",
            }}
          >
            Deal Closed
          </motion.h3>

          <AnimatePresence mode="wait">
            {isAfter ? (
              <motion.div
                key="after"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <Zap className="w-4 h-4" />
                  <span className="font-medium">Paid with Klaim</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Commission received in 24 hours
                </div>
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    damping: 15,
                    stiffness: 300,
                  }}
                >
                  <DollarSign className="w-3 h-3" />
                  $45,000 Advanced
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="before"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Waiting...</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Commission pending developer payment
                </div>
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  60-120 days remaining
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          className="w-32 h-1 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
          layout
        >
          <motion.div
            className="h-full rounded-full"
            animate={{
              width: isAfter ? "100%" : "30%",
              backgroundColor: isAfter
                ? "rgb(34, 197, 94)"
                : "rgb(156, 163, 175)",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <AnimatePresence>
        {isAfter && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: -50,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${60 + i * 10}%`,
                }}
              >
                <DollarSign className="w-4 h-4 text-green-500" />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WhatIsKlaimFlow() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.2 });
  const activeTab = "about"; // Always show the about tab

  const features = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-secondary" />,
      title: "No loans or debt",
      color: "bg-accent/50 text-primary",
      delay: 0.1,
    },
    {
      icon: <Users className="h-5 w-5 text-secondary" />,
      title: "No changes to developer relationships",
      color: "bg-accent/50 text-primary",
      delay: 0.2,
    },
    {
      icon: <Settings className="h-5 w-5 text-secondary" />,
      title: "Use only when needed",
      color: "bg-accent/50 text-primary",
      delay: 0.3,
    },
    {
      icon: <Timer className="h-5 w-5 text-secondary" />,
      title: "Simple onboarding - ready in days",
      color: "bg-accent/50 text-primary",
      delay: 0.4,
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
        <h2 className="text-3xl md:text-4xl  font-medium tracking-tighter text-center text-balance pb-1">
          Your Comission. Unlocked in 24 Hours.
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          A revolutionary receivables purchasing solution that turns your
          outstanding invoices into immediate cash flow.
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
            <div className="space-y-12">
              {/* Top section - Title and Description */}
              {/* <motion.div
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-poppins font-semibold text-primary mb-4">
                  The Klaim Estate Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Klaim Estate is a working capital solution designed for real
                  estate professionals who are tired of waiting. We advance your
                  approved commission payout within 24 hours- no interest, no
                  commitment, no disruption.
                </p>
              </motion.div> */}

              {/* Bottom section - Features and Illustration */}
              <div className="grid md:grid-cols-2 gap-12 items-stretch">
                {/* Left side - Features */}
                <motion.div
                  className="space-y-6 flex flex-col"
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="grid grid-cols-1 gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="bg-background cursor-default rounded-xl p-5 border border-border hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: feature.delay + 0.4,
                        }}
                      >
                        <div className="flex items-center">
                          <div
                            className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mr-4`}
                          >
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="font-medium font-poppins text-primary text-md">
                              {feature.title}
                            </h4>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right side - Illustration */}
                <motion.div
                  className="relative flex items-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                  }
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative z-10 bg-background rounded-2xl overflow-hidden border border-border w-full">
                    <div className="absolute inset-0 z-0"></div>

                    {/* Main illustration */}
                    <div className="relative z-10 p-6">
                      <div className="rounded-lg overflow-visible relative">
                        {/* Decorative patterns */}
                        <div className="absolute -top-6 md:-top-16 left-0 w-full h-6 md:h-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                        <div className="absolute -bottom-6 md:-bottom-16 left-0 w-full h-6 md:h-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                        <div className="absolute top-0 -left-6 md:-left-16 h-full w-6 md:w-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                        <div className="absolute top-0 -right-6 md:-right-16 h-full w-6 md:w-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>

                        {/* Corner patterns */}
                        <div className="absolute -top-6 md:-top-16 -left-6 md:-left-16 w-6 md:w-16 h-6 md:h-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                        <div className="absolute -top-6 md:-top-16 -right-6 md:-right-16 w-6 md:w-16 h-6 md:h-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                        <div className="absolute -bottom-6 md:-bottom-16 -left-6 md:-left-16 w-6 md:w-16 h-6 md:h-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>
                        <div className="absolute -bottom-6 md:-bottom-16 -right-6 md:-right-16 w-6 md:w-16 h-6 md:h-16 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-10"></div>

                        <GlowCard customSize className="w-full h-90">
                          <AnimatedDealStatus />
                        </GlowCard>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
