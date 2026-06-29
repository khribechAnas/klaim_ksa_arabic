"use client";

import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

type FlowStep = {
  label: string;
  alt: string;
  icon: string;
};

export function HowItWorks() {
  const t = useTranslations("health.howItWorks");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const onboardingSteps = t.raw("onboarding.steps") as string[];
  const onboardingAlt = t.raw("onboarding.alt") as string[];
  const onboardingIcons = [
    "/how-it-works/flow/step1.svg",
    "/how-it-works/flow/step2.svg",
    "/how-it-works/health/step3.svg",
    "/how-it-works/flow/step3.svg",
    "/how-it-works/estate/step4.svg",
  ];
  const onboardingItems: FlowStep[] = onboardingSteps.map((label, index) => ({
    label,
    alt: onboardingAlt[index] ?? label,
    icon: onboardingIcons[index] ?? onboardingIcons[onboardingIcons.length - 1],
  }));
  const arrowClassName = cn(
    "transform rotate-90 md:rotate-0",
    isRtl && "md:scale-x-[-1]",
  );
  const Arrow = () => (
    <div className="flex items-center md:mt-8">
      <svg
        className={arrowClassName}
        width="20"
        height="10"
        viewBox="0 0 20 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 5H18M18 5L14 1M18 5L14 9"
          stroke="#5cc2ac"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center gap-10 w-full relative px-6 py-16"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          {t("title")}
        </h2>
        <p className="text-muted-foreground font-inter text-center text-balance font-medium">
          {t("description")}
        </p>
      </SectionHeader>

      <div className="w-full h-full flex items-center justify-center">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-12 lg:gap-16">
          {/* One-Time Onboarding Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium tracking-tight text-primary text-center">
              {t("onboarding.title")}
            </h3>

            <div className="flex flex-col md:flex-row md:flex-wrap items-center md:items-start justify-center gap-6">
              {onboardingItems.map((step, index) => (
                <div
                  key={step.label}
                  className="contents"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <Image
                        src={step.icon}
                        alt={step.alt}
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="text-center max-w-[130px]">
                      <p className="text-sm font-medium text-primary leading-tight">
                        {step.label}
                      </p>
                    </div>
                  </div>
                  {index < onboardingItems.length - 1 && <Arrow />}
                </div>
              ))}
            </div>
          </div>

          {/* Ongoing Flow Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium tracking-tight text-primary text-center">
              {t("ongoing.title")}
            </h3>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6">
              {/* Ongoing Step 1 */}
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src="/how-it-works/flow/ongoing1.svg"
                    alt={t("ongoing.alt.0")}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="text-center max-w-[120px]">
                  <p className="text-sm font-medium text-primary leading-tight">
                    {t("ongoing.steps.0")}
                  </p>
                </div>
              </div>

              {/* Middle Arrows - Left and Right */}
              <div className="flex flex-row md:flex-col items-center mt-4 md:mt-8 space-x-2 md:space-x-0 md:space-y-2">
                {/* Right Arrow */}
                <svg
                  className={arrowClassName}
                  width="20"
                  height="10"
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5H18M18 5L14 1M18 5L14 9"
                    stroke="#5cc2ac"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* Left Arrow */}
                <svg
                  className={arrowClassName}
                  width="20"
                  height="10"
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5H20M2 5L6 1M2 5L6 9"
                    stroke="#5cc2ac"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Ongoing Step 2 */}
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src="/how-it-works/flow/ongoing2.svg"
                    alt={t("ongoing.alt.1")}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="text-center max-w-[120px]">
                  <p className="text-sm font-medium text-primary leading-tight">
                    {t("ongoing.steps.1")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
