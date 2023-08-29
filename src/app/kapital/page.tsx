import React from "react";
import Header from "../components/CommonModule/Header";
import Footer from "../components/CommonModule/Footer";
import KapitalHero from "../components/KapitalModule/KapitalHero";
import KapitalClients from "../components/KapitalModule/KapitalClients";
import KapitalBanner from "../components/KapitalModule/KapitalBanner";
import KapitalMeanwhile from "../components/KapitalModule/KapitalMeanwhile";
import KapitalWhatWould from "../components/KapitalModule/KapitalWhatWould";
import KapitalCardsBanner from "../components/KapitalModule/KapitalCardsBanner";
import KapitalTestimonials from "../components/KapitalModule/KapitalTestimonials";
import KapitalCardsBanner2 from "../components/KapitalModule/KapitalCardsBanner2";
import KapitalAccelerate from "../components/KapitalModule/KapitalAccelerate";
import KapitalFAQ from "../components/KapitalModule/KapitalFAQ";

const KapitalPage = () => {
  return (
    <>
      <Header />
      <KapitalHero />
      <KapitalClients />
      <KapitalBanner />
      <KapitalMeanwhile />
      <KapitalWhatWould />
      <KapitalCardsBanner />
      <KapitalTestimonials />
      <KapitalCardsBanner2 />
      <KapitalAccelerate />
      <KapitalFAQ />
      <Footer />
    </>
  );
};

export default KapitalPage;
