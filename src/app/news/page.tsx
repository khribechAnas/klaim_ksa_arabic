import React from "react";
import Header from "../components/CommonModule/Header";
import Footer from "../components/CommonModule/Footer";
import NewsTitle from "../components/NewsModule/NewsTitle";
import NewsLogos from "../components/NewsModule/NewsLogos";
import News from "../components/NewsModule/News";

const NewsPage = ({ searchParams }: any) => {
  return (
    <>
      <Header />
      <NewsTitle />
      <NewsLogos />
      <News searchParams={searchParams} />
      <Footer />
    </>
  );
};

export default NewsPage;
