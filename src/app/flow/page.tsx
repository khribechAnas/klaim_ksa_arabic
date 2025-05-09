import { BentoGridSection } from "@/components/bento";
import CtaSection from "@/components/cta-section";
import FaqSection from "@/components/faq-section";
import HeroSection from "@/components/hero";
import HowItWorksSection from "@/components/how-it-works";
import PreQualificationChecker from "@/components/pre-qualification-checker";
import StatsSection from "@/components/stats-section";
import WhatIsKlaimFlow from "@/components/what-is-klaimit";
import ContactForm from "@/components/contact-form";

const loadFlowPage = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/flow-page?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(
        "Strapi fetch error in loadFlowPage:",
        response.status,
        response.statusText
      );
      try {
        const errorBody = await response.text();
        console.error("Strapi error body:", errorBody);
      } catch (e) {
        console.error("Could not parse error body:", e);
      }
      return null;
    }

    const data = await response.json();
    console.log("Data fetched successfully in loadFlowPage:", data);
    return data;
  } catch (error) {
    console.error("Exception in loadFlowPage:", error);
    return null;
  }
};

export default async function LandingPage() {
  const data = await loadFlowPage();

  if (!data || !data.data || !data.data.attributes) {
    console.error(
      "No data or attributes returned from loadFlowPage to LandingPage component."
    );
    // Optionally, render an error state or return null/empty fragment
    return <div>Error loading page data. Please check server logs.</div>;
  }

  const flowContent = data.data.attributes;

  return (
    <>
      <HeroSection
        heroTitleBlack={flowContent.heroTitleBlack}
        heroTitlePurple={flowContent.heroTitlePurple}
        heroSubtitle={flowContent.heroSubtitle}
      />
      <WhatIsKlaimFlow
        klaimFlowSubtitle={flowContent.klaimFlowSubtitle}
        klaimFlowTitle2={flowContent.klaimFlowTitle2}
        klaimFlowDescription2={flowContent.klaimFlowDescription2}
      />
      <BentoGridSection
        flowProvidesSubtitle={flowContent.flowProvidesSubtitle}
        providesCard1Title={flowContent.providesCard1Title}
        providesCard1Subtitle={flowContent.providesCard1Subtitle}
        providesCard2Title={flowContent.providesCard2Title}
        providesCard2Subtitle={flowContent.providesCard2Subtitle}
        providesCard3Title={flowContent.providesCard3Title}
        providesCard3Subtitle={flowContent.providesCard3Subtitle}
      />
      <StatsSection
        aboutTitle={flowContent.aboutTitle}
        aboutSubtitle={flowContent.aboutSubtitle}
      />
      <HowItWorksSection
        howTitle={flowContent.howTitle}
        howSubtitle={flowContent.howSubtitle}
        howStep1Title={flowContent.howStep1Title}
        howStep1Subtitle={flowContent.howStep1Subtitle}
        howStep2Title={flowContent.howStep2Title}
        howStep2Subtitle={flowContent.howStep2Subtitle}
        howStep3Title={flowContent.howStep3Title}
        howStep3Subtitle={flowContent.howStep3Subtitle}
        howStep4Title={flowContent.howStep4Title}
        howStep4Subtitle={flowContent.howStep4Subtitle}
        howStep5Title={flowContent.howStep5Title}
        howStep5Subtitle={flowContent.howStep5Subtitle}
      />
      <PreQualificationChecker />
      <CtaSection
        ctaTitle={flowContent.ctaTitle}
        ctaBullet1={flowContent.ctaBullet1}
        ctaBullet2={flowContent.ctaBullet2}
        ctaBullet3={flowContent.ctaBullet3}
      />
      <FaqSection />
      <ContactForm />
    </>
  );
}
