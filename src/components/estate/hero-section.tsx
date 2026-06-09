"use client";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function HeroSection() {
  const { hero } = siteConfig;
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <section id="hero" className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl"></div>
        </div>
        <div className="relative z-10 pt-24 md:pt-32 max-w-5xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-primary">
              Tired of Chasing Developers?
            </h1>
            <p className="text-base font-inter md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              Cash in your commission in 24 hours.
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <Link
              href="https://estate.klaim.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary h-9 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-32 px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
            >
              {hero.cta.primary.text}
            </Link>
            <button
              onClick={() => setShowBookingModal(true)}
              className="h-10 flex items-center justify-center w-32 px-5 text-sm font-normal tracking-wide text-primary rounded-full hover:text-secondary transition-all ease-out active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80"
            >
              {hero.cta.secondary.text}
            </button>
          </div>
        </div>
      </div>
      <div className="relative px-6 mt-10">
        <Image
          src="/estate-hero.png"
          alt="Hero Section"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative bg-white rounded-lg max-w-2xl w-full h-[80vh] mx-4">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
            <iframe
              src="https://outlook.office.com/book/KlaimEstate@klaim.ai/?ismsaljsauthenabled"
              style={{ border: 0, borderRadius: "10px" }}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
