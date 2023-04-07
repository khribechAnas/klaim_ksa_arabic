import Head from "next/head";
import React from "react";
import Advisors from "../components/AboutModule/Advisors";
import Founders from "../components/AboutModule/Founders";
import Hero from "../components/AboutModule/Hero";
import WhoWeAre from "../components/AboutModule/WhoWeAre";
import Footer from "../components/Footer";
import Header from "../components/Header";
import withYandexMetrika from "../components/HOC/withYandexMetrika";
import wowAnimated from "../components/HOC/wowAnimated";

const About = () => {
  return (
    <>
      <Head>
        <title>Klaim - About Us</title>
      </Head>
      <Header />
      <Hero />
      <WhoWeAre />
      <Founders />
      <Advisors />
      <Footer />
    </>
  );
};

export default withYandexMetrika(wowAnimated(About));
