import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/BlogModule/Hero";
import Posts from "../../components/BlogModule/Posts";

const Blog = ({
  featuredArticles,
  popularArticles,
  recentArticles,
  allArticles,
}) => {
  return (
    <>
      <Head>
        <title>Klaim - Blog</title>
      </Head>
      <Header />
      <Hero featuredArticles={featuredArticles} />
      <Posts
        popularArticles={popularArticles}
        recentArticles={recentArticles}
        allArticles={allArticles}
      />
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const featuredArticlesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/blog-articles?populate=*&filters[isFeatured][$eq]=true`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  const featuredArticles = await featuredArticlesResponse.json();

  const popularArticlesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/blog-articles?populate=*&filters[isPopular][$eq]=true&pagination[limit]=3&sort=publishedOn:desc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  const popularArticles = await popularArticlesResponse.json();

  const recentArticlesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/blog-articles?populate=*&pagination[limit]=6&sort=publishedOn:desc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  const recentArticles = await recentArticlesResponse.json();

  const allArticlesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/blog-articles?populate=*&pagination[limit]=6&pagination[start]=3&sort=publishedOn:desc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  const allArticles = await allArticlesResponse.json();

  return {
    props: {
      featuredArticles,
      popularArticles,
      recentArticles,
      allArticles,
    },
  };
}

export default Blog;
