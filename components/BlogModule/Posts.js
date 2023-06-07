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
                <h4 class="mb-4">Popular post</h4>
                <p class="text-muted mb-0 para-desc">
                  Start working with{" "}
                  <span class="text-primary fw-bold">Landrick</span> that can
                  provide everything you need to generate awareness, drive
                  traffic, connect.
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
              <h4 class="mb-4">Popular News</h4>
              <p class="text-muted mb-0 para-desc">
                Start working with{" "}
                <span class="text-primary fw-bold">Landrick</span> that can
                provide everything you need to generate awareness, drive
                traffic, connect.
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
              <h4 class="mb-4">All News or Blog Post</h4>
              <p class="text-muted mb-0 para-desc">
                Start working with{" "}
                <span class="text-primary fw-bold">Landrick</span> that can
                provide everything you need to generate awareness, drive
                traffic, connect.
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
