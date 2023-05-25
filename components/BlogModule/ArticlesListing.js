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
              <div className="col-lg-4 col-md-6 mb-4 pb-2" key={article.id}>
                <div className="card blog blog-primary rounded border-0 shadow overflow-hidden h-100">
                  <div className="position-relative">
                    <img
                      src={`http://localhost:1337${article.attributes.featuredImage.data.attributes.url}`}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="overlay rounded-top"></div>
                  </div>
                  <div className="card-body content d-flex flex-column justify-content-between">
                    <h5>
                      <a
                        href={`/blog/${article.attributes.slug}`}
                        className="card-title title text-dark"
                      >
                        {article.attributes.title}
                      </a>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <a
                        href={`/blog/${article.attributes.slug}`}
                        className="text-muted readmore"
                      >
                        Read More{" "}
                        <i className="uil uil-angle-right-b align-middle"></i>
                      </a>
                    </div>
                  </div>
                  <div className="author">
                    <small className="date">
                      <i className="uil uil-calendar-alt"></i>{" "}
                      {moment(new Date(article.attributes.publishedOn)).format(
                        "Do MMMM, YYYY"
                      )}
                    </small>
                  </div>
                </div>
              </div>
            ))}

          <div className="col-12">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesListing;
