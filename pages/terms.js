import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import withYandexMetrika from "../components/HOC/withYandexMetrika";
import Hero from "../components/TermsOfConditionsModule/Hero";
import Terms from "../components/TermsOfConditionsModule/Terms";

const TermsOfConditions = () => {
  return (
    <>
      <Head>
        <title>Klaim - Terms of Services</title>
      </Head>
      <Header />
      <Hero />
      <Terms />
      <Footer />
    </>
  );
};

export default withYandexMetrika(TermsOfConditions);
