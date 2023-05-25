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
    `http://strapi:1337/api/blog-articles?populate=*${buildArticleFilters()}`,
    {
      headers: {
        Authorization: `Bearer 54c1a5e9425d3b817a9f9610a3905fbbc881771a1e00bbb921ce9f95f890b84f8b2e46b2fdd3adb05e91f996d3cdae6bedbecfb42a95b65d925c8fb58edf34cbe6739720c9f289e11bf22e98bbf3cbd66b042678e2128c66132adaf9f930b9a7d03806623aeb51e1ea5105972160fa7d6b3d4474fdd801401e6251ad2675dc7e`,
      },
    }
  );
  const articles = await articlesResponse.json();

  const tagsResponse = await fetch(
    "http://strapi:1337/api/blog-tags?populate=*",
    {
      headers: {
        Authorization: `Bearer 54c1a5e9425d3b817a9f9610a3905fbbc881771a1e00bbb921ce9f95f890b84f8b2e46b2fdd3adb05e91f996d3cdae6bedbecfb42a95b65d925c8fb58edf34cbe6739720c9f289e11bf22e98bbf3cbd66b042678e2128c66132adaf9f930b9a7d03806623aeb51e1ea5105972160fa7d6b3d4474fdd801401e6251ad2675dc7e`,
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
