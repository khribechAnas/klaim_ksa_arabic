import React from "react";
import Header from "../components/CommonModule/Header";
import Footer from "../components/CommonModule/Footer";
import AboutUsHero from "../components/AboutUsModule/AboutUsHero";
import AboutUsWhatWeDo from "../components/AboutUsModule/AboutUsWhatWeDo";
import AboutUsHowWeStarted from "../components/AboutUsModule/AboutUsHowWeStarted";
import AboutUsOurTeam from "../components/AboutUsModule/AboutUsOurTeam";
import AboutUsClients from "../components/AboutUsModule/AboutUsClients";
import AboutUsBanner from "../components/AboutUsModule/AboutUsBanner";
import AboutUsCTA from "../components/AboutUsModule/AboutUsCTA";
import AboutUsContact from "../components/AboutUsModule/AboutUsContact";
import AboutUsTestimonials from "../components/AboutUsModule/AboutUsTestimonials";

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <AboutUsHero />
      <AboutUsWhatWeDo />
      <AboutUsHowWeStarted />
      <AboutUsOurTeam />
      <AboutUsClients />
      <AboutUsTestimonials />
      <AboutUsBanner />
      <AboutUsCTA />
      <AboutUsContact />
      <Footer />
    </>
  );
};

export default AboutUsPage;
