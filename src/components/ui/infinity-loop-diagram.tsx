import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const InfinityLoopDiagram = () => {
  const t = useTranslations("health.problems.loop");
  const [activeCorner, setActiveCorner] = useState(0);

  const Background = () => {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0 h-full w-full",
          "bg-[radial-gradient(circle_at_0.5px_0.5px,rgba(0,0,0,0.2)_0.5px,transparent_0)]",
          "dark:bg-[radial-gradient(circle_at_0.5px_0.5px,rgba(255,255,255,0.2)_0.5px,transparent_0)]",
          "bg-repeat",
          "[background-size:8px_8px]",
        )}
      />
    );
  };

  // Define the four corners with their positions and labels
  const corners = [
    {
      id: 0,
      position: { x: 105, y: 65 },
      label: t("items.0"),
      color: "teal",
    },
    {
      id: 1,
      position: { x: 105, y: 135 },
      label: t("items.1"),
      color: "teal",
    },
    {
      id: 2,
      position: { x: 295, y: 65 },
      label: t("items.2"),
      color: "purple",
    },
    {
      id: 3,
      position: { x: 295, y: 135 },
      label: t("items.3"),
      color: "purple",
    },
  ];

  // Cycle through corners
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCorner((prev) => (prev + 1) % 4);
    }, 6000); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  // Animation for dots and labels
  const fadeVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  return (
    <div className="p-4 md:p-8 flex items-center justify-center relative">
      <Background />
      <div className="relative w-full max-w-4xl">
        {/* SVG Infinity Loop */}
        <div className="relative mx-auto">
          <svg
            viewBox="0 0 400 200"
            className="w-full h-auto"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            {/* Gradient definitions */}
            <defs>
              <linearGradient
                id="tealGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#0d9488" />
              </linearGradient>
              <linearGradient
                id="purpleGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
              <radialGradient id="centerGradient">
                <stop offset="0%" stopColor="currentColor" />
                <stop offset="100%" stopColor="currentColor" />
              </radialGradient>
            </defs>

            {/* Left loop (teal) */}
            <path
              d="M 200,100 
                 C 200,100 170,60 130,60
                 C 90,60 60,80 60,100
                 C 60,120 90,140 130,140
                 C 170,140 200,100 200,100"
              fill="none"
              stroke="url(#tealGradient)"
              strokeWidth="18"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Right loop (purple) */}
            <path
              d="M 200,100
                 C 200,100 230,140 270,140
                 C 310,140 340,120 340,100
                 C 340,80 310,60 270,60
                 C 230,60 200,100 200,100"
              fill="none"
              stroke="url(#purpleGradient)"
              strokeWidth="18"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Dots at corners */}
            <AnimatePresence mode="wait">
              {corners.map(
                (corner) =>
                  activeCorner === corner.id && (
                    <motion.circle
                      key={corner.id}
                      cx={corner.position.x}
                      cy={corner.position.y}
                      r="9"
                      fill="url(#centerGradient)"
                      variants={fadeVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    />
                  ),
              )}
            </AnimatePresence>
          </svg>
        </div>

        {/* Labels positioned around the loop */}
        <div className="absolute inset-0 pointer-events-none">
          <AnimatePresence mode="wait">
            {/* Top-left label */}
            {activeCorner === 0 && (
              <motion.div
                key="top-left"
                className="absolute top-0 left-0 md:left-8 lg:left-16 w-40 md:w-48"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <p className="text-xs md:text-sm lg:text-base font-medium text-primary leading-tight bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-border">
                  {corners[0].label}
                </p>
              </motion.div>
            )}

            {/* Bottom-left label */}
            {activeCorner === 1 && (
              <motion.div
                key="bottom-left"
                className="absolute bottom-0 left-0 md:left-8 lg:left-16 w-40 md:w-48 z-10"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <p className="text-xs md:text-sm lg:text-base font-medium text-primary leading-tight bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-border">
                  {corners[1].label}
                </p>
              </motion.div>
            )}

            {/* Top-right label */}
            {activeCorner === 2 && (
              <motion.div
                key="top-right"
                className="absolute top-0 right-0 md:right-8 lg:right-16 w-40 md:w-48 text-right z-10"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <p className="text-xs md:text-sm lg:text-base font-medium text-primary leading-tight bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-border">
                  {corners[2].label}
                </p>
              </motion.div>
            )}

            {/* Bottom-right label */}
            {activeCorner === 3 && (
              <motion.div
                key="bottom-right"
                className="absolute bottom-0 right-0 md:right-8 lg:right-16 w-40 md:w-48 text-right z-10"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <p className="text-xs md:text-sm lg:text-base font-medium text-primary leading-tight bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-border">
                  {corners[3].label}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Center text overlay - always visible */}
          <motion.div
            className="absolute bottom-0 z-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-base md:text-sm lg:text-md font-bold text-foreground mb-1">
              {t("center.title")}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {t("center.description")}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfinityLoopDiagram;
