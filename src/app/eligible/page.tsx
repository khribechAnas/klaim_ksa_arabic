import React from "react";
import Header from "../components/CommonModule/Header";
import Footer from "../components/CommonModule/Footer";
import EligibleHero from "../components/EligibleModule/EligibleHero";
import EligibleIfYouAreFacing from "../components/EligibleModule/EligibleIfYouAreFacing";
import EligibleFastAndEasy from "../components/EligibleModule/EligibleFastAndEasy";
import EligibleBulkEligibility from "../components/EligibleModule/EligibleBulkEligibility";
import EligibleBanner from "../components/EligibleModule/EligibleBanner";
import EligibleTrustedByTestimonials from "../components/EligibleModule/EligibleTrustedByTestimonials";
import EligibleCardBanner from "../components/EligibleModule/EligibleCardBanner";
import EligibleReadyFor from "../components/EligibleModule/EligibleReadyFor";
import EligibleFAQ from "../components/EligibleModule/EligibleFAQ";

const EligiblePage = () => {
  return (
    <>
      <Header />
      <EligibleHero />
      <EligibleIfYouAreFacing />
      <EligibleFastAndEasy />
      <EligibleBulkEligibility />
      <EligibleBanner />
      <EligibleTrustedByTestimonials />
      <EligibleCardBanner />
      <EligibleReadyFor />
      <EligibleFAQ />
      <Footer />
    </>
  );
};

export default EligiblePage;
