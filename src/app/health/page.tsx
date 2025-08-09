import { BentoSection } from "@/components/health/bento-section";
import { CompanyShowcase } from "@/components/sections/company-showcase";
import { CTASection } from "@/components/health/cta-section";
import { HeroSection } from "@/components/health/hero-section";
import { ProblemSection } from "@/components/health/problems-section";
import { HowItWorks } from "@/components/health/how-it-works";
import { TestimonialsSection } from "@/components/testimonials-with-marquee";
import { ValueProposition } from "@/components/health/value-proposition";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";
import { Banner } from "@/components/ui/banner";

export default function FlowPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />
      <ProblemSection />
      <BentoSection />
      <Banner src="/klaim-healthcare-banner.png" height="xl" />
      <HowItWorks />
      <CompanyShowcase />
      <TestimonialsSection
        videoSrc="/testimonials/health-testimonial.MP4"
        thumbnailSrc="/thumbnail.png"
      />
      <ValueProposition />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
