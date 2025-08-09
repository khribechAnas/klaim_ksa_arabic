import { CTASection } from "@/components/estate/cta-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/estate/hero-section";
import { ContactSection } from "@/components/flow/contact-section";
import { ValueProposition } from "@/components/estate/value-proposition";
import WhatIsKlaimFlow from "@/components/estate/what-is-klaimflow";
import HowItWorks from "@/components/estate/how-it-works";
import { BentoSection } from "@/components/estate/bento-section";
import { QuoteSection } from "@/components/estate/quote-section";
import { FAQSection } from "@/components/sections/faq-section";
import { Banner } from "@/components/ui/banner";

export default function FlowPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />
      <ValueProposition />
      <WhatIsKlaimFlow />
      <QuoteSection />
      <HowItWorks />
      <Banner src="/estate-banner.png" height="lg" logo="estate" />
      <BentoSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
