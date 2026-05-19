"use client";

import Image from "next/image";

export function CTASection() {
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
            className="w-full h-full object-cover"
            width={2000}
            height={2000}
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
}
