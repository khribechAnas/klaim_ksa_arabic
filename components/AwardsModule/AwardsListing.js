import moment from "moment";
import React from "react";

const AwardsListing = ({ articles }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          {articles.data.map((article) => (
            <div className="col-lg-4 col-md-6 mb-4 pb-2" key={article.id}>
              <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
                <div className="position-relative">
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${article.attributes.featuredImage.data.attributes.url}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="overlay rounded-top"></div>
                </div>
                <div className="card-body content">
                  <h5>
                    <a
                      href={`/awards/${article.attributes.slug}`}
                      className="card-title title text-dark"
                    >
                      {article.attributes.title}
                    </a>
                  </h5>
                  <div className="post-meta d-flex justify-content-between mt-3">
                    <div></div>
                    <a
                      href={`/awards/${article.attributes.slug}`}
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

          {/* <div className="col-12">
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

export default AwardsListing;
