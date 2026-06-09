"use client";

import { siteConfig } from "@/lib/config";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Building2, Home, Briefcase } from "lucide-react";

interface NavItem {
  id: number;
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

const navs: NavItem[] = siteConfig.nav.links;

// Icons for the sector items
const sectorIcons = {
  "/flow": Briefcase,
  "/estate": Home,
  "/health": Building2,
};

export function NavMenu({
  navigationItems = navs,
  isRTL = false,
}: {
  navigationItems?: NavItem[];
  isRTL?: boolean;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isManualScroll, setIsManualScroll] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  const getSectionItems = React.useCallback(
    () =>
      navigationItems.filter(
        (item) => item.href.startsWith("#") && item.href.length > 1,
      ),
    [navigationItems],
  );

  const updateIndicator = React.useCallback((section: string) => {
    const navList = ref.current;
    const navItem = navList?.querySelector(
      `[href="#${section}"]`,
    )?.parentElement;

    if (!navList || !navItem) return;

    const listRect = navList.getBoundingClientRect();
    const itemRect = navItem.getBoundingClientRect();

    setLeft(itemRect.left - listRect.left);
    setWidth(itemRect.width);
    setIsReady(true);
  }, []);

  React.useEffect(() => {
    const firstSection = getSectionItems()[0]?.href.substring(1);
    if (firstSection) {
      setActiveSection(firstSection);
      updateIndicator(firstSection);
    }
  }, [getSectionItems, updateIndicator, isRTL]);

  React.useEffect(() => {
    const handleScroll = () => {
      // Skip scroll handling during manual click scrolling
      if (isManualScroll) return;

      const sections = getSectionItems().map((item) => item.href.substring(1));

      // Find the section closest to viewport top
      let closestSection = sections[0];
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100); // Offset by 100px to trigger earlier
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      }

      // Update active section and nav indicator
      setActiveSection(closestSection);
      updateIndicator(closestSection);
    };

    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getSectionItems, isManualScroll, updateIndicator]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    // Handle external navigation (like Home to /)
    if (!item.href.startsWith("#")) {
      // Let the browser handle the navigation normally
      return;
    }

    // Handle internal section navigation
    e.preventDefault();

    const targetId = item.href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      // Set manual scroll flag
      setIsManualScroll(true);

      // Immediately update nav state
      setActiveSection(targetId);
      updateIndicator(targetId);

      // Calculate exact scroll position
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset

      // Smooth scroll to exact position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Reset manual scroll flag after animation completes
      setTimeout(() => {
        setIsManualScroll(false);
        updateIndicator(targetId);
      }, 500); // Adjust timing to match scroll animation duration
    }
  };

  return (
    <div className="w-full hidden md:block" dir={isRTL ? "rtl" : "ltr"}>
      <ul
        className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center"
        ref={ref}
      >
        {navigationItems.map((item) => (
          <li
            key={item.name}
            className={cn(
              "z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 relative",
              activeSection === item.href.substring(1)
                ? "text-primary"
                : "text-primary/60 hover:text-primary",
              "tracking-tight",
            )}
            onMouseEnter={() => item.children && setHoveredDropdown(item.name)}
            onMouseLeave={() => item.children && setHoveredDropdown(null)}
          >
            <a href={item.href} onClick={(e) => handleClick(e, item)}>
              {item.name}
            </a>

            {/* Dropdown for items with children */}
            {item.children && item.children.length > 0 && (
              <AnimatePresence>
                {hoveredDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 10 }}
                    transition={{
                      type: "spring",
                      mass: 0.5,
                      damping: 11.5,
                      stiffness: 100,
                      restDelta: 0.001,
                      restSpeed: 0.001,
                    }}
                    className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2  z-50"
                  >
                    <div
                      className={cn(
                        "bg-background dark:bg-background backdrop-blur-sm rounded-2xl overflow-hidden border border-border shadow-xl",
                        isRTL && "text-right",
                      )}
                    >
                      <div className="w-max h-full p-4">
                        <div className="flex flex-col space-y-4 text-sm">
                          {item.children.map((child) => {
                            const IconComponent =
                              sectorIcons[
                                child.href as keyof typeof sectorIcons
                              ];
                            return (
                              <a
                                key={child.name}
                                href={child.href}
                                className={cn(
                                  "flex items-center gap-2 text-primary/60 hover:text-primary transition-colors",
                                  isRTL && "justify-end",
                                )}
                                onClick={() => setHoveredDropdown(null)}
                              >
                                {IconComponent && (
                                  <IconComponent className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                                )}
                                <span>{child.name}</span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </li>
        ))}
        {isReady && (
          <motion.li
            animate={{ left, width }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-y-0 left-0 my-1.5 rounded-full bg-accent/60 border border-border"
          />
        )}
      </ul>
    </div>
  );
}
