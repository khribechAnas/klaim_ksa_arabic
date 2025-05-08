import { BentoGridSection } from "@/components/bento";
import CtaSection from "@/components/cta-section";
import FaqSection from "@/components/faq-section";
import HeroSection from "@/components/hero";
import HowItWorksSection from "@/components/how-it-works";
import PreQualificationChecker from "@/components/pre-qualification-checker";
import StatsSection from "@/components/stats-section";
import WhatIsKlaimFlow from "@/components/what-is-klaimit";
import ContactForm from "@/components/contact-form";
export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <WhatIsKlaimFlow />
      <BentoGridSection />
      <StatsSection />
      <HowItWorksSection />
      <PreQualificationChecker />
      <CtaSection />
      <FaqSection />
      <ContactForm />
    </>
  );
}
