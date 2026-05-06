"use client";
import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Clock, AlertTriangle, DollarSign } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import InfinityLoopDiagram from "@/components/ui/infinity-loop-diagram";
import { useTranslations } from 'next-intl';

interface ProblemPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
  impact: string;
}

interface ProblemSectionProps {
  headline?: string;
  problems?: ProblemPoint[];
  className?: string;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({
  headline,
  problems,
  className = "",
}) => {
  const t = useTranslations();

  const defaultHeadline = t('health.problems.headline');
  const defaultProblems = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('health.problems.items.0.title'),
      description: t('health.problems.items.0.description'),
      impact: t('health.problems.items.0.impact'),
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: t('health.problems.items.1.title'),
      description: t('health.problems.items.1.description'),
      impact: t('health.problems.items.1.impact'),
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: t('health.problems.items.2.title'),
      description: t('health.problems.items.2.description'),
      impact: t('health.problems.items.2.impact'),
    },
  ];

  const finalHeadline = headline || defaultHeadline;
  const finalProblems = problems || defaultProblems;
  const [currentProblem, setCurrentProblem] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / 40);
      } else {
        setCurrentProblem((prev) => (prev + 1) % finalProblems.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, finalProblems.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="problems"
      className={`flex flex-col items-center justify-center gap-16 pb-20 w-full relative px-6 ${className}`}
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
          {finalHeadline}
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          {t('health.problems.description')}
        </p>
      </SectionHeader>

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 ml-6"
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              {finalProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  className={`bg-background cursor-default rounded-xl p-5 border border-border hover:shadow-md transition-all duration-300 ${
                    index === currentProblem
                      ? "shadow-lg border-secondary/20 bg-secondary/5"
                      : ""
                  }`}
                  animate={{
                    scale: index === currentProblem ? 1.02 : 1,
                    opacity: index === currentProblem ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-colors duration-300 ${
                        index === currentProblem
                          ? "bg-secondary/20 text-secondary"
                          : "bg-accent/50 text-primary"
                      }`}
                    >
                      {problem.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium font-poppins text-primary text-md mb-1">
                        {problem.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {problem.description}
                      </p>
                      <div
                        className={`text-xs font-medium mt-2 transition-colors duration-300 ${
                          index === currentProblem
                            ? "text-destructive"
                            : "text-muted-foreground"
                        }`}
                      >
                        {t('health.problems.impactLabel')}: {problem.impact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Progress indicators */}
            <motion.div className="flex gap-2" variants={itemVariants}>
              {finalProblems.map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-1 bg-muted rounded-full overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-secondary rounded-full"
                    initial={{ width: "0%" }}
                    animate={{
                      width:
                        index === currentProblem
                          ? `${progress}%`
                          : index < currentProblem
                          ? "100%"
                          : "0%",
                    }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Section - Infinity Loop Diagram */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative z-10 bg-background rounded-2xl overflow-hidden border border-border shadow-xl">
              <InfinityLoopDiagram />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
