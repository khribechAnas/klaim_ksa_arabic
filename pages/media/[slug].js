import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MediaDetails from "../../components/MediaModule/MediaDetails";

const MediaSlug = ({ article, recentArticles }) => {
  return (
    <>
      <Head>
        <title>Klaim - ${null}</title>
      </Head>
      <Header />
      <MediaDetails article={article} recentArticles={recentArticles} />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const articlesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/media-articles?populate=*&filters[slug][$eq]=${params.slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  const articles = await articlesResponse.json();
  const article = articles?.data[0];

  const recentArticlesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/blog-articles?populate=*&pagination[limit]=3&sort=publishedOn:desc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  const recentArticles = await recentArticlesResponse.json();

  return {
    props: {
      article,
      recentArticles,
    },
  };
}

export default MediaSlug;
