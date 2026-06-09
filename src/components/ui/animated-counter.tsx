"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  formatter?: (value: number) => string;
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
  className?: string;
}

export function AnimatedCounter({
  from,
  to,
  duration = 2000,
  delay = 0,
  formatter,
  prefix = "",
  suffix = "",
  decimalPlaces = 0,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView || isAnimating) return;

    setIsAnimating(true);

    // Calculate increment per frame for smooth animation
    const startTime = Date.now() + delay;
    const endTime = startTime + duration;
    const totalChange = to - from;

    const updateCounter = () => {
      const now = Date.now();

      if (now < startTime) {
        requestAnimationFrame(updateCounter);
        return;
      }

      if (now >= endTime) {
        setCount(to);
        return;
      }

      const elapsedTime = now - startTime;
      const progress = elapsedTime / duration;
      // Use easeOutExpo for smoother animation near the end
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = from + totalChange * easeProgress;

      setCount(currentValue);
      requestAnimationFrame(updateCounter);
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, isAnimating, from, to, duration, delay]);

  const formattedValue = () => {
    if (formatter) return formatter(count);

    const value = Number(count.toFixed(decimalPlaces));

    // Format large numbers with commas
    const formattedNumber = new Intl.NumberFormat("en-AE", {
      maximumFractionDigits: decimalPlaces,
    }).format(value);

    return `${prefix}${formattedNumber}${suffix}`;
  };

  return (
    <span ref={ref} className={className}>
      {formattedValue()}
    </span>
  );
}
