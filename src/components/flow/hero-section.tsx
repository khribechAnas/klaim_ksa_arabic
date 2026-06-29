import { HeroVideoSection } from "@/components/sections/hero-video-section";
import { siteConfig } from "@/lib/config";
import {
  TrackedGetStartedButton,
  TrackedBookCallButton,
} from "../ui/tracked-button";
import { BUTTON_LOCATIONS } from "@/hooks/use-posthog-tracking";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section id="hero" className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl"></div>
        </div>
        <div className="relative z-10 pt-24 md:pt-32 max-w-5xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-primary">
              Tired of Chasing Your Payments?
            </h1>
            <p className="text-base font-inter md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              You&apos;ve done the work but your payments are still pending.
              KlaimFlow turns your unpaid invoices into instant cash so you can
              pay your team, grow your business, and breathe easier.
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <TrackedGetStartedButton
              trackingLocation={BUTTON_LOCATIONS.HERO}
              href="https://flow.klaim.ai"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              className="bg-secondary h-9 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-32 px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
            />
            <TrackedBookCallButton
              trackingLocation={BUTTON_LOCATIONS.HERO}
              href={hero.cta.secondary.href}
              variant="outline"
              className="h-10 flex items-center justify-center w-32 px-5 text-sm font-normal tracking-wide text-primary rounded-full transition-all ease-out hover:text-secondary active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80"
            />
          </div>
        </div>
      </div>
      <HeroVideoSection src="/Klaim_HeroBanner.mp4" />
    </section>
  );
}
