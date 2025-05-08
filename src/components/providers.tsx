"use client";

import type {ReactNode} from "react";
import React from "react";
import {ThemeProvider} from "next-themes";
import {AnimatePresence} from "framer-motion";

export function Providers({children}: {children: ReactNode}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <AnimatePresence mode="wait">
        {React.Children.map(children, (child, i) => (React.isValidElement(child) ? React.cloneElement(child, {key: `child-${i}`}) : child))}
      </AnimatePresence>
    </ThemeProvider>
  );
}
