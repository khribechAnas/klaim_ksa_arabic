import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HRArticleDetails from "../../components/HRModule/HRArticleDetails";

const Article = ({ article }) => {
  return (
    <>
      <Head>
        <title>Klaim - ${null}</title>
      </Head>
      <Header />
      <HRArticleDetails article={article} />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const articlesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/hr-articles?populate=*&filters[slug][$eq]=${params.slug}`,
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

export default Article;
