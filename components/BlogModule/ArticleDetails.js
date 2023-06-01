import moment from "moment";
import React from "react";

const ArticleDetails = ({ article, tags, recentArticles, relatedArticles }) => {
  return (
    <section class="bg-half-170 d-table w-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-7">
            <div class="card border-0 shadow rounded overflow-hidden">
              <img
                src={`${process.env.STRAPI_ENDPOINT}${article.attributes.featuredImage.data.attributes.url}`}
                class="img-fluid"
                alt=""
              />

              <div class="card-body">
                <div class="text-center">
                  {article.attributes.blog_tags.data.map((tag) => (
                    <span class="badge bg-primary me-2" key={tag.id}>
                      {tag.attributes.name}
                    </span>
                  ))}
                  <h4 class="mt-3">{article.attributes.title}</h4>

                  <ul class="list-unstyled mt-3">
                    <li class="list-inline-item date text-muted">
                      <i class="mdi mdi-calendar-check"></i>{" "}
                      {moment(new Date(article.attributes.publishedOn)).format(
                        "Do MMMM, YYYY"
                      )}
                    </li>
                  </ul>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.attributes.content,
                  }}
                />
              </div>
            </div>

            {relatedArticles?.data.length > 0 && (
              <div class="card shadow rounded border-0 mt-4">
                <div class="card-body">
                  <h5 class="card-title mb-0">Related Posts :</h5>

                  <div class="row">
                    {relatedArticles?.data.map((article) => (
                      <div class="col-lg-6 mt-4 pt-2" key={article.id}>
                        <div class="card blog blog-primary rounded border-0 shadow">
                          <div class="position-relative">
                            <img
                              src={`${process.env.STRAPI_ENDPOINT}${article.attributes.featuredImage.data.attributes.url}`}
                              class="card-img-top rounded-top"
                              alt="..."
                            />
                            <div class="overlay rounded-top"></div>
                          </div>
                          <div class="card-body content">
                            <h5>
                              <a
                                href={`/blog/${article.attributes.slug}`}
                                class="card-title title text-dark"
                              >
                                {article.attributes.title}
                              </a>
                            </h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                              <a
                                href={`/blog/${article.attributes.slug}`}
                                class="text-muted readmore"
                              >
                                Read More{" "}
                                <i class="uil uil-angle-right-b align-middle"></i>
                              </a>
                            </div>
                          </div>
                          <div class="author">
                            <small class="date">
                              <i class="uil uil-calendar-alt"></i>{" "}
                              {moment(
                                new Date(article.attributes.publishedOn)
                              ).format("Do MMMM, YYYY")}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div class="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="card border-0 sidebar sticky-bar ms-lg-4">
              <div class="card-body p-0">
                <div class="widget">
                  <span class="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                    Recent Posts
                  </span>

                  <div class="mt-4">
                    {recentArticles.data.map((article) => (
                      <div
                        class="d-flex align-items-center mb-3"
                        key={article.id}
                      >
                        <img
                          src={`${process.env.STRAPI_ENDPOINT}${article.attributes.featuredImage.data.attributes.url}`}
                          class="avatar avatar-small rounded"
                          style={{ width: "auto;", objectFit: "cover" }}
                          alt=""
                        />
                        <div class="flex-1 ms-3">
                          <a
                            href={`/blog/${article.attributes.slug}`}
                            class="d-block title text-dark"
                          >
                            {article.attributes.title}
                          </a>
                          <span class="text-muted">
                            {moment(
                              new Date(article.attributes.publishedOn)
                            ).format("Do MMMM, YYYY")}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div class="widget mt-4">
                  <span class="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                    Tags
                  </span>

                  <div class="tagcloud text-center mt-4">
                    {tags.data.map((tag) => (
                      <a
                        href={`/blog/articles?tag=${tag.attributes.name}`}
                        class="rounded"
                        key={tag.id}
                      >
                        {tag.attributes.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetails;
