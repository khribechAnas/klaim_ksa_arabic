/* eslint-disable react/no-unescaped-entities */
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Posts = ({ popularArticles, recentArticles }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push({ pathname: "/blog/articles", query: { search: searchQuery } });
  };

  return (
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="features-absolute blog-search">
              <div class="row justify-content-center">
                <div class="col-md-10">
                  <div class="text-center subcribe-form">
                    <form
                      style={{ "max-width": "800px;" }}
                      onSubmit={handleSearchSubmit}
                    >
                      <div class="mb-0">
                        <input
                          type="text"
                          id="help"
                          name="name"
                          class="border shadow rounded-pill bg-white-color"
                          required=""
                          placeholder="Search"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" class="btn btn-pills btn-primary">
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {popularArticles?.data.length > 0 && (
        <div class="container mt-4 mt-lg-0">
          <div class="row align-items-center mb-4 pb-2">
            <div class="col-md-8">
              <div class="section-title text-center text-md-start">
                <h4 class="mb-4">POPULAR POSTS</h4>
                <p class="text-muted mb-0 para-desc">
                  Dive into our most-read articles, spanning industry insights,
                  financial tips, and Klaim's groundbreaking fintech solutions.
                  See what's trending in our community and get up to speed with
                  the topics that are shaping the financial landscape
                </p>
              </div>
            </div>

            <div class="col-md-4 mt-4 mt-sm-0">
              <div class="text-center text-md-end">
                <Link href="/blog/articles" class="btn btn-primary">
                  See More{" "}
                  <i data-feather="arrow-right" class="fea icon-sm"></i>
                </Link>
              </div>
            </div>
          </div>

          <div class="row">
            {popularArticles.data.map((article) => (
              <div
                class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
                data-groups='["business"]'
                key={article.id}
              >
                <div class="card blog border-0 work-container work-primary work-classic shadow rounded-md overflow-hidden h-100">
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${article.attributes.featuredImage.data.attributes.url}`}
                    class="img-fluid work-image"
                    alt=""
                  />
                  <div class="card-body">
                    <div class="content">
                      {article.attributes.blog_tags.data.map((tag) => (
                        <a
                          href={`/blog/articles?tag=${tag.attributes.name}`}
                          class="badge badge-link bg"
                          key={tag.id}
                        >
                          {tag.attributes.name}
                        </a>
                      ))}
                      <h5 class="mt-3">
                        <a
                          href={`/blog/${article.attributes.slug}`}
                          class="text-dark title"
                        >
                          {article.attributes.title}
                        </a>
                      </h5>
                      <p class="text-muted">
                        {article.attributes.shortDescription}
                      </p>
                      <a
                        href={`/blog/${article.attributes.slug}`}
                        class="link h6"
                      >
                        Read More{" "}
                        <i class="uil uil-angle-right-b align-middle"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div class="container mt-100 mt-60">
        <div class="row align-items-center mb-4 pb-2">
          <div class="col-md-8">
            <div class="section-title text-center text-md-start">
              <h4 class="mb-4">POPULAR NEWS</h4>
              <p class="text-muted mb-0 para-desc">
                Stay updated with the most noteworthy news stories about Klaim
                and the fintech sector. Uncover trends, advancements, and the
                impacts of our work that have caught the world's attention
              </p>
            </div>
          </div>

          <div class="col-md-4 mt-4 mt-sm-0">
            <div class="text-center text-md-end">
              <Link href="/blog/articles" class="btn btn-primary">
                See More <i data-feather="arrow-right" class="fea icon-sm"></i>
              </Link>
            </div>
          </div>
        </div>

        <div class="row">
          {/* {recentArticles.data.map((article) => (
            <div
              class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
              data-groups='["business"]'
              key={article.id}
            >
              <div class="card blog border-0 work-container work-primary work-classic shadow rounded-md overflow-hidden h-100">
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${article.attributes.featuredImage.data.attributes.url}`}
                  class="img-fluid work-image"
                  alt=""
                />
                <div class="card-body">
                  <div class="content">
                    {article.attributes.blog_tags.data.map((tag) => (
                      <a
                        href={`/blog/articles?tag=${tag.attributes.name}`}
                        class="badge badge-link bg me-1"
                        key={tag.id}
                      >
                        {tag.attributes.name}
                      </a>
                    ))}
                    <h5 class="mt-3">
                      <a
                        href={`/blog/${article.attributes.slug}`}
                        class="text-dark title"
                      >
                        {article.attributes.title}
                      </a>
                    </h5>
                    <p class="text-muted">
                      {article.attributes.shortDescription}
                    </p>
                    <a
                      href={`/blog/${article.attributes.slug}`}
                      class="link h6"
                    >
                      Read More{" "}
                      <i class="uil uil-angle-right-b align-middle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
      <div class="container-fluid mt-100 mt-60">
        <div
          class="rounded-md shadow-md py-5 position-relative"
          style={{ background: "url('assets/images/3.jpg') center center;" }}
        >
          <div class="bg-overlay rounded-md"></div>
          <div class="container py-5">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="section-title text-center">
                  <h2 class="fw-bold text-white title-dark mb-4 pb-2">
                    People are podcasting <br /> all over the world
                  </h2>
                  <a href={`/blog/articles`} class="btn btn-primary">
                    Read More{" "}
                    <i data-feather="arrow-right" class="fea icon-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-100 mt-60">
        <div class="row align-items-center mb-4 pb-2">
          <div class="col-md-8">
            <div class="section-title text-center text-md-start">
              <h4 class="mb-4">BLOG</h4>
              <p class="text-muted mb-0 para-desc">
                Explore our hub of knowledge where we share insights, analyses,
                and opinions on everything fintech. Consider our blog a rich
                resource brimming with financial acumen, advanced tech trends,
                and expert guidance, all designed to bolster your financial
                understanding and decision-making.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          {recentArticles.data.map((article) => (
            <div
              class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
              data-groups='["business"]'
              key={article.id}
            >
              <div class="card blog border-0 work-container work-primary work-classic shadow rounded-md overflow-hidden h-100">
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${article.attributes.featuredImage.data.attributes.url}`}
                  class="img-fluid work-image"
                  alt=""
                />
                <div class="card-body">
                  <div class="content">
                    {article.attributes.blog_tags.data.map((tag) => (
                      <a
                        href={`/blog/articles?tag=${tag.attributes.name}`}
                        class="badge badge-link bg me-1"
                        key={tag.id}
                      >
                        {tag.attributes.name}
                      </a>
                    ))}
                    <h5 class="mt-3">
                      <a
                        href={`/blog/${article.attributes.slug}`}
                        class="text-dark title"
                      >
                        {article.attributes.title}
                      </a>
                    </h5>
                    <p class="text-muted">
                      {article.attributes.shortDescription}
                    </p>
                    <a
                      href={`/blog/${article.attributes.slug}`}
                      class="link h6"
                    >
                      Read More{" "}
                      <i class="uil uil-angle-right-b align-middle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div class="col-12 mt-4 pt-2">
            <div class="text-center">
              <Link href="/blog/articles" class="btn btn-primary">
                See More <i data-feather="arrow-right" class="fea icon-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
