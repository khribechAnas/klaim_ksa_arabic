import Footer from "./components/CommonModule/Footer";
import Header from "./components/CommonModule/Header";
import HomeBusinessGrowth from "./components/HomeModule/HomeBusinessGrowth";
import HomeCashFlow from "./components/HomeModule/HomeCashFlow";
import HomeClients from "./components/HomeModule/HomeClients";
import HomeGoodNews from "./components/HomeModule/HomeGoodNews";
import HomeHero from "./components/HomeModule/HomeHero";
import HomeHowToEliminate from "./components/HomeModule/HomeHowToEliminate";
import HomeKlaimHelps from "./components/HomeModule/HomeKlaimHelps";

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
      <Footer />
    </>
  );
}
