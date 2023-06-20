import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import AwardsHero from "../../components/AwardsModule/AwardsHero";
import Footer from "../../components/Footer";
import AwardsListing from "../../components/AwardsModule/AwardsListing";

const AwardsPage = ({ articles }) => {
  console.log(articles);
  return (
    <>
      <Head>
        <title>Klaim - Blog</title>
      </Head>
      <Header />
      <AwardsHero />
      <AwardsListing articles={articles} />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const articlesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/awards-articles?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  const articles = await articlesResponse.json();

  return {
    props: {
      articles,
    },
  };
}

export default AwardsPage;
