import React from "react";
import Header from "../components/CommonModule/Header";
import Footer from "../components/CommonModule/Footer";
import RcmHero from "../components/RcmModule/RcmHero";
import RcmClients from "../components/RcmModule/RcmClients";
import RcmNewWay from "../components/RcmModule/RcmNewWay";
import RcmOvercoming from "../components/RcmModule/RcmOvercoming";
import RcmMasterYour from "../components/RcmModule/RcmMasterYour";
import RcmFinallyRelieve from "../components/RcmModule/RcmFinallyRelieve";
import RcmRemoveWorries from "../components/RcmModule/RcmRemoveWorries";
import RcmSeamless from "../components/RcmModule/RcmSeamless";
import RcmBanner from "../components/RcmModule/RcmBanner";
import RcmTestimonials from "../components/RcmModule/RcmTestimonials";

const RCMPage = () => {
  return (
    <>
      <Header />
      <RcmHero />
      <RcmClients />
      <RcmNewWay />
      <RcmOvercoming />
      <RcmMasterYour />
      <RcmFinallyRelieve />
      <RcmRemoveWorries />
      <RcmSeamless />
      <RcmBanner />
      <RcmTestimonials />
      <Footer />
    </>
  );
};

export default RCMPage;
