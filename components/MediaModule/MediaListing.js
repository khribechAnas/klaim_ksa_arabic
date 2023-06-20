import moment from "moment";
import React from "react";

const MediaListing = ({ articles }) => {
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
                      href={`/media/${article.attributes.slug}`}
                      className="card-title title text-dark"
                    >
                      {article.attributes.title}
                    </a>
                  </h5>
                  <div className="post-meta d-flex justify-content-between mt-3">
                    <div></div>
                    <a
                      href={`/media/${article.attributes.slug}`}
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
                    Celebrating Klaim's industry recognition and achievements.
                    <br />
                    Discover how our commitment to excellence in fintech
                    innovation and customer service has been honored
                  </h2>
                  <a href={`/awards`} class="btn btn-primary">
                    Read More{" "}
                    <i data-feather="arrow-right" class="fea icon-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaListing;
