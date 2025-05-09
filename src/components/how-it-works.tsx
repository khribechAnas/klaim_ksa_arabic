"use client";

import {motion} from "motion/react";

interface HowItWorksSectionProps {
  howTitle?: string;
  howSubtitle?: string;
  howStep1Title?: string;
  howStep1Subtitle?: string;
  howStep2Title?: string;
  howStep2Subtitle?: string;
  howStep3Title?: string;
  howStep3Subtitle?: string;
  howStep4Title?: string;
  howStep4Subtitle?: string;
  howStep5Title?: string;
  howStep5Subtitle?: string;
}

export default function HowItWorksSection({
  howTitle,
  howSubtitle,
  howStep1Title,
  howStep1Subtitle,
  howStep2Title,
  howStep2Subtitle,
  howStep3Title,
  howStep3Subtitle,
  howStep4Title,
  howStep4Subtitle,
  howStep5Title,
  howStep5Subtitle,
}: HowItWorksSectionProps) {
  const steps = [
    {
      number: "01",
      title: howStep1Title || "",
      description: howStep1Subtitle || "",
      color: "bg-primary dark:bg-secondary dark:text-black",
    },
    {
      number: "02",
      title: howStep2Title || "",
      description: howStep2Subtitle || "",
      color: "bg-primary dark:bg-secondary dark:text-black",
    },
    {
      number: "03",
      title: howStep3Title || "",
      description: howStep3Subtitle || "",
      color: "bg-primary dark:bg-secondary dark:text-black",
    },
    {
      number: "04",
      title: howStep4Title || "",
      description: howStep4Subtitle || "",
      color: "bg-primary dark:bg-secondary dark:text-black",
    },
    {
      number: "05",
      title: howStep5Title || "",
      description: howStep5Subtitle || "",
      color: "bg-primary dark:bg-secondary dark:text-black",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}>
          <h2 className="text-3xl font-poppins md:text-4xl lg:text-5xl font-semibold tracking-tight  mb-4">{howTitle}</h2>
          <p className="text-lg md:text-xl text-muted-foreground">{howSubtitle}</p>
        </motion.div>

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
                  className={`absolute -left-5 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-lg ${step.color} text-white shadow-md`}
                  initial={{scale: 0}}
                  whileInView={{scale: 1}}
                  viewport={{once: true}}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.15,
                  }}>
                  <span className="text-xl font-bold">{step.number}</span>
                </motion.div>
                {/* Step content with title and description that animates in from the right */}
                <motion.div
                  className="space-y-2 ml-12"
                  initial={{opacity: 0, x: 20}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.4, delay: index * 0.15 + 0.2}}>
                  <h3 className="text-base font-medium text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop timeline (horizontal) */}
        <div className="mt-16 hidden md:block">
          <div className="mx-auto max-w-7xl">
            <div className="relative flex items-start justify-between gap-4 md:gap-8">
              {/* Animated connecting line */}
              <motion.div
                className="absolute left-20 right-20 top-8 h-0.5 bg-primary dark:bg-secondary"
                initial={{scaleX: 0, transformOrigin: "left"}}
                whileInView={{scaleX: 1}}
                viewport={{once: true}}
                transition={{duration: 0.8, ease: "easeInOut"}}></motion.div>

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
  isLast,
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
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5, delay}}>
      {/* Number box */}
      <motion.div
        className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-lg ${color} text-white shadow-md`}
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        viewport={{once: true}}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: delay + 0.2,
        }}>
        <span className="text-2xl font-bold">{number}</span>
      </motion.div>

      {/* Content */}
      <div className="mt-4 text-center max-w-[160px] sm:max-w-[200px]">
        <motion.p
          className="text-sm font-medium md:text-base text-gray-900 dark:text-white"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: delay + 0.3}}>
          {title}
        </motion.p>

        <motion.p
          className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: delay + 0.4}}>
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
