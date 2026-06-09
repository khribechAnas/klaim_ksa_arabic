"use client";

import { usePostHog } from "posthog-js/react";
import { usePathname } from "next/navigation";

export const TRACKING_EVENTS = {
  GET_STARTED_CLICK: "get_started_button_clicked",
  BOOK_CALL_CLICK: "book_call_button_clicked",
} as const;

export const BUTTON_LOCATIONS = {
  NAVBAR: "NAVBAR",
  HERO: "HERO",
} as const;

export function usePostHogTracking() {
  const posthog = usePostHog();
  const pathname = usePathname();

  const getPageInfo = () => {
    const page = pathname === "/" ? "home" : pathname.slice(1);
    return {
      page,
      pathname,
      timestamp: new Date().toISOString(),
    };
  };

  const trackGetStartedClick = (location: keyof typeof BUTTON_LOCATIONS) => {
    const pageInfo = getPageInfo();

    posthog.capture(TRACKING_EVENTS.GET_STARTED_CLICK, {
      button_location: BUTTON_LOCATIONS[location],
      button_text: "Get Started",
      ...pageInfo,
    });
  };

  const trackBookCallClick = (location: keyof typeof BUTTON_LOCATIONS) => {
    const pageInfo = getPageInfo();

    posthog.capture(TRACKING_EVENTS.BOOK_CALL_CLICK, {
      button_location: BUTTON_LOCATIONS[location],
      button_text: "Book a Call",
      ...pageInfo,
    });
  };

  return {
    trackGetStartedClick,
    trackBookCallClick,
    TRACKING_EVENTS,
    BUTTON_LOCATIONS,
  };
}
