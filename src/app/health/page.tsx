import { NextIntlClientProvider } from "next-intl";
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
import { getLocaleFromLang, HEALTH_DEFAULT_LOCALE } from "@/lib/locale";

interface HealthPageProps {
  searchParams: Promise<{
    lang?: string;
  }>;
}

export default async function HealthPage({ searchParams }: HealthPageProps) {
  const { lang } = await searchParams;
  const locale = getLocaleFromLang(lang, HEALTH_DEFAULT_LOCALE);
  const messages = (await import(`@/locales/${locale}.json`)).default;
  const companyShowcaseTitle = messages.health.companyShowcase.title;
  const testimonials = messages.health.testimonials;
  const faq = messages.health.faq;
  const contact = messages.health.contact;
  const footer = messages.health.footer;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <main
        className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <HeroSection />
        {/* <ProblemSection />
        <BentoSection />
        <Banner
          src={
            locale === "ar"
              ? "/klaim-healthcare-banner-arabic.png"
              : "/klaim-healthcare-banner.png"
          }
          height="xl"
        />
        <HowItWorks />
        <CompanyShowcase title={companyShowcaseTitle} />
        <TestimonialsSection
          videoSrc="/testimonials/health-testimonial.MP4"
          thumbnailSrc="/thumbnail.png"
          title={testimonials.title}
          description={testimonials.description}
          testimonials={testimonials.items}
          thumbnailAlt={testimonials.thumbnailAlt}
          dotAriaLabel={testimonials.dotAriaLabel}
        />
        <ValueProposition /> 
        <CTASection locale={locale} />
        <FAQSection
          title={faq.title}
          description={faq.description}
          items={faq.items}
        />
        <ContactSection
          title={contact.title}
          description={contact.description}
          form={contact.form}
        />
        <FooterSection copy={footer} hideSectors /> */}
      </main>
    </NextIntlClientProvider>
  );
}
