import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticlesHero from "../../components/BlogModule/ArticlesHero";
import ArticlesListing from "../../components/BlogModule/ArticlesListing";

const Articles = ({ articles, tags }) => {
  return (
    <>
      <Head>
        <title>Klaim - Blog</title>
      </Head>
      <Header />
      <ArticlesHero />
      <ArticlesListing articles={articles} tags={tags} />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const buildArticleFilters = () => {
    let filters = "";
    if (query.tag) {
      filters = filters.concat(
        filters,
        `&filters[blog_tags][name][$eq]=${query.tag}`
      );
    }
    if (query.search) {
      filters = filters.concat(
        filters,
        `&filters[title][$contains]=${query.search}`
      );
    }
    return filters;
  };
  const articlesResponse = await fetch(
    `${
      process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT
    }/blog-articles?populate=*${buildArticleFilters()}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  const articles = await articlesResponse.json();

  const tagsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/blog-tags?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  const tags = await tagsResponse.json();

  return {
    props: {
      articles,
      tags,
    },
  };
}

export default Articles;
