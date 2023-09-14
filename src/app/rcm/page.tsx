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
import RcmTable from "../components/RcmModule/RcmTable";
import RcmKlaimTools from "../components/RcmModule/RcmKlaimTools";
import RcmCardBanner from "../components/RcmModule/RcmCardBanner";
import RcmInterestedIn from "../components/RcmModule/RcmInterestedIn";
import RcmFAQ from "../components/RcmModule/RcmFAQ";

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
      <RcmTable />
      <RcmKlaimTools />
      <RcmCardBanner />
      <RcmInterestedIn />
      <RcmFAQ />
      <Footer />
    </>
  );
};

export default RCMPage;
