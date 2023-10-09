import React from "react";
import Header from "../components/CommonModule/Header";
import Privacypolicy from "../components/PrivacyPolicyModule/PrivacyPolicy";
import Footer from "../components/CommonModule/Footer";
import PrivacyPolicyUae from "../components/PrivacyPolicyModule/PrivacyPolicyUae";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      {/* <Privacypolicy /> */}
      <PrivacyPolicyUae />
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
