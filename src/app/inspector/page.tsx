import React from "react";
import Header from "../components/CommonModule/Header";
import Footer from "../components/CommonModule/Footer";
import InspectorHero from "../components/InspectorModule/InspectorHero";
import InspectorHowMuch from "../components/InspectorModule/InspectorHowMuch";
import InspectorClaimDenials from "../components/InspectorModule/InspectorClaimDenials";
import InspectorTheResult from "../components/InspectorModule/InspectorTheResult";
import InspectorFindAndFix from "../components/InspectorModule/InspectorFindAndFix";
import InspectorBulkChecking from "../components/InspectorModule/InspectorBulkChecking";
import InspectorTrustedByTestimonials from "../components/InspectorModule/InspectorTrustedByTestimonials";
import InspectorBannerCards from "../components/InspectorModule/InspectorBannerCards";
import InspectorStartMinimizing from "../components/InspectorModule/InspectorStartMinimizing";
import InspectorFAQ from "../components/InspectorModule/InspectorFAQ";

const InspectorPage = () => {
  return (
    <>
      <Header />
      <InspectorHero />
      <InspectorHowMuch />
      <InspectorClaimDenials />
      <InspectorTheResult />
      <InspectorFindAndFix />
      <InspectorBulkChecking />
      <InspectorTrustedByTestimonials />
      <InspectorBannerCards />
      <InspectorStartMinimizing />
      <InspectorFAQ />
      <Footer />
    </>
  );
};

export default InspectorPage;
