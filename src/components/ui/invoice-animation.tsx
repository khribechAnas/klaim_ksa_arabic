"use client";

import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
} & Accordion.AccordionItemProps;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn(
        "mt-px overflow-hidden focus-within:relative focus-within:z-10",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);
AccordionItem.displayName = "AccordionItem";

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "group flex h-[45px] flex-1 cursor-pointer items-center justify-between p-3 text-[15px] leading-none outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = {
  children: ReactNode;
  className?: string;
} & Accordion.AccordionContentProps;

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "overflow-hidden text-[15px] font-medium data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="p-3">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

type FeatureItem = {
  id: number;
  title: string;
  content: string;
};

type InvoiceAnimationProps = {
  collapseDelay?: number;
  ltr?: boolean;
  linePosition?: "left" | "right" | "top" | "bottom";
  lineColor?: string;
  featureItems: FeatureItem[];
  className?: string;
};

const Background = () => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full",
        "bg-[radial-gradient(circle_at_0.5px_0.5px,rgba(0,0,0,0.2)_0.5px,transparent_0)]",
        "dark:bg-[radial-gradient(circle_at_0.5px_0.5px,rgba(255,255,255,0.2)_0.5px,transparent_0)]",
        "bg-repeat",
        "[background-size:8px_8px]"
      )}
    />
  );
};

export const InvoiceAnimation = ({
  collapseDelay = 5000,
  ltr = false,
  linePosition = "left",
  lineColor = "bg-neutral-500 dark:bg-white",
  featureItems,
  className,
}: InvoiceAnimationProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const carouselRef = useRef<HTMLUListElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  // Initialize current index when component comes into view
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInView) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(-1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isInView]);

  // Auto-advance interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex =
          prevIndex !== undefined ? (prevIndex + 1) % featureItems.length : 0;
        // Trigger button press animation when moving from step 0 to step 1
        if (prevIndex === 0 && nextIndex === 1) {
          setButtonPressed(true);
          setTimeout(() => setButtonPressed(false), 500);
        }
        return nextIndex;
      });
    }, collapseDelay);

    return () => clearInterval(timer);
  }, [collapseDelay, currentIndex, featureItems.length]);

  // Mobile carousel scroll handling
  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelectorAll(".card")[index];
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const offset =
          cardRect.left -
          carouselRect.left -
          (carouselRect.width - cardRect.width) / 2;

        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + offset,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const handleAutoScroll = () => {
      const nextIndex =
        (currentIndex !== undefined ? currentIndex + 1 : 0) %
        featureItems.length;
      scrollToIndex(nextIndex);
    };

    const autoScrollTimer = setInterval(handleAutoScroll, collapseDelay);
    return () => clearInterval(autoScrollTimer);
  }, [collapseDelay, currentIndex, featureItems.length]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleScroll = () => {
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = carousel.querySelector(".card")?.clientWidth || 0;
        const newIndex = Math.min(
          Math.floor(scrollLeft / cardWidth),
          featureItems.length - 1
        );
        setCurrentIndex(newIndex);
      };

      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [featureItems.length]);

  // Invoice animation component
  const renderInvoiceAnimation = () => {
    if (currentIndex === -1) {
      return (
        <div className="aspect-auto h-full w-full rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
      );
    }

    // Different animation types for each step
    const renderStepContent = (stepIndex: number) => {
      switch (stepIndex) {
        case 0: // Step 1: Submit invoice - Skeleton lines
          return (
            <motion.div
              key={`skeleton-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 w-full px-2"
            >
              {[
                { width: "w-full", height: "h-4" },
                { width: "w-3/4", height: "h-3" },
                { width: "w-5/6", height: "h-3" },
                { width: "w-2/3", height: "h-4" },
                { width: "w-4/5", height: "h-3" },
                { width: "w-1/2", height: "h-3" },
              ].map((line, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-neutral-600/50 dark:bg-neutral-600/30 rounded animate-pulse",
                    line.width,
                    line.height
                  )}
                />
              ))}
            </motion.div>
          );

        case 1: // Step 2: AI evaluation - Processing animation
          return (
            <motion.div
              key={`processing-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center space-y-4 py-2 mb-6"
            >
              {/* AI Processing Icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-3 border-blue-500/30 border-t-blue-500 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <p className="text-blue-400 font-medium text-sm mb-2">
                  AI Evaluation
                </p>
                <div className="space-y-2">
                  <div className="w-32 h-2 bg-neutral-600/30 rounded animate-pulse" />
                  <div className="w-24 h-2 bg-neutral-600/30 rounded animate-pulse" />
                </div>
              </motion.div>
            </motion.div>
          );

        case 2: // Step 3: Payout received - Success state
          return (
            <motion.div
              key={`success-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
              className="flex flex-col items-center justify-center space-y-4 py-2"
            >
              {/* Success Checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  damping: 15,
                  stiffness: 400,
                }}
                className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center"
              >
                <motion.svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-green-400"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <motion.path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <p className="text-green-400 font-medium text-lg mb-1">
                  Payout received
                </p>
                <p className="text-neutral-400 text-xs">
                  Funds transferred successfully
                </p>
              </motion.div>
            </motion.div>
          );

        case 3: // Step 4: Repay when settled - Klaim flow animation
          return (
            <motion.div
              key={`klaim-flow-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center space-y-6 py-4"
            >
              {/* Klaim Logo Badge */}
              <motion.div
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  damping: 15,
                  stiffness: 400,
                }}
                className="relative"
              >
                <div className="bg-secondary rounded-full px-6 py-3 flex items-center space-x-2 shadow-lg">
                  {/* <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg> */}
                  <Image
                    src="/logo-white.svg"
                    alt="Klaim"
                    width={60}
                    height={20}
                    className="h-5 w-auto"
                  />
                </div>
              </motion.div>

              {/* Connecting Line */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="w-0.5 bg-secondary"
              />

              {/* Shield with Dollar Icon */}
              <motion.div
                initial={{ scale: 0, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                  delay: 1.0,
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
                className="relative"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center border-2 border-secondary/30">
                  <motion.svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <path
                      d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="rgba(168, 85, 247, 0.1)"
                    />
                    {/* Dollar Sign */}
                    <motion.line
                      x1="12"
                      y1="6"
                      x2="12"
                      y2="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                    />

                    <motion.path
                      d="M15 8H10.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1.4, duration: 0.8 }}
                    />
                  </motion.svg>
                </div>

                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-purple-400/50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5,
                  }}
                />
              </motion.div>
            </motion.div>
          );

        default:
          return (
            <div className="space-y-3">
              {[
                { width: "w-3/4", height: "h-4" },
                { width: "w-1/2", height: "h-3" },
                { width: "w-5/6", height: "h-3" },
              ].map((line, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-neutral-600/50 dark:bg-neutral-600/30 rounded animate-pulse",
                    line.width,
                    line.height
                  )}
                />
              ))}
            </div>
          );
      }
    };

    return (
      <div className="relative h-full w-full flex items-center justify-center bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden rounded-2xl p-8">
        {/* Simple spotlight effect */}
        {/* <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/20 dark:bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/30 dark:bg-white/15 rounded-full blur-2xl" />
        </div> */}

        <Background />

        {/* Centered Invoice Card */}
        <div className="relative w-80 translate-y-1/8 overflow-hidden bg-background rounded-t-4xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-6">
          {/* Invoice Header - Only show on step 1 */}
          {currentIndex === 0 && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-foreground font-medium text-sm">
                  Invoices
                </h3>
                <motion.button
                  className="bg-secondary hover:bg-secondary/80 text-white px-5 py-2 rounded-full text-xs font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={
                    buttonPressed
                      ? {
                          scale: [1, 0.9, 1.1, 1],
                          backgroundColor: [
                            "hsl(var(--secondary))",
                            "hsl(142, 76%, 36%)",
                            "hsl(var(--secondary))",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 0.4 }}
                >
                  Submit
                </motion.button>
              </div>
              {/* separator */}
              <motion.div
                className="w-full h-0.5 bg-zinc-200 dark:bg-zinc-800 my-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              />
            </>
          )}

          {/* Animated Step Content */}
          <div
            className={cn(
              "flex items-center justify-center",
              currentIndex === 0 ? "min-h-[120px]" : "min-h-[200px] py-8"
            )}
          >
            {renderStepContent(currentIndex)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <div className="flex w-full flex-col items-center justify-center max-w-7xl mx-auto">
        <div className="grid h-full grid-cols-5 gap-x-10 px-10 md:px-20 items-center w-full">
          <div
            className={`col-span-2 w-full h-full hidden lg:flex md:items-center ${
              ltr ? "md:order-2 md:justify-end" : "justify-start"
            }`}
          >
            <Accordion.Root
              className="w-full h-full flex flex-col gap-8"
              type="single"
              defaultValue={`item-${currentIndex}`}
              value={`item-${currentIndex}`}
              onValueChange={(value) =>
                setCurrentIndex(Number(value.split("-")[1]))
              }
            >
              {featureItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  className={cn(
                    "relative data-[state=open]:bg-white dark:data-[state=open]:bg-[#27272A] rounded-lg data-[state=closed]:rounded-none data-[state=closed]:border-0",
                    "dark:data-[state=open]:shadow-[0px_0px_0px_1px_rgba(249,250,251,0.06),0px_0px_0px_1px_var(--color-zinc-800,#27272A),0px_1px_2px_-0.5px_rgba(0,0,0,0.24),0px_2px_4px_-1px_rgba(0,0,0,0.24)]",
                    "data-[state=open]:shadow-[0px_0px_1px_0px_rgba(0,0,0,0.16),0px_1px_2px_-0.5px_rgba(0,0,0,0.16)]"
                  )}
                  value={`item-${index}`}
                >
                  <div
                    className={cn(
                      "absolute overflow-hidden rounded-lg transition-opacity",
                      "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
                      "bg-neutral-300/50 dark:bg-neutral-300/30",
                      {
                        "bottom-0 top-0 h-full w-0.5 left-0":
                          linePosition === "left",
                        "bottom-0 top-0 h-full w-0.5 right-0":
                          linePosition === "right",
                        "left-0 right-0 top-0 h-0.5 w-full":
                          linePosition === "top",
                        "left-0 right-0 bottom-0 h-0.5 w-full":
                          linePosition === "bottom",
                      }
                    )}
                    data-state={currentIndex === index ? "open" : "closed"}
                  >
                    <div
                      className={cn(
                        "absolute transition-all ease-linear",
                        lineColor,
                        {
                          "left-0 top-0 w-full": ["left", "right"].includes(
                            linePosition
                          ),
                          "left-0 top-0 h-full": ["top", "bottom"].includes(
                            linePosition
                          ),
                        },
                        currentIndex === index
                          ? ["left", "right"].includes(linePosition)
                            ? "h-full"
                            : "w-full"
                          : ["left", "right"].includes(linePosition)
                          ? "h-0"
                          : "w-0"
                      )}
                      style={{
                        transitionDuration:
                          currentIndex === index ? `${collapseDelay}ms` : "0s",
                      }}
                    />
                  </div>
                  <AccordionTrigger className="font-semibold text-lg tracking-tight text-left">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-inter font-medium">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion.Root>
          </div>
          <div
            className={`col-span-5 h-[320px] min-h-[320px] w-auto lg:col-span-3 ${
              ltr && "md:order-1"
            }`}
          >
            {renderInvoiceAnimation()}
          </div>

          {/* Mobile carousel - maintain existing functionality */}
          <ul
            ref={carouselRef}
            className="col-span-5 flex snap-x flex-nowrap overflow-x-auto [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_10%,white_90%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_10%,white_90%,transparent)] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden snap-mandatory"
            style={{
              padding: "50px calc(50%)",
            }}
          >
            {featureItems.map((item, index) => (
              <a
                key={item.id}
                className="card relative grid h-full max-w-64 shrink-0 items-start justify-center p-3 bg-background border-l last:border-r border-t border-b first:rounded-tl-xl last:rounded-tr-xl"
                onClick={() => setCurrentIndex(index)}
                style={{
                  scrollSnapAlign: "center",
                }}
              >
                <div
                  className={cn(
                    "absolute overflow-hidden rounded-lg transition-opacity",
                    "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
                    "bg-neutral-300/50 dark:bg-neutral-300/30",
                    {
                      "bottom-0 top-0 h-full w-0.5 left-0":
                        linePosition === "left",
                      "bottom-0 top-0 h-full w-0.5 right-0":
                        linePosition === "right",
                      "left-0 right-0 top-0 h-0.5 w-full":
                        linePosition === "top",
                      "left-0 right-0 bottom-0 h-0.5 w-full":
                        linePosition === "bottom",
                    }
                  )}
                  data-state={currentIndex === index ? "open" : "closed"}
                >
                  <div
                    className={cn(
                      "absolute transition-all ease-linear",
                      lineColor,
                      {
                        "left-0 top-0 w-full": ["left", "right"].includes(
                          linePosition
                        ),
                        "left-0 top-0 h-full": ["top", "bottom"].includes(
                          linePosition
                        ),
                      },
                      currentIndex === index
                        ? ["left", "right"].includes(linePosition)
                          ? "h-full"
                          : "w-full"
                        : ["left", "right"].includes(linePosition)
                        ? "h-0"
                        : "w-0"
                    )}
                    style={{
                      transitionDuration:
                        currentIndex === index ? `${collapseDelay}ms` : "0s",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="mx-0 max-w-sm text-balance text-sm font-medium leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
