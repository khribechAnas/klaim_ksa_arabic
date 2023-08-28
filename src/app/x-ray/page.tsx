import React from "react";
import Header from "../components/CommonModule/Header";
import Footer from "../components/CommonModule/Footer";
import XRayHero from "../components/XRayModule/XRayHero";
import XRayManualReporting from "../components/XRayModule/XRayManualReporting";
import XRayAccelerate from "../components/XRayModule/XRayAccelerate";
import XRaySmartDecisions from "../components/XRayModule/XRaySmartDecisions";
import XrayClientsTestimonials from "../components/XRayModule/XrayClientsTestimonials";
import XRayCardBanner from "../components/XRayModule/XRayCardBanner";
import XRayGetStarted from "../components/XRayModule/XRayGetStarted";
import XRayFAQ from "../components/XRayModule/XRayFAQ";

const XRayPage = () => {
  return (
    <>
      <Header />
      <XRayHero />
      <XRayManualReporting />
      <XRayAccelerate />
      <XRaySmartDecisions />
      <XrayClientsTestimonials />
      <XRayCardBanner />
      <XRayGetStarted />
      <XRayFAQ />
      <Footer />
    </>
  );
};

export default XRayPage;
