"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function CTASection({ locale }: { locale: "en" | "ar" }) {
  const { ctaSection } = siteConfig;

  if (locale === "ar") {
    return (
      <section
        id="cta"
        className="flex flex-col items-center justify-center w-full py-10"
      >
        <div className="w-full">
          <div className="h-[400px] md:h-[400px] overflow-hidden shadow-xl w-full border border-border rounded-xl relative z-20">
            <Image
              src="/klaim-are-you-ready.png"
              alt="CTA Background"
              className="w-full h-full object-cover object-right-bottom"
              width={2000}
              height={2000}
              quality={100}
              priority
            />
            <Link
              href="#contact"
              aria-label="ابدأ الآن"
              className="absolute z-10 left-[87%] top-[77%] w-[10%] h-[13%] rounded-full cursor-pointer transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="cta"
      className="flex flex-col items-center justify-center w-full py-10"
    >
      <div className="w-full">
        <div className="h-[400px] md:h-[400px] overflow-hidden shadow-xl w-full border border-border rounded-xl relative z-20">
          <Image
            src={ctaSection.backgroundImage}
            alt="CTA Background"
            className="w-full h-full object-cover"
            width={2000}
            height={2000}
            quality={100}
            priority
          />

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-16">
            <div className="max-w-md md:max-w-xl">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-left mb-12">
                Ready to Boost Your Cash Flow Without Taking on Debt?
              </h1>
              <div className="flex flex-col">
                <Link
                  href="#contact"
                  className="bg-white text-black font-semibold text-sm h-12 w-fit px-6 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Started
                </Link>
                {/* <span className="text-white/90 text-sm">
                  {ctaSection.subtext}
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
