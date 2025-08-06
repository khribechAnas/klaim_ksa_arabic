import { BentoSection } from "@/components/sections/bento-section";
import { CompanyShowcase } from "@/components/sections/company-showcase";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IndustrySection } from "@/components/sections/industry-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />
      <IndustrySection />
      <QuoteSection />
      <BentoSection />
      <FeatureSection />
      {/* <GrowthSection /> */}
      {/* <PricingSection /> */}
      <CompanyShowcase />
      <TestimonialSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
