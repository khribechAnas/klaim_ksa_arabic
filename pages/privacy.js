import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import withYandexMetrika from "../components/HOC/withYandexMetrika";
import Hero from "../components/PrivacyPolicyModule/Hero";
import Privacy from "../components/PrivacyPolicyModule/Privacy";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Klaim - Privacy Policy</title>
      </Head>
      <Header />
      <Hero />
      <Privacy />
      <Footer />
    </>
  );
};

export default withYandexMetrika(PrivacyPolicy);
