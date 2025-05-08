"use client";

import type {ReactNode} from "react";
import {motion} from "framer-motion";
import {useState} from "react";

interface StatsCardProps {
  children: ReactNode;
  className?: string;
  onHover?: () => void;
}

export function StatsCard({children, className = "", onHover}: StatsCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`bg-gray-100 dark:bg-gray-800 cursor-default rounded-xl p-6 text-center relative overflow-hidden ${className}`}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      onHoverStart={() => {
        setIsHovered(true);
        if (onHover) onHover();
      }}
      onHoverEnd={() => {
        setIsHovered(false);
      }}>
      {/* Subtle gradient animation in the background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-100/30 via-secondary-100/20 to-accent-100/30 dark:from-primary-900/20 dark:via-secondary-900/10 dark:to-accent-900/20"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{duration: 0.3}}
      />

      {/* Content */}
      <div className="relative z-10 pointer-events-none">{children}</div>
    </motion.div>
  );
}
