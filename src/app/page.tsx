import Footer from "./components/CommonModule/Footer";
import Header from "./components/CommonModule/Header";
import HomeAwards from "./components/HomeModule/HomeAwards";
import HomeBusinessGrowth from "./components/HomeModule/HomeBusinessGrowth";
import HomeCashFlow from "./components/HomeModule/HomeCashFlow";
import HomeClients from "./components/HomeModule/HomeClients";
import HomeGoodNews from "./components/HomeModule/HomeGoodNews";
import HomeHero from "./components/HomeModule/HomeHero";
import HomeHowToEliminate from "./components/HomeModule/HomeHowToEliminate";
import HomeSolutions from "./components/HomeModule/HomeSolutions";
import HomeKlaimHelps from "./components/HomeModule/HomeKlaimHelps";
import HomeTestimonials from "./components/HomeModule/HomeTestimonials";
import HomeCardBanner from "./components/HomeModule/HomeCardBanner";
import HomeGetStarted from "./components/HomeModule/HomeGetStarted";
import HomeFAQ from "./components/HomeModule/HomeFAQ";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeClients />
      <HomeHowToEliminate />
      <HomeCashFlow />
      <HomeGoodNews />
      <HomeBusinessGrowth />
      <HomeKlaimHelps />
      <HomeSolutions />
      <HomeAwards />
      <HomeTestimonials />
      <HomeCardBanner />
      <HomeGetStarted />
      <HomeFAQ />
      <Footer />
    </>
  );
}
