import React from "react";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {IconChartBar, IconWallet, IconClock, IconBulb} from "@tabler/icons-react";
import {Button} from "./ui/button";
import {ArrowRight, Sparkles} from "lucide-react";
import Link from "next/link";

interface BentoGridSectionProps {
  flowProvidesSubtitle?: string;
  providesCard1Title?: string;
  providesCard1Subtitle?: string;
  providesCard2Title?: string;
  providesCard2Subtitle?: string; 
  providesCard3Title?: string;
  providesCard3Subtitle?: string;
  providesCard4Title?: string;
  providesCard4Subtitle?: string;
}

export function BentoGridSection({
  flowProvidesSubtitle = "KlaimFlow provides instant cash and peace of mind to focus your efforts on running and growing your business",
  providesCard1Title = "Financial Stability",
  providesCard1Subtitle = "Always have funds available for expenses, payroll, and reinvestment.",
  providesCard2Title = "Predictable Cash Flow",
  providesCard2Subtitle = "Know exactly when you'll get paid.",
  providesCard3Title = "Less Time Managing Cash Flow",
  providesCard3Subtitle = "Focus on growth, not chasing payments.",
  providesCard4Title = "Confidence in Every Decision",
  providesCard4Subtitle = "Plan ahead with certainty knowing your revenue is accessible.",
}: BentoGridSectionProps) {
  const items = [
    {
      title: providesCard1Title,
      description: providesCard1Subtitle,
      header: <FinancialStabilitySkeleton />,
      className: "md:col-span-2",
      icon: <IconWallet className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: providesCard2Title,
      description: providesCard2Subtitle,
      header: <PredictableCashFlowSkeleton />,
      className: "md:col-span-1",
      icon: <IconChartBar className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: providesCard3Title,
      description: providesCard3Subtitle,
      header: <LessTimeSkeleton />,
      className: "md:col-span-1",
      icon: <IconClock className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: providesCard4Title,
      description: providesCard4Subtitle,
      header: <ConfidenceSkeleton />,
      className: "md:col-span-2",
      icon: <IconBulb className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <section
      id="what-klaimflow-provides"
      className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Subtle Gradient Effects */}
      <div className="absolute z-0 w-[40%] h-[30%] top-0 left-0 bg-primary/10 dark:bg-primary/15 blur-[120px] rounded-full opacity-40 dark:opacity-50"></div>
      <div className="absolute z-0 w-[50%] h-[40%] rounded-full bg-secondary/10 dark:bg-secondary/15 blur-[150px] bottom-0 opacity-40 dark:opacity-50 left-1/2 -translate-x-1/2"></div>

      {/* Additional subtle glows */}
      <div className="absolute z-0 w-[30%] h-[30%] top-40 right-[10%] bg-purple-500/5 dark:bg-purple-500/10 blur-[100px] rounded-full opacity-30 dark:opacity-40"></div>
      <div className="absolute z-0 w-[25%] h-[25%] bottom-[20%] left-[5%] bg-blue-400/5 dark:bg-blue-400/10 blur-[100px] rounded-full opacity-30 dark:opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-secondary-900/30 border border-primary-200 dark:border-secondary-700 mb-10">
            <Sparkles className="h-5 w-5 text-primary dark:text-secondary-400 mr-2" />
            <span className="text-sm font-medium text-primary dark:text-secondary-400">Peace of Mind</span>
          </div>
          <h2 className="text-3xl font-poppins md:text-4xl lg:text-5xl font-semibold tracking-tight">
            What <span className="text-primary dark:text-secondary">KlaimFlow</span> Provides
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            {flowProvidesSubtitle}
          </p>
        </div>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[21rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>

        {/* CTA Button */}
        <div className="pt-16 flex justify-center">
          <Link href="#cta">
            <Button size="lg" className="group w-full sm:w-auto text-sm sm:text-base py-8 sm:py-6 bg-primary text-white shadow-lg  transition-all">
              <span className="whitespace-normal font-poppins sm:whitespace-nowrap">Apply Now</span>{" "}
              <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Predictable Cash Flow Skeleton - Enhanced version
const PredictableCashFlowSkeleton = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-gradient-to-br from-primary via-blue-400 to-secondary group">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"></div>

      {/* Content wrapper */}
      <div className="w-full h-full flex items-center justify-center p-4 z-10">
        {/* Conceptual illustration of predictable cash flow */}
        <div className="relative w-full max-w-xs">
          {/* Central calendar element */}
          <div className="relative z-20 bg-white/30 backdrop-blur-md rounded-xl border border-white/40 shadow-xl mx-auto w-36 h-36 flex flex-col overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-105">
            {/* Calendar header */}
            <div className="bg-white/80 p-1 text-center">
              <div className="text-xs font-bold text-primary">JUNE</div>
            </div>

            {/* Calendar grid */}
            <div className="flex-1 grid grid-cols-5 grid-rows-4 gap-px bg-white/20 p-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-center text-[8px] font-medium rounded-sm ${
                    i < 14 ? "bg-white/60 text-gray-800" : i === 14 ? "bg-green-400/90 text-white font-bold" : "bg-white/20 text-white/70"
                  }`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Flowing cash streams with enhanced animations */}
          <div className="absolute top-1/2 left-1/2 w-full h-24 -translate-x-1/2 -translate-y-1/2 -rotate-12 z-10 transition-all duration-500 ease-in-out group-hover:scale-110">
            {/* Left to right money flow (past) - with enhanced animations */}
            <div className="absolute left-0 h-4 w-full">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-8 w-8 rounded-full bg-green-300 shadow-lg flex items-center justify-center"
                  style={{
                    left: `${i * 20}%`,
                    top: `-${i * 5}px`,
                    opacity: 0.8 - i * 0.1,
                    transform: `scale(${1 - i * 0.1})`,
                    zIndex: 20 - i,
                  }}>
                  <div className="text-green-800 font-bold text-xs">$</div>
                </div>
              ))}
            </div>

            {/* Left to right money flow (future) */}
            <div className="absolute left-0 bottom-0 h-4 w-full">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    right: `${i * 20}%`,
                    bottom: `-${i * 5}px`,
                    opacity: 0.7 - i * 0.1,
                    transform: `scale(${1 - i * 0.1})`,
                    zIndex: 20 - i,
                  }}
                  className="absolute h-8 w-8 rounded-full bg-blue-300 shadow-lg flex items-center justify-center">
                  <div className="text-blue-800 font-bold text-xs">$</div>
                </div>
              ))}
            </div>
          </div>

          {/* Line graph with enhanced animations */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center z-0 transition-all duration-300 ease-in-out group-hover:scale-105">
            <svg className="w-full h-20" viewBox="0 0 100 40">
              {/* Grid lines */}
              <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="2,2" />

              {/* Smooth flow line */}
              <path
                d="M0,25 C10,23 20,18 30,18 C40,18 45,22 50,22 C55,22 60,18 70,18 C80,18 90,22 100,20"
                fill="none"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Future projection (dashed) */}
              <path
                d="M70,18 C80,18 90,16 100,15"
                fill="none"
                stroke="rgba(74,222,128,0.9)"
                strokeWidth="2"
                strokeDasharray="3,2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Text labels with subtle animations */}
          <div className="absolute top-3 left-4 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg z-30 transition-all duration-200 ease-in-out group-hover:bg-white/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-primary">Predictable</div>
          </div>
          <div className="absolute bottom-3 right-4 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg z-30 transition-all duration-200 ease-in-out group-hover:bg-white/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-green-600">On time, every time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Financial Stability Skeleton - Enhanced version
const FinancialStabilitySkeleton = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-gradient-to-br from-primary via-blue-400 to-secondary group">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm animate-float-slow"></div>
        <div className="absolute bottom-6 right-10 w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm animate-float-slow animation-delay-1000"></div>
        <div className="absolute top-1/3 right-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm animate-float-slow animation-delay-2000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px] opacity-30"></div>

        {/* Abstract graph lines */}
        <svg className="absolute bottom-0 left-0 w-full h-24 opacity-20" viewBox="0 0 100 20">
          <path d="M0,10 C20,5 40,15 60,10 C80,5 100,10 100,10" stroke="white" fill="none" strokeWidth="0.5" />
          <path d="M0,15 C30,10 50,20 70,15 C90,10 100,15 100,15" stroke="white" fill="none" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content wrapper */}
      <div className="w-full h-full flex items-center justify-center p-4 z-10">
        <div className="relative w-full max-w-xs">
          {/* Cards stack */}
          <div className="relative mx-auto w-44 h-32 z-20 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-105">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-32 h-20 rounded-lg shadow-lg absolute border border-white/20 transition-all duration-300 ease-in-out ${
                  i === 0
                    ? "bg-gradient-to-br from-blue-400/90 to-purple-400/90 backdrop-blur-md group-hover:shadow-xl"
                    : i === 1
                    ? "bg-gradient-to-br from-green-400/90 to-emerald-300/90 backdrop-blur-md -rotate-6 group-hover:-rotate-7 group-hover:shadow-xl"
                    : "bg-gradient-to-br from-amber-300/90 to-orange-400/90 backdrop-blur-md rotate-6 group-hover:rotate-7 group-hover:shadow-xl"
                }`}
                style={{
                  transform: `translateY(${i * 6}px) rotate(${i === 1 ? -6 : i === 2 ? 6 : 0}deg)`,
                  zIndex: 20 - i,
                  transition: "all 0.3s ease-in-out",
                }}>
                <div className="absolute top-3 left-3 h-3 w-8 rounded-md bg-amber-200/80"></div>
                <div className="absolute bottom-3 left-3 w-7 h-2 rounded-full bg-white/40"></div>
                <div className="absolute bottom-7 left-3 w-5 h-2 rounded-full bg-white/40"></div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/60"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Sparkles/stars animation */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  opacity: Math.random() * 0.7 + 0.3,
                }}></div>
            ))}
          </div>

          {/* Safety shield icon in the background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 z-0 opacity-10 transition-opacity duration-300 ease-in-out group-hover:opacity-15">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="white" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Labels */}
          <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg z-40 transition-all duration-200 ease-in-out group-hover:bg-white/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-primary">Financial Stability</div>
          </div>
          <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg z-40 transition-all duration-200 ease-in-out group-hover:bg-white/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-green-600">Solid Foundation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Less Time Managing Cash Flow Skeleton - Enhanced version
const LessTimeSkeleton = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-gradient-to-br from-primary via-blue-400 to-secondary group">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"></div>

      {/* Content wrapper */}
      <div className="w-full h-full flex items-center justify-center p-4 z-10">
        <div className="relative w-full max-w-xs">
          {/* Main clock face with hover animation */}
          <div className="relative mx-auto w-28 h-28 rounded-full bg-white/30 backdrop-blur-md border-4 border-white/40 shadow-lg flex items-center justify-center z-20 transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:scale-105">
            {/* Clock markers */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-3 bg-white/70"
                style={{
                  transform: `rotate(${i * 30}deg) translateY(-11.5px)`,
                  transformOrigin: "bottom center",
                  left: "50%",
                  bottom: "50%",
                }}
              />
            ))}

            {/* Clock hands with hover animation */}
            <div
              className="w-1.5 h-10 bg-white absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rounded-full shadow-md transition-transform duration-500 ease-in-out"
              style={{transform: "rotate(-30deg) translateY(-2px)"}}
            />
            <div
              className="w-1 h-7 bg-blue-400 absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rounded-full shadow-sm transition-transform duration-700 ease-in-out group-hover:rotate-[155deg]"
              style={{transform: "rotate(145deg) translateY(-2px)"}}
            />

            {/* Center dot */}
            <div className="w-3 h-3 rounded-full bg-white/90 absolute" />
          </div>

          {/* Fast forward circular arrow with hover animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 z-10 transition-all duration-300 ease-in-out group-hover:rotate-12">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="fastForwardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(74,222,128,0.9)" />
                </linearGradient>
              </defs>
              <path
                d="M85,50 A35,35 0 1,1 50,15"
                fill="none"
                stroke="url(#fastForwardGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="5,3"
              />
              {/* Arrow head */}
              <path d="M48,8 L50,15 L57,12" fill="none" stroke="rgba(74,222,128,0.9)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Tasks flying away with enhanced hover animation */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/80 backdrop-blur-sm rounded-md p-1.5 shadow-lg flex items-center transition-all duration-500 ease-in-out group-hover:translate-x-8"
              style={
                {
                  transform: `rotate(${i * 15 - 25}deg) translate(${80 + i * 15}px, ${i % 2 === 0 ? -20 - i * 5 : 20 + i * 5}px) scale(${
                    1 - i * 0.15
                  })`,
                  opacity: 0.9 - i * 0.2,
                  zIndex: 15 - i,
                  width: `${Math.max(60 - i * 10, 40)}px`,
                  "--hover-distance": `${100 + i * 30}px`,
                  "--hover-rotation": `${i * 15 - 25 + (i % 2 === 0 ? -5 : 5)}deg`,
                } as React.CSSProperties
              }>
              <div
                className="w-3 h-3 rounded-sm mr-1.5"
                style={{
                  backgroundColor: i === 0 ? "#4ADE80" : i === 1 ? "#3B82F6" : i === 2 ? "#EC4899" : "#A855F7",
                }}></div>
              <div className="flex-1 h-1.5 rounded-full bg-gray-300"></div>
            </div>
          ))}

          {/* Labels */}
          <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg z-30 transition-all duration-200 ease-in-out group-hover:bg-white/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-primary">Save time</div>
          </div>
          <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg z-30 transition-all duration-200 ease-in-out group-hover:bg-white/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-green-600">Focus on growth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Confidence in Every Decision Skeleton - Enhanced version
const ConfidenceSkeleton = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-gradient-to-br from-primary via-blue-400 to-secondary group">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background pattern - interconnected nodes */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px] opacity-40"></div>

        {/* Floating elements */}
        <div className="absolute top-6 left-8 w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm animate-float-slow"></div>
        <div className="absolute bottom-10 right-12 w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm animate-float-slow animation-delay-2000"></div>

        {/* Abstract wave patterns */}
        <svg className="absolute inset-x-0 top-0 w-full h-16 opacity-10" viewBox="0 0 100 20">
          <path d="M0,10 C10,12 20,8 30,10 C40,12 50,8 60,10 C70,12 80,8 90,10 C100,12 110,8 120,10" stroke="white" fill="none" strokeWidth="0.5" />
        </svg>
        <svg className="absolute inset-x-0 bottom-0 w-full h-16 opacity-10" viewBox="0 0 100 20">
          <path d="M0,10 C10,8 20,12 30,10 C40,8 50,12 60,10 C70,8 80,12 90,10 C100,8 110,12 120,10" stroke="white" fill="none" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Main content wrapper */}
      <div className="w-full h-full flex items-center justify-center p-4 z-10">
        <div className="relative w-full max-w-xs">
          {/* 3D compass/navigation element - main visualization */}
          <div className="relative mx-auto w-36 h-36 z-20 transition-all duration-500 ease-in-out group-hover:scale-105">
            {/* Outer ring with glow effect */}
            <div className="absolute inset-0 rounded-full border-4 border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-spin-slow-reverse"></div>

            {/* Middle ring */}
            <div className="absolute inset-4 rounded-full border-2 border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>

            {/* Inner circle with gradient */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-400/60 to-purple-500/60 backdrop-blur-md shadow-lg flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>

              {/* Replace star with lightbulb */}
              <div className="relative w-10 h-10 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                {/* Lightbulb glass */}
                <div className="w-8 h-8 rounded-full bg-yellow-300/90 overflow-hidden shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out group-hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] relative">
                  {/* Light flicker effect */}
                  <div className="absolute inset-0 bg-yellow-200/80 animate-flicker mix-blend-overlay"></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 via-yellow-100/50 to-yellow-200/20 animate-shimmer"></div>

                  {/* Rays of light */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-0.5 bg-yellow-100/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center animate-pulse"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                          animationDelay: `${i * 0.1}s`,
                        }}></div>
                    ))}
                  </div>

                  {/* Filament */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-0.5 h-4 bg-yellow-500/70 rounded-full"></div>
                    <div className="w-4 h-0.5 bg-yellow-500/70 rounded-full"></div>
                  </div>
                </div>

                {/* Bulb base */}
                <div className="w-4 h-1.5 bg-gray-100/80 absolute -bottom-1 rounded-sm"></div>
                <div className="w-3 h-2 bg-gray-100/60 absolute -bottom-3 rounded-sm"></div>
              </div>
            </div>

            {/* Directional pointers */}
            {["N", "E", "S", "W"].map((dir, i) => (
              <div
                key={dir}
                className="absolute w-8 h-8 flex items-center justify-center"
                style={{
                  transform: `rotate(${i * 90}deg) translateY(-16px)`,
                  transformOrigin: "center calc(100% + 16px)",
                  top: "50%",
                  left: "50%",
                }}>
                <div className="w-1 h-6 bg-white/50 rounded-full"></div>
                <div className="absolute -top-6 text-xs font-bold text-white/80">{dir}</div>
              </div>
            ))}
          </div>

          {/* Dynamic decision elements - radiating from compass */}
          <div className="absolute inset-0 z-10">
            {/* Radiating paths animation */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="pathGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(56,189,248,0.3)" />
                </linearGradient>
                <linearGradient id="pathGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(167,139,250,0.3)" />
                </linearGradient>
                <linearGradient id="pathGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(16,185,129,0.3)" />
                </linearGradient>
              </defs>

              {/* Pulsing circles around compass */}
              <circle cx="100" cy="100" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
              <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

              {/* Decision paths radiating outward */}
              {[...Array(6)].map((_, i) => {
                const angle = i * 60 * (Math.PI / 180);
                const startX = 100 + 45 * Math.cos(angle);
                const startY = 100 + 45 * Math.sin(angle);
                const endX = 100 + 90 * Math.cos(angle);
                const endY = 100 + 90 * Math.sin(angle);
                const controlX = 100 + 60 * Math.cos(angle);
                const controlY = 100 + 60 * Math.sin(angle);

                return (
                  <g key={i} className="transition-all duration-300 ease-in-out group-hover:opacity-100">
                    <path
                      d={`M${startX},${startY} Q${controlX},${controlY} ${endX},${endY}`}
                      stroke={`url(#pathGradient${(i % 3) + 1})`}
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="3,2"
                      className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                    <circle
                      cx={endX}
                      cy={endY}
                      r="3"
                      fill="white"
                      className="animate-pulse"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Decision outcome nodes */}
            {[...Array(4)].map((_, i) => {
              const angle = (i * 90 + 45) * (Math.PI / 180);
              const distance = 90;
              const x = 100 + distance * Math.cos(angle);
              const y = 100 + distance * Math.sin(angle);

              return (
                <div
                  key={i}
                  className="absolute w-10 h-10 flex items-center justify-center"
                  style={{
                    top: `${y / 2}%`,
                    left: `${x / 2}%`,
                    transform: "translate(-50%, -50%)",
                    zIndex: 30,
                  }}>
                  <div className="w-full h-full rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    {i === 0 && <span className="text-xs font-bold text-white">✓</span>}
                    {i === 1 && <span className="text-xs font-bold text-white">↗</span>}
                    {i === 2 && <span className="text-xs font-bold text-white">↝</span>}
                    {i === 3 && <span className="text-xs font-bold text-white">+</span>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sparkles animation */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.4}s`,
                  opacity: Math.random() * 0.7 + 0.3,
                }}></div>
            ))}
          </div>

          {/* Labels */}
          <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg z-40 transition-all duration-200 ease-in-out group-hover:bg-white/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-primary">Confident Choices</div>
          </div>
          <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg z-40 transition-all duration-200 ease-in-out group-hover:bg-white/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-green-600">Clear Direction</div>
          </div>
        </div>
      </div>
    </div>
  );
};
