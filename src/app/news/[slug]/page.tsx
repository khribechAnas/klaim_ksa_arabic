import Footer from "@/app/components/CommonModule/Footer";
import Header from "@/app/components/CommonModule/Header";
import NewsArticleText from "@/app/components/NewsModule/NewsArticleText";
import NewsArticleTitle from "@/app/components/NewsModule/NewsArticleTitle";
import React from "react";

const loadNewsArticle = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/media-articles?populate=*&filters[slug][$eq]=${slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  return response.json();
};

const NewsArticlePage = async ({ params }: any) => {
  const newsArticle = await loadNewsArticle(params.slug);
  return (
    <>
      <Header />
      <NewsArticleTitle newsArticle={newsArticle.data[0]} />
      <NewsArticleText newsArticle={newsArticle.data[0]} />
      <Footer />
    </>
  );
};

export default NewsArticlePage;
