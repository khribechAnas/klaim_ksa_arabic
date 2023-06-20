import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AwardDetails from "../../components/AwardsModule/AwardDetails";

const Award = ({ article }) => {
  return (
    <>
      <Head>
        <title>Klaim - ${null}</title>
      </Head>
      <Header />
      <AwardDetails article={article} />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const articlesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/awards-articles?populate=*&filters[slug][$eq]=${params.slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  const articles = await articlesResponse.json();
  const article = articles?.data[0];

  return {
    props: {
      article,
    },
  };
}

export default Award;
