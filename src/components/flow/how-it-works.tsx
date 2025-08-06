"use client";

import { motion } from "motion/react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Qualification & Eligibility",
      description: "Quick 2-minute application to check your eligibility",
      color: "bg-secondary",
    },
    {
      number: "02",
      title: "Documents & Invoices Submission",
      description:
        "Upload required documents and submit your invoices for review",
      color: "bg-secondary ",
    },
    {
      number: "03",
      title: "Custom Proposal",
      description:
        "Receive a tailored funding proposal based on your submitted invoices",
      color: "bg-secondary ",
    },
    {
      number: "04",
      title: "1 Time Onboarding",
      description:
        "Complete a one-time onboarding process to start receiving funds",
      color: "bg-secondary ",
    },
    {
      number: "05",
      title: "Get paid in 24 hrs",
      description:
        "Receive funds directly in your bank account within 24 hours of approval",
      color: "bg-secondary ",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4">
        {/* Mobile timeline (vertical) */}
        {/* This vertical timeline is shown only on mobile devices (hidden on md breakpoint and above) */}
        {/* It creates a visual timeline with animated step numbers and descriptions */}
        {/* The timeline has a gradient line connecting all steps from top to bottom */}
        <div className="mt-12 md:hidden">
          <div className="relative space-y-12 pl-12 before:absolute before:left-13 before:top-1 before:h-[90%] before:w-0.5 before:bg-primary dark:before:bg-secondary dark:before:text-black">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Animated step number bubble with gradient background */}
                <motion.div
                  className={`absolute -left-5 flex h-12 w-12 items-center justify-center rounded-lg ${step.color} text-white shadow-md`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.15,
                  }}
                >
                  <span className="text-xl font-bold">{step.number}</span>
                </motion.div>
                {/* Step content with title and description that animates in from the right */}
                <motion.div
                  className="space-y-2 ml-12"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                >
                  <h3 className="text-base font-medium text-primary dark:text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-primary dark:text-primary">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop timeline (horizontal) */}
        <div className="hidden md:block">
          <div className="mx-auto max-w-7xl">
            <div className="relative flex items-start justify-between gap-4 md:gap-8">
              {/* Animated connecting line */}
              <motion.div
                className="absolute left-20 right-20 top-8 h-0.5 bg-primary"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              ></motion.div>

              {steps.map((step, index) => (
                <TimelineStep
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  color={step.color}
                  delay={index * 0.15}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  number,
  title,
  description,
  color,
  delay,
}: {
  number: string;
  title: string;
  description: string;
  color: string;
  delay: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Number box */}
      <motion.div
        className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-lg ${color} text-white shadow-md`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: delay + 0.2,
        }}
      >
        <span className="text-2xl font-bold">{number}</span>
      </motion.div>

      {/* Content */}
      <div className="mt-4 text-center max-w-[160px] sm:max-w-[200px]">
        <motion.p
          className="text-sm font-medium md:text-base text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {title}
        </motion.p>

        <motion.p
          className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
