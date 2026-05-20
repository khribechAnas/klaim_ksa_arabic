"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { usePostHogTracking, BUTTON_LOCATIONS } from "@/hooks/use-posthog-tracking";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, Home, Building2 } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import enTranslations from "@/locales/en.json";
import arTranslations from "@/locales/ar.json";
import { getLocaleFromLang, HEALTH_DEFAULT_LOCALE } from "@/lib/locale";

interface TrackedButtonProps extends React.ComponentProps<typeof Button> {
  trackingLocation: keyof typeof BUTTON_LOCATIONS;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

// Icons for the vertical options
const verticalIcons = {
  "Klaim Flow": Briefcase,
  "Klaim Estate": Home,
  "Klaim Health": Building2,
};

// Vertical options configuration
const verticalOptions = [
  { name: "Klaim Flow", href: "https://flow.klaim.ai", target: "_blank" },
  { name: "Klaim Estate", href: "https://estate.klaim.ai", target: "_blank" },
  { name: "Klaim Health", href: "https://portal.uae.klaim.ai", target: "_blank", rel: "noopener noreferrer" },
];

export function TrackedButton({ 
  trackingLocation, 
  href, 
  target,
  rel,
  children, 
  onClick,
  className,
  variant,
  size,
  ...props 
}: TrackedButtonProps) {
  const { trackGetStartedClick, trackBookCallClick } = usePostHogTracking();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonText = typeof children === 'string' ? children : 
                      React.Children.toArray(children).find(child => 
                        typeof child === 'string'
                      ) as string;

    if (
      buttonText?.toLowerCase().includes("get started") ||
      buttonText?.includes("ابدأ")
    ) {
      trackGetStartedClick(trackingLocation);
    } else if (buttonText?.toLowerCase().includes('book') || buttonText?.toLowerCase().includes('call')) {
      trackBookCallClick(trackingLocation);
    }

    if (onClick) {
      onClick(e);
    }
  };

  if (href) {
    return (
      <Button
        asChild
        onClick={handleClick}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        <Link href={href} target={target} rel={rel}>
          {children}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Button>
  );
}

// Specialized tracked button components
export function TrackedGetStartedButton({ 
  trackingLocation, 
  href = "#contact",
  ...props 
}: Omit<TrackedButtonProps, 'children'>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = getLocaleFromLang(
    searchParams.get("lang"),
    pathname === "/health" ? HEALTH_DEFAULT_LOCALE : "en"
  );
  const messages = locale === "ar" ? arTranslations.navbar : enTranslations.navbar;
  const isHomePage = pathname === "/";
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const { trackGetStartedClick } = usePostHogTracking();

  if (isHomePage) {
    return (
      <div className="relative">
        <Button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
          className={cn(buttonVariants({ variant: "default", size: "sm", className: props.className }))}
          {...props}
        >
          {messages.getStarted}
          <ChevronDown className={cn(
            "ml-2 h-4 w-4 transition-transform",
            isDropdownOpen && "rotate-180"
          )} />
        </Button>

        <AnimatePresence>
          {isDropdownOpen && (
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
              className="absolute bottom-[calc(100%_+_0.5rem)] md:top-[calc(100%_+_0.5rem)] right-0 z-50"
            >
              <div className="bg-background dark:bg-background backdrop-blur-sm rounded-2xl overflow-hidden border border-border shadow-xl">
                <div className="w-max h-full p-4">
                  <div className="flex flex-col space-y-4 text-sm">
                    {verticalOptions.map((option) => {
                      const IconComponent = verticalIcons[option.name as keyof typeof verticalIcons];
                      return (
                        <Link
                          key={option.name}
                          href={option.href}
                          target={option.target}
                          rel={option.rel}
                          className="flex items-center space-x-2 text-primary/60 hover:text-primary transition-colors whitespace-nowrap"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            trackGetStartedClick(trackingLocation);
                          }}
                        >
                          {IconComponent && (
                            <IconComponent className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                          )}
                          <span>{option.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <TrackedButton 
      trackingLocation={trackingLocation} 
      href={href}
      {...props}
    >
      {messages.getStarted}
    </TrackedButton>
  );
}

export function TrackedBookCallButton({ 
  trackingLocation, 
  href = "#contact",
  ...props 
}: Omit<TrackedButtonProps, 'children'>) {
  return (
    <TrackedButton 
      trackingLocation={trackingLocation} 
      href={href}
      {...props}
    >
      Book a Call
    </TrackedButton>
  );
} 
