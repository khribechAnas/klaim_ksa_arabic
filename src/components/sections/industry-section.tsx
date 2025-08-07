"use client";

import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Building2,
  Home,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  TrendingUp,
  Key,
} from "lucide-react";
import { FeatureIconContainer } from "../ui/feature-icon";

type Industry = "healthcare" | "sme" | "realestate";

interface IndustryTabsProps {
  activeTab: Industry;
  setActiveTab: (tab: Industry) => void;
  className?: string;
}

function IndustryTabs({
  activeTab,
  setActiveTab,
  className,
}: IndustryTabsProps) {
  return (
    <div
      className={cn(
        "relative flex w-fit items-center rounded-full border p-0.5 backdrop-blur-sm cursor-pointer h-10 flex-row bg-muted",
        className
      )}
    >
      {["healthcare", "sme", "realestate"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab as Industry)}
          className={cn(
            "relative z-[1] px-4 h-9 flex items-center justify-center cursor-pointer gap-2"
          )}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-industry-tab"
              className="absolute inset-0 rounded-full bg-white dark:bg-[#3F3F46] shadow-md border border-border z-0"
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 25,
                velocity: 2,
              }}
            />
          )}
          <div className="relative z-10 flex items-center gap-2">
            {tab === "healthcare" && (
              <Stethoscope
                className={cn(
                  "w-4 h-4 transition-colors duration-200",
                  activeTab === tab ? "text-primary" : "text-muted-foreground"
                )}
              />
            )}
            {tab === "sme" && (
              <TrendingUp
                className={cn(
                  "w-4 h-4 transition-colors duration-200",
                  activeTab === tab ? "text-primary" : "text-muted-foreground"
                )}
              />
            )}
            {tab === "realestate" && (
              <Key
                className={cn(
                  "w-4 h-4 transition-colors duration-200",
                  activeTab === tab ? "text-primary" : "text-muted-foreground"
                )}
              />
            )}
            <span
              className={cn(
                "block text-sm font-medium duration-200 shrink-0",
                activeTab === tab ? "text-primary" : "text-muted-foreground"
              )}
            >
              {tab === "healthcare"
                ? "Healthcare"
                : tab === "sme"
                ? "SME"
                : "Real Estate"}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}

const industryData = {
  healthcare: {
    title: "Klaim Health",
    subtitle: "Clinics, hospitals, medical groups",
    tagline: "Treat your patient today, receive payment tomorrow",
    problem: "Delayed insurance payments",
    solution: "Instant claim payout with AI risk engine",
    cta: "Talk to Our Healthcare Specialists",
    icon: Heart,
    backgroundImage: "/industry_healthcare.jpg",
    href: "/health",
  },
  sme: {
    title: "Klaim Flow",
    subtitle: "SMEs with large invoices & long receivables",
    tagline: "Deliver your service today, receive payment tomorrow",
    problem: "Cashflow gaps due to slow client payments",
    solution: "Invoice financing + escrow model",
    cta: "Apply Now",
    icon: Building2,
    backgroundImage: "/industry_SMEs.jpg",
    href: "/flow",
  },
  realestate: {
    title: "Klaim Estate",
    subtitle: "Real estate brokers & agents",
    tagline: "Close your deal today, receive payment tomorrow",
    problem: "Waiting months for commission payout",
    solution: "Instant commission payout after sale confirmation",
    cta: "Claim Your Commission Now",
    icon: Home,
    backgroundImage: "/industry_realestate.jpg",
    href: "/estate",
  },
};

export function IndustrySection() {
  const [activeIndustry, setActiveIndustry] = useState<Industry>("sme");
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const industries = useMemo<Industry[]>(() => ["healthcare", "sme", "realestate"], []);

  const getNextIndustry = useCallback(
    (current: Industry): Industry => {
      const currentIndex = industries.indexOf(current);
      const nextIndex = (currentIndex + 1) % industries.length;
      return industries[nextIndex];
    },
    [industries]
  );

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setActiveIndustry((current) => getNextIndustry(current));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoRotating, getNextIndustry]);

  const handleTabChange = useCallback((tab: Industry) => {
    setActiveIndustry(tab);
    setIsAutoRotating(false);

    setTimeout(() => {
      setIsAutoRotating(true);
    }, 10000);
  }, []);

  const currentData = industryData[activeIndustry];
  const IconComponent = currentData.icon;

  return (
    <section
      id="sectors"
      className="flex flex-col items-center justify-center gap-16 py-20 w-full relative px-6"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          Which industry are you in?
        </h2>
        <p className="text-muted-foreground font-inter text-center text-balance font-medium">
          Discover how Klaim can solve your industry-specific challenges
        </p>
      </SectionHeader>

      <div className="flex flex-col items-center gap-12 w-full max-w-7xl mx-auto">
        <IndustryTabs
          activeTab={activeIndustry}
          setActiveTab={handleTabChange}
          className="mx-auto"
        />

        <motion.div
          key={activeIndustry}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="w-full"
        >
          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center px-4 sm:px-8 lg:px-32">
            {/* Left Side - Card with Background Image and Tagline */}
            <div className="relative order-1">
              <Link href={currentData.href} className="block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="relative rounded-3xl overflow-hidden border border-border transition-transform duration-200 ease-out hover:scale-105 active:scale-95 cursor-pointer"
                >
                  {/* Card Background Image */}
                  <div className="relative h-[300px] sm:h-[350px] lg:h-[500px] flex flex-col justify-end items-start">
                    <Image
                      src={currentData.backgroundImage}
                      alt={`${currentData.title} background`}
                      fill
                      className="object-cover"
                    />

                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Tagline at Bottom Left */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="relative z-10 p-4 sm:p-6 lg:p-8"
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-medium text-white text-balance leading-tight max-w-xs sm:max-w-sm lg:max-w-md">
                        {currentData.tagline}
                      </h3>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* Right Side - All Other Content */}
            <div className="relative order-2 space-y-6 lg:space-y-8">
              {/* Logo and Title */}
              <Link href={currentData.href} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-3 sm:gap-4 transition-transform duration-200 ease-out hover:scale-105 active:scale-95 cursor-pointer group"
                >
                  <FeatureIconContainer className="flex items-center justify-center overflow-hidden group-hover:bg-secondary/10 transition-colors duration-200">
                    <IconComponent className="h-6 w-6 text-secondary group-hover:text-secondary/80 transition-colors duration-200" />
                  </FeatureIconContainer>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold tracking-tight text-primary group-hover:text-primary/80 transition-colors duration-200">
                      {currentData.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">
                      {currentData.subtitle}
                    </p>
                  </div>
                </motion.div>
              </Link>

              {/* Problem and Solution Cards */}
              <div className="space-y-3 sm:space-y-4">
                {/* Problem Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-background/80 backdrop-blur-md border border-border/50 rounded-xl p-3 sm:p-4 shadow-sm hover:bg-background/90 transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-red-50 dark:bg-red-950/20 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-xs sm:text-sm mb-1 text-primary">
                        Problem
                      </h5>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {currentData.problem}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Solution Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="bg-background/80 backdrop-blur-md border border-border/50 rounded-xl p-3 sm:p-4 shadow-sm hover:bg-background/90 transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-50 dark:bg-green-950/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-xs sm:text-sm mb-1 text-primary">
                        Solution
                      </h5>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {currentData.solution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="pt-2 sm:pt-4"
              >
                <Link href={`${currentData.href}#contact`}>
                  <button className="group h-10 sm:h-11 w-full sm:w-auto flex items-center justify-center px-4 sm:px-6 text-xs sm:text-sm font-medium tracking-wide rounded-full transition-all ease-out active:scale-95 bg-secondary text-white hover:bg-secondary/90 border border-secondary/10 shadow-md hover:shadow-lg">
                    {currentData.cta}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
