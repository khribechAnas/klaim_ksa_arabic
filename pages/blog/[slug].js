import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleDetails from "../../components/BlogModule/ArticleDetails";

const Article = ({ article, tags, recentArticles, relatedArticles }) => {
  return (
    <>
      <Head>
        <title>Klaim - ${null}</title>
      </Head>
      <Header />
      <ArticleDetails
        article={article}
        tags={tags}
        recentArticles={recentArticles}
        relatedArticles={relatedArticles}
      />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const articlesResponse = await fetch(
    `${process.env.STRAPI_ENDPOINT}/blog-articles?populate=*&filters[slug][$eq]=${params.slug}`,
    {
      headers: {
        Authorization: `Bearer 54c1a5e9425d3b817a9f9610a3905fbbc881771a1e00bbb921ce9f95f890b84f8b2e46b2fdd3adb05e91f996d3cdae6bedbecfb42a95b65d925c8fb58edf34cbe6739720c9f289e11bf22e98bbf3cbd66b042678e2128c66132adaf9f930b9a7d03806623aeb51e1ea5105972160fa7d6b3d4474fdd801401e6251ad2675dc7e`,
      },
    }
  );
  const articles = await articlesResponse.json();
  const article = articles?.data[0];

  const tagsResponse = await fetch(
    "${process.env.STRAPI_ENDPOINT}/blog-tags?populate=*",
    {
      headers: {
        Authorization: `Bearer 54c1a5e9425d3b817a9f9610a3905fbbc881771a1e00bbb921ce9f95f890b84f8b2e46b2fdd3adb05e91f996d3cdae6bedbecfb42a95b65d925c8fb58edf34cbe6739720c9f289e11bf22e98bbf3cbd66b042678e2128c66132adaf9f930b9a7d03806623aeb51e1ea5105972160fa7d6b3d4474fdd801401e6251ad2675dc7e`,
      },
    }
  );
  const tags = await tagsResponse.json();

  const recentArticlesResponse = await fetch(
    "${process.env.STRAPI_ENDPOINT}/blog-articles?populate=*&pagination[limit]=3&sort=publishedOn:desc",
    {
      headers: {
        Authorization: `Bearer 54c1a5e9425d3b817a9f9610a3905fbbc881771a1e00bbb921ce9f95f890b84f8b2e46b2fdd3adb05e91f996d3cdae6bedbecfb42a95b65d925c8fb58edf34cbe6739720c9f289e11bf22e98bbf3cbd66b042678e2128c66132adaf9f930b9a7d03806623aeb51e1ea5105972160fa7d6b3d4474fdd801401e6251ad2675dc7e`,
      },
    }
  );
  const recentArticles = await recentArticlesResponse.json();

  let relatedArticleFilters = "";
  if (article) {
    article.attributes.blog_tags.data.forEach((tag, index) => {
      relatedArticleFilters += `&filters[$or][${index}][blog_tags][name][$eq]=${tag.attributes.name}`;
    });
    relatedArticleFilters += `&filters[id][$ne]=${article.id}`;
  }

  const relatedArticlesResponse = await fetch(
    `${process.env.STRAPI_ENDPOINT}/blog-articles?populate=*&pagination[limit]=2&sort=publishedOn:desc${relatedArticleFilters}`,
    {
      headers: {
        Authorization: `Bearer 54c1a5e9425d3b817a9f9610a3905fbbc881771a1e00bbb921ce9f95f890b84f8b2e46b2fdd3adb05e91f996d3cdae6bedbecfb42a95b65d925c8fb58edf34cbe6739720c9f289e11bf22e98bbf3cbd66b042678e2128c66132adaf9f930b9a7d03806623aeb51e1ea5105972160fa7d6b3d4474fdd801401e6251ad2675dc7e`,
      },
    }
  );
  const relatedArticles = await relatedArticlesResponse.json();

  return {
    props: {
      article,
      tags,
      recentArticles,
      relatedArticles,
    },
  };
}

export default Article;
