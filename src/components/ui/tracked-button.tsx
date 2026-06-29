"use client";

import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import {
  usePostHogTracking,
  BUTTON_LOCATIONS,
} from "@/hooks/use-posthog-tracking";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
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
// const verticalIcons = {
//   "Klaim Flow": Briefcase,
//   "Klaim Estate": Home,
//   "Klaim Health": Building2,
// };

// Vertical options configuration
const verticalOptions = [
  { name: "Klaim Flow", href: "https://flow.klaim.ai", target: "_blank" },
  { name: "Klaim Estate", href: "https://estate.klaim.ai", target: "_blank" },
  {
    name: "Klaim Health",
    href: "https://kapital.ksa.klaim.ai",
    target: "_blank",
    rel: "noopener noreferrer",
  },
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
    const buttonText =
      typeof children === "string"
        ? children
        : (React.Children.toArray(children).find(
            (child) => typeof child === "string",
          ) as string);

    if (
      buttonText?.toLowerCase().includes("get started") ||
      buttonText?.includes("ابدأ")
    ) {
      trackGetStartedClick(trackingLocation);
    } else if (
      buttonText?.toLowerCase().includes("book") ||
      buttonText?.toLowerCase().includes("call")
    ) {
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

function TrackedGetStartedButtonContent({
  trackingLocation,
  href = "#contact",
  ...props
}: Omit<TrackedButtonProps, "children">) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = getLocaleFromLang(
    searchParams.get("lang"),
    pathname === "/health" || pathname === "/" ? HEALTH_DEFAULT_LOCALE : "en",
  );
  const messages = locale === "ar" ? arTranslations.navbar : enTranslations.navbar;

  // Always redirect Get Started to the authentication URL (no dropdown)
  const authUrl =
    "https://auth.klaim.ai/sign-in?returnUrl=aHR0cHM6Ly9wb3J0YWwudWFlLmtsYWltLmFpL3NpZ24taW4%2FZmluaXNoPXRydWU%3D";

  return (
    <TrackedButton trackingLocation={trackingLocation} href={authUrl} {...props}>
      {messages.getStarted}
    </TrackedButton>
  );
}

export function TrackedGetStartedButton({
  trackingLocation,
  href = "#contact",
  ...props
}: Omit<TrackedButtonProps, "children">) {
  return (
    <Suspense
      fallback={
        <TrackedButton
          trackingLocation={trackingLocation}
          href={href}
          {...props}
        >
          {enTranslations.navbar.getStarted}
        </TrackedButton>
      }
    >
      <TrackedGetStartedButtonContent
        trackingLocation={trackingLocation}
        href={href}
        {...props}
      />
    </Suspense>
  );
}

export function TrackedBookCallButton({
  trackingLocation,
  href = "#contact",
  ...props
}: Omit<TrackedButtonProps, "children">) {
  return (
    <TrackedButton trackingLocation={trackingLocation} href={href} {...props}>
      Book a Call
    </TrackedButton>
  );
}
