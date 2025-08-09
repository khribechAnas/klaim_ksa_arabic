"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const containerRef = useRef<HTMLDivElement>(null);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => setCurrentDuration(durationOnHover),
        onHoverEnd: () => setCurrentDuration(duration),
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)} ref={containerRef}>
      <motion.div
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        animate={{
          x:
            direction === "horizontal"
              ? reverse
                ? [0, "50%"]
                : ["0%", "-50%"]
              : 0,
          y:
            direction === "vertical"
              ? reverse
                ? [0, "50%"]
                : ["0%", "-50%"]
              : 0,
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: currentDuration,
            ease: "linear",
          },
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: currentDuration,
            ease: "linear",
          },
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
