"use client";

import { motion, useInView } from "framer-motion";
import { StatsCard } from "../ui/stats-card";
import { AnimatedCounter } from "../ui/animated-counter";
import { useRef } from "react";

export function QuoteSection() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

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
      formatter: () => `Honored as an`,
    },
  ];
  return (
    <section
      id="quote"
      className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20"
    >
      <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
        About Us
      </h2>
      <blockquote className="max-w-5xl text-center px-4">
        <p className="text-base md:text-lg text-primary leading-relaxed tracking-wide font-medium mb-6">
          Klaim is an award-winning fintech company headquartered in Abu Dhabi
          Global Market AGDM, Abu Dhabi, UAE with offices in Dubai, Abu Dhabi,
          Riyadh. Since 2019 we&apos;ve been pioneering payment acceleration for
          SMEs, specifically in healthcare industry. With KlaimFlow we distilled
          5 years of expertise and best practices into a product tailored-made
          for SMEs across all sectors.
        </p>
      </blockquote>

      <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <StatsCard>
              <div className="text-3xl cursor-default font-bold mb-2 text-secondary">
                <AnimatedCounter
                  from={stat.from}
                  to={stat.to}
                  duration={stat.duration}
                  delay={index * 200}
                  formatter={stat.formatter}
                />
              </div>
              <div className="text-gray-600 cursor-default font-semibold dark:text-gray-300">
                {stat.label}
              </div>
            </StatsCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
