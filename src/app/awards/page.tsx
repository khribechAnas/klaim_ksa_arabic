import React from "react";
import Header from "../components/CommonModule/Header";
import Footer from "../components/CommonModule/Footer";
import AwardsTitle from "../components/AwardsModule/AwardsTitle";
import Awards from "../components/AwardsModule/Awards";

const AwardsPage = () => {
  return (
    <>
      <Header />
      <AwardsTitle />
      <Awards />
      <Footer />
    </>
  );
};

export default AwardsPage;
