"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface RiskFactor {
  label: string;
  score: number;
  status: "analyzing" | "completed";
  icon: string;
}

const riskFactors: RiskFactor[] = [
  {
    label: "Business History",
    score: 92,
    status: "analyzing",
    icon: "🏢",
  },
  {
    label: "Revenue Stability",
    score: 88,
    status: "analyzing",
    icon: "📈",
  },
  {
    label: "Credit Profile",
    score: 85,
    status: "analyzing",
    icon: "💳",
  },
];

interface RiskFactorItemProps {
  factor: RiskFactor;
  delay: number;
  shouldAnimate: boolean;
}

function RiskFactorItem({ factor, delay, shouldAnimate }: RiskFactorItemProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) {
      setIsAnalyzing(true);
      setCurrentScore(0);
      return;
    }

    // Start analysis after delay
    const analysisTimeout = setTimeout(() => {
      setIsAnalyzing(true);

      // Animate score counting
      const scoreTimeout = setTimeout(() => {
        let current = 0;
        const increment = factor.score / 15;
        const scoreInterval = setInterval(() => {
          current += increment;
          if (current >= factor.score) {
            setCurrentScore(factor.score);
            setIsAnalyzing(false);
            clearInterval(scoreInterval);
          } else {
            setCurrentScore(Math.floor(current));
          }
        }, 40);
      }, 800);

      return () => clearTimeout(scoreTimeout);
    }, delay * 1000);

    return () => clearTimeout(analysisTimeout);
  }, [shouldAnimate, factor.score, delay]);

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-emerald-400";
    if (score >= 70) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      animate={{
        opacity: shouldAnimate ? 1 : 0,
        x: shouldAnimate ? 0 : -15,
      }}
      transition={{
        duration: 0.3,
        delay: delay,
        ease: "easeOut",
      }}
      className="flex items-center justify-between px-2 py-1.5 rounded-md bg-secondary/15 border border-secondary/20"
    >
      <div className="flex items-center gap-2">
        <span className="text-sm">{factor.icon}</span>
        <span className="text-xs font-medium text-white">{factor.label}</span>
      </div>

      <div className="flex items-center gap-1">
        {isAnalyzing ? (
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-1 h-1 bg-blue-400 rounded-full"
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: index * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <span
              className={`text-xs font-bold ${getScoreColor(currentScore)}`}
            >
              {currentScore}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function OverallAssessment({
  shouldAnimate,
  startDelay,
}: {
  shouldAnimate: boolean;
  startDelay: number;
}) {
  const [showAssessment, setShowAssessment] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) {
      setShowAssessment(false);
      setPayoutAmount(0);
      return;
    }

    const assessmentTimeout = setTimeout(() => {
      setShowAssessment(true);

      // Animate payout amount
      let current = 0;
      const target = 25000;
      const increment = target / 20;
      const payoutInterval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setPayoutAmount(target);
          clearInterval(payoutInterval);
        } else {
          setPayoutAmount(Math.floor(current));
        }
      }, 40);
    }, startDelay * 1000);

    return () => clearTimeout(assessmentTimeout);
  }, [shouldAnimate, startDelay]);

  if (!showAssessment) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="mt-3 p-3 rounded-lg bg-gradient-to-r from-emerald-500/15 to-blue-500/15 border border-emerald-500/20"
    >
      <div className="text-center space-y-1">
        <div className="flex items-center justify-center gap-1">
          <span className="text-sm">🤖</span>
          <span className="text-xs font-medium text-emerald-400">
            Assessment Complete
          </span>
        </div>
        <div className="text-[10px] text-gray-400">
          Risk Score: 89/100 (Low Risk)
        </div>
        <div className="mt-2 p-2 rounded-md bg-emerald-500/10 border border-emerald-500/20">
          <div className="text-[10px] text-gray-400 mb-0.5">Approved Limit</div>
          <div className="text-lg font-bold text-emerald-400">
            ${payoutAmount.toLocaleString()}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ThirdBentoAnimation({
  startAnimationDelay = 0,
  once = false,
}: {
  startAnimationDelay?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setShouldAnimate(true);
      }, startAnimationDelay * 1000);
      return () => clearTimeout(timeout);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView, startAnimationDelay]);

  return (
    <div
      ref={ref}
      className="relative flex size-full items-center justify-center p-4 overflow-hidden"
    >
      <div className="w-full max-w-xs space-y-2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{
            opacity: shouldAnimate ? 1 : 0,
            y: shouldAnimate ? 0 : -8,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="text-center mb-3"
        >
          <div className="flex items-center justify-center gap-1 mb-1">
            <span className="text-base">🧠</span>
            <span className="text-sm font-semibold text-white">
              AI Risk Analysis
            </span>
          </div>
          <span className="text-[10px] text-gray-400">
            Evaluating profile...
          </span>
        </motion.div>

        {/* Risk Factors */}
        <div className="space-y-2">
          {riskFactors.map((factor, index) => (
            <RiskFactorItem
              key={factor.label}
              factor={factor}
              delay={startAnimationDelay + 0.3 + index * 0.2}
              shouldAnimate={shouldAnimate}
            />
          ))}
        </div>

        {/* Overall Assessment */}
        <OverallAssessment
          shouldAnimate={shouldAnimate}
          startDelay={startAnimationDelay + 1.5}
        />
      </div>
    </div>
  );
}
