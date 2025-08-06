"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({
  content,
  children,
  className,
  side = "top",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-black dark:border-t-white",
    bottom:
      "bottom-full left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-black dark:border-b-white",
    left: "left-full top-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-black dark:border-l-white",
    right:
      "right-full top-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-r-[6px] border-t-transparent border-b-transparent border-r-black dark:border-r-white",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: side === "top" ? 8 : side === "bottom" ? -8 : 0,
              x: side === "left" ? 8 : side === "right" ? -8 : 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: side === "top" ? 8 : side === "bottom" ? -8 : 0,
              x: side === "left" ? 8 : side === "right" ? -8 : 0,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.15,
            }}
            className={cn(
              "absolute z-50 px-3 py-2 text-sm font-medium text-white bg-black dark:text-black dark:bg-white rounded-2xl shadow-lg pointer-events-none whitespace-nowrap",
              positionClasses[side],
              className
            )}
          >
            {content}
            <div className={cn("absolute w-0 h-0", arrowClasses[side])} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
