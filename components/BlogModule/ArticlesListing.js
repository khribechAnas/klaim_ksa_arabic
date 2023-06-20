import moment from "moment";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ArticlesListing = ({ articles, tags }) => {
  const router = useRouter();
  const { tag } = router.query;

  const handleTagSelect = (tagName) => {
    if (!tagName) {
      return router.push({ pathname: router.pathname });
    }
    router.push({ pathname: router.pathname, query: { tag: tagName } });
  };

  return (
    <section className="section">
      <div className="container">
        <div class="row justify-content-center">
          <div class="col-12 filters-group-wrap">
            <div class="filters-group mb-4">
              <ul class="container-filter list-inline mb-0 filter-options text-center">
                <li
                  class={`list-inline-item categories-name border text-dark rounded ${
                    tag ? "" : "active"
                  }`}
                  data-group="all"
                  onClick={() => handleTagSelect(null)}
                >
                  All
                </li>
                {tags.data.map((tagObject) => (
                  <li
                    class={`list-inline-item categories-name border text-dark rounded ${
                      tag === tagObject.attributes.name ? "active" : ""
                    }`}
                    data-group={tagObject.attributes.name}
                    key={tagObject.id}
                    onClick={() => handleTagSelect(tagObject.attributes.name)}
                  >
                    {tagObject.attributes.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          {articles &&
            articles.data.map((article) => (
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

          {/* <div className="col-12 mt-5">
            <ul className="pagination justify-content-center mb-0">
              <li className="page-item">
                <a
                  className="page-link"
                  href="javascript:void(0)"
                  aria-label="Previous"
                >
                  Prev
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="javascript:void(0)">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0)">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0)">
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="javascript:void(0)"
                  aria-label="Next"
                >
                  Next
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ArticlesListing;
