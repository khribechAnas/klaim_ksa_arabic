"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BackgroundBeams } from "./ui/background-beams";

interface FourthBentoAnimationProps {
  once?: boolean;
}

export function FourthBentoAnimation({
  once = false,
}: FourthBentoAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once });

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center relative overflow-hidden p-6"
    >
      <BackgroundBeams />
      {/* Content wrapper */}
      <div className="relative w-full max-w-md">
        {/* Main clock face */}
        <motion.div
          className="relative mx-auto w-40 h-40 rounded-full bg-accent/20 dark:bg-accent/10 backdrop-blur-sm border-2 border-border shadow-lg flex items-center justify-center z-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
          }
          transition={{
            delay: 0.2,
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
        >
          {/* Clock markers */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-4 bg-foreground/40"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-16px)`,
                transformOrigin: "bottom center",
                left: "50%",
                bottom: "50%",
              }}
            />
          ))}

          {/* Hour hand (moves slowly - traditional) */}
          <motion.div
            className="w-2 h-10 bg-red-500 absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rounded-full shadow-sm"
            initial={{ rotate: 0 }}
            animate={isInView ? { rotate: 360 } : { rotate: 0 }}
            transition={{
              delay: 0.5,
              duration: 8,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              transformOrigin: "bottom center",
              transform: "translateY(-2px)",
            }}
          />

          {/* Minute hand (moves fast - Klaim speed) */}
          <motion.div
            className="w-1.5 h-14 bg-green-500 absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rounded-full shadow-sm"
            initial={{ rotate: 0 }}
            animate={isInView ? { rotate: 360 } : { rotate: 0 }}
            transition={{
              delay: 0.8,
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              transformOrigin: "bottom center",
              transform: "translateY(-2px)",
            }}
          />

          {/* Center dot */}
          <div className="w-3 h-3 rounded-full bg-foreground/60 absolute z-30" />
        </motion.div>

        {/* Fast forward circular arrow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 z-10"
          initial={{ rotate: 0, opacity: 0 }}
          animate={
            isInView ? { rotate: 360, opacity: 1 } : { rotate: 0, opacity: 0 }
          }
          transition={{
            delay: 1,
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <linearGradient
                id="speedGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(168,85,247,0.4)" />
                <stop offset="100%" stopColor="rgba(34,197,94,0.6)" />
              </linearGradient>
            </defs>
            <path
              d="M85,50 A35,35 0 1,1 50,15"
              fill="none"
              stroke="url(#speedGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="6,3"
            />
            {/* Arrow head */}
            <path
              d="M48,8 L50,15 L57,12"
              fill="none"
              stroke="rgba(34,197,94,0.6)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Money/Payment elements flying around */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-background border border-border rounded-lg p-2 shadow-sm flex items-center z-15"
            initial={{
              scale: 0,
              opacity: 0,
              x: 0,
              y: 0,
            }}
            animate={
              isInView
                ? {
                    scale: [0, 1, 1, 0.8],
                    opacity: [0, 1, 1, 0.6],
                    x: [0, Math.cos((i * 72 * Math.PI) / 180) * (120 + i * 25)],
                    y: [0, Math.sin((i * 72 * Math.PI) / 180) * (120 + i * 25)],
                    rotate: [0, 360],
                  }
                : {
                    scale: 0,
                    opacity: 0,
                    x: 0,
                    y: 0,
                  }
            }
            transition={{
              delay: 1.5 + i * 0.2,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: "50%",
              top: "50%",
              width: "40px",
              height: "28px",
            }}
          >
            {/* Different payment symbols */}
            <div className="text-sm">
              {i === 0
                ? "💳"
                : i === 1
                  ? "💵"
                  : i === 2
                    ? "💳"
                    : i === 3
                      ? "⚡"
                      : "🏦"}
            </div>
          </motion.div>
        ))}

        {/* Labels */}
        <motion.div
          className="absolute top-0 -left-4 bg-red-500/10 border border-red-200 dark:border-red-800 px-3 py-1.5 rounded-md z-30"
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-sm font-medium text-red-600 dark:text-red-400">
            Traditional: 3-6 months
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-3 right-10 bg-green-500/10 border border-green-200 dark:border-green-800 px-3 py-1.5 rounded-md z-30"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-sm font-medium text-green-600 dark:text-green-400">
            Klaim: 24 hours
          </div>
        </motion.div>
      </div>
    </div>
  );
}
