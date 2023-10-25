"use client";

import React, { useEffect, useState } from "react";
import NewsCTA from "./NewsCTA";
import NewsNewsletter from "./NewsNewsletter";

const News = () => {
  const [news, setNews] = useState<any>();
  const [defaultPage, setDefaultPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadNews();
  }, []);
  const loadNews = async (page = 1) => {
    setLoading(true);
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_STRAPI_ENDPOINT
      }/news-articles?populate=*&pagination[start]=0&pagination[limit]=${
        page * 4
      }`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }
    );
    const newsJson = await response.json();
    setNews(newsJson);
    setLoading(false);
  };

  const handleLoadMore = () => {
    loadNews(defaultPage + 1);
    setDefaultPage(defaultPage + 1);
  };

  const renderPost = (newsArticle: any) => (
    <div className="w-full lg:w-1/2 text-center mb-12">
      <a href={newsArticle.attributes.link} target="_blank">
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}${newsArticle.attributes.featuredImage.data.attributes.url}`}
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </a>
      <a href={newsArticle.attributes.link} target="_blank">
        <h2 className="text-lg text-[#222B45] font-medium mt-7 mb-3.5 px-12">
          {newsArticle.attributes.title}
        </h2>
      </a>
      <p className="text-[#696F81] font-medium px-12">
        {newsArticle.attributes.shortDescription}
      </p>
    </div>
  );

  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        {news?.data?.length >= 1 && renderPost(news.data[0])}
        {news?.data?.length >= 2 && renderPost(news.data[1])}
        <NewsCTA />
        {news?.data?.length >= 3 && renderPost(news.data[2])}
        <NewsNewsletter />
        {news?.data?.map((newsArticle: any, index: number) => (
          <React.Fragment key={newsArticle.id}>
            {index >= 3 && renderPost(newsArticle)}
          </React.Fragment>
        ))}

        <div className="mb-12">
          {loading && (
            <div className="w-full flex items-center justify-center my-10">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-[#6135fb]"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {!loading && (
            <button
              className="border border-[#6135FB] rounded-lg px-20 py-4 text-[#6135FB] font-medium text-sm"
              onClick={handleLoadMore}
            >
              Load more
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
