import { BentoSection } from "@/components/flow/bento-section";
import { CompanyShowcase } from "@/components/flow/company-showcase";
import { CTASection } from "@/components/flow/cta-section";
import { FeatureSection } from "@/components/flow/feature-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/flow/hero-section";
import { IndustrySection } from "@/components/flow/industry-section";
import { QuoteSection } from "@/components/flow/quote-section";
import { ContactSection } from "@/components/flow/contact-section";
import WhatIsKlaimFlow from "@/components/flow/what-is-klaimflow";
import PreQualificationChecker from "@/components/flow/pre-qualification-checker";

export default function FlowPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />
      <IndustrySection />
      <WhatIsKlaimFlow />
      <BentoSection />
      <QuoteSection />
      <CompanyShowcase />
      <FeatureSection />
      <PreQualificationChecker />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
