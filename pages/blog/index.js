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
    "${process.env.STRAPI_ENDPOINT}/blog-articles?populate=*&filters[isFeatured][$eq]=true",
    {
      headers: {
        Authorization: `Bearer 54c1a5e9425d3b817a9f9610a3905fbbc881771a1e00bbb921ce9f95f890b84f8b2e46b2fdd3adb05e91f996d3cdae6bedbecfb42a95b65d925c8fb58edf34cbe6739720c9f289e11bf22e98bbf3cbd66b042678e2128c66132adaf9f930b9a7d03806623aeb51e1ea5105972160fa7d6b3d4474fdd801401e6251ad2675dc7e`,
      },
    }
  );
  const featuredArticles = await featuredArticlesResponse.json();

  const popularArticlesResponse = await fetch(
    "${process.env.STRAPI_ENDPOINT}/blog-articles?populate=*&filters[isPopular][$eq]=true&pagination[limit]=3&sort=publishedOn:desc",
    {
      headers: {
        Authorization: `Bearer 54c1a5e9425d3b817a9f9610a3905fbbc881771a1e00bbb921ce9f95f890b84f8b2e46b2fdd3adb05e91f996d3cdae6bedbecfb42a95b65d925c8fb58edf34cbe6739720c9f289e11bf22e98bbf3cbd66b042678e2128c66132adaf9f930b9a7d03806623aeb51e1ea5105972160fa7d6b3d4474fdd801401e6251ad2675dc7e`,
      },
    }
  );
  const popularArticles = await popularArticlesResponse.json();

  const recentArticlesResponse = await fetch(
    "${process.env.STRAPI_ENDPOINT}/blog-articles?populate=*&pagination[limit]=3&sort=publishedOn:desc",
    {
      headers: {
        Authorization: `Bearer 54c1a5e9425d3b817a9f9610a3905fbbc881771a1e00bbb921ce9f95f890b84f8b2e46b2fdd3adb05e91f996d3cdae6bedbecfb42a95b65d925c8fb58edf34cbe6739720c9f289e11bf22e98bbf3cbd66b042678e2128c66132adaf9f930b9a7d03806623aeb51e1ea5105972160fa7d6b3d4474fdd801401e6251ad2675dc7e`,
      },
    }
  );
  const recentArticles = await recentArticlesResponse.json();

  const allArticlesResponse = await fetch(
    "${process.env.STRAPI_ENDPOINT}/blog-articles?populate=*&pagination[limit]=6&pagination[start]=3&sort=publishedOn:desc",
    {
      headers: {
        Authorization: `Bearer 54c1a5e9425d3b817a9f9610a3905fbbc881771a1e00bbb921ce9f95f890b84f8b2e46b2fdd3adb05e91f996d3cdae6bedbecfb42a95b65d925c8fb58edf34cbe6739720c9f289e11bf22e98bbf3cbd66b042678e2128c66132adaf9f930b9a7d03806623aeb51e1ea5105972160fa7d6b3d4474fdd801401e6251ad2675dc7e`,
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
