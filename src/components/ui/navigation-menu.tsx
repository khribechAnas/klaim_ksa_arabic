"use client";

import React, { createContext, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

// Menu Context
const MenuContext = createContext<{
  active: string | null;
  setActive: (item: string | null) => void;
}>({
  active: null,
  setActive: () => {},
});

// Menu Provider
export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const [active, setActiveState] = useState<string | null>(null);

  const handleSetActive = (item: string | null) => {
    setActiveState(item);
    setActive(item);
  };

  return (
    <MenuContext.Provider value={{ active, setActive: handleSetActive }}>
      <nav
        onMouseLeave={() => handleSetActive(null)}
        className="relative rounded-full border border-transparent shadow-input flex justify-center space-x-4 px-8 py-6"
      >
        {children}
      </nav>
    </MenuContext.Provider>
  );
};

// MenuItem Component
export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            mass: 0.5,
            damping: 11.5,
            stiffness: 100,
            restDelta: 0.001,
            restSpeed: 0.001,
          }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          className={cn(
            "absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
          )}
        >
          <motion.div
            transition={{
              type: "spring",
              mass: 0.5,
              damping: 11.5,
              stiffness: 100,
              restDelta: 0.001,
              restSpeed: 0.001,
            }}
            layoutId="active"
            className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
          >
            <motion.div layout className="w-max h-full p-4">
              {active === item && children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

// HoveredLink Component
export const HoveredLink = ({
  children,
  href,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...rest}
      href={href}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
};

// ProductItem Component for grid layout
export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};
