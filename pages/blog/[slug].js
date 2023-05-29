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
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    }
  );
  const articles = await articlesResponse.json();
  const article = articles?.data[0];

  const tagsResponse = await fetch(
    `${process.env.STRAPI_ENDPOINT}/blog-tags?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    }
  );
  const tags = await tagsResponse.json();

  const recentArticlesResponse = await fetch(
    `${process.env.STRAPI_ENDPOINT}/blog-articles?populate=*&pagination[limit]=3&sort=publishedOn:desc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
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
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
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
