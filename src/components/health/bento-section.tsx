"use client";

import { SectionHeader } from "@/components/section-header";
import { FeaturesSectionDemo } from "./simple-bento";
import { useTranslations } from 'next-intl';

export function BentoSection() {
  const t = useTranslations('health.bento');

  return (
    <section
      id="bento"
      className="flex flex-col items-center justify-center w-full relative px-5 md:px-10"
    >
      <div className="border-x mx-5 md:mx-10 relative">
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

        <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
            {t('title')}
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            {t('description')}
          </p>
        </SectionHeader>

        <div>
          <FeaturesSectionDemo />
        </div>
      </div>
    </section>
  );
}
