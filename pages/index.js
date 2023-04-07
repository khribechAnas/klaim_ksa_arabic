import Header from "../components/Header";
import Partners from "../components/HomeModule/Partners";
import AboutUs from "../components/HomeModule/AboutUs";
import WorkProcess from "../components/HomeModule/WorkProcess";
import Boxes from "../components/HomeModule/Boxes";
import Advantages from "../components/HomeModule/Advantages";
import Review from "../components/HomeModule/Review";
import Hero from "../components/HomeModule/Hero";
import Contact from "../components/HomeModule/Contact";
import Connect from "../components/HomeModule/Connect";
import Faq from "../components/HomeModule/Faq";
import GetStarted from "../components/HomeModule/GetStarted";
import Solutions from "../components/HomeModule/Solutions";
import Footer from "../components/Footer";
import wowAnimated from "../components/HOC/wowAnimated";
import CookiePolicy from "../components/CookiePolicy";
import Head from "next/head";
import withYandexMetrika from "../components/HOC/withYandexMetrika";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Klaim - Claim Payment Acceleration Solution</title>
      </Head>
      <Header />
      <Hero />
      <Partners />
      <AboutUs />
      <WorkProcess />
      <Boxes />
      <Advantages />
      <Review />
      <Contact />
      <Connect />
      <Faq />
      <GetStarted />
      <Solutions />
      <Footer />
    </>
  );
};

export default withYandexMetrika(wowAnimated(Home));
