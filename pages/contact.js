import Head from "next/head";
import React from "react";
import GetInTouch from "../components/ContactModule/GetInTouch";
import Hero from "../components/ContactModule/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import withYandexMetrika from "../components/HOC/withYandexMetrika";
import wowAnimated from "../components/HOC/wowAnimated";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Klaim - Contact Us</title>
      </Head>
      <Header />
      <Hero />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default withYandexMetrika(wowAnimated(Contact));
