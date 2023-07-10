import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MediaHero from "../../components/MediaModule/MediaHero";
import MediaListing from "../../components/MediaModule/MediaListing";

const MediaPage = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Klaim - Media</title>
      </Head>
      <Header />
      <MediaHero />
      <MediaListing articles={articles} />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const articlesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/media-articles?populate=*`,
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

export default MediaPage;
