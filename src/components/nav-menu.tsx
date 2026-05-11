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
}: {
  navigationItems?: NavItem[];
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isManualScroll, setIsManualScroll] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  React.useEffect(() => {
    // Initialize with first nav item
    const firstItem = ref.current?.querySelector(
      `[href="#${navigationItems[0].href.substring(1)}"]`
    )?.parentElement;
    if (firstItem) {
      const rect = firstItem.getBoundingClientRect();
      setLeft(firstItem.offsetLeft);
      setWidth(rect.width);
      setIsReady(true);
    }
  }, [navigationItems]);

  React.useEffect(() => {
    const handleScroll = () => {
      // Skip scroll handling during manual click scrolling
      if (isManualScroll) return;

      const sections = navigationItems.map((item) => item.href.substring(1));

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
      const navItem = ref.current?.querySelector(
        `[href="#${closestSection}"]`
      )?.parentElement;
      if (navItem) {
        const rect = navItem.getBoundingClientRect();
        setLeft(navItem.offsetLeft);
        setWidth(rect.width);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualScroll, navigationItems]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
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
      const navItem = e.currentTarget.parentElement;
      if (navItem) {
        const rect = navItem.getBoundingClientRect();
        setLeft(navItem.offsetLeft);
        setWidth(rect.width);
      }

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
      }, 500); // Adjust timing to match scroll animation duration
    }
  };

  return (
    <div className="w-full hidden md:block">
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
              "tracking-tight"
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
                    <div className="bg-background dark:bg-background backdrop-blur-sm rounded-2xl overflow-hidden border border-border shadow-xl">
                      <div className="w-max h-full p-4">
                        <div className="flex flex-col space-y-4 text-sm">
                          {item.children.map((child) => {
                            const IconComponent = sectorIcons[
                              child.href as keyof typeof sectorIcons
                            ];
                            return (
                              <a
                                key={child.name}
                                href={child.href}
                                className="flex items-center space-x-2 text-primary/60 hover:text-primary transition-colors"
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
            className="absolute inset-0 my-1.5 rounded-full bg-accent/60 border border-border"
          />
        )}
      </ul>
    </div>
  );
}
