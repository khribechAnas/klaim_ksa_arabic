"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { usePostHogTracking, BUTTON_LOCATIONS } from "@/hooks/use-posthog-tracking";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TrackedButtonProps extends React.ComponentProps<typeof Button> {
  trackingLocation: keyof typeof BUTTON_LOCATIONS;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

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

    if (buttonText?.toLowerCase().includes('get started')) {
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
  return (
    <TrackedButton 
      trackingLocation={trackingLocation} 
      href={href}
      {...props}
    >
      Get Started
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