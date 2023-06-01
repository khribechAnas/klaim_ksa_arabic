import moment from "moment";
import React from "react";

const Hero = ({ featuredArticles }) => {
  return (
    <>
      <section class="home-slider position-relative">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            {featuredArticles.data.map((article, index) => (
              <div
                class={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="3000"
                key={article.id}
              >
                <div
                  class="bg-home-75vh d-flex align-items-center"
                  style={{
                    background: `url('${process.env.STRAPI_ENDPOINT}${article.attributes.featuredImage.data.attributes.url}') center center no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  <div class="bg-overlay"></div>
                  <div class="container">
                    <div class="row mt-5 justify-content-center">
                      <div class="col-12">
                        <div class="title-heading text-center">
                          <h2 class="text-white title-dark mb-3">
                            {article.attributes.title}
                          </h2>
                          <ul class="list-unstyled">
                            <li class="list-inline-item small date text-white-50">
                              <i class="uil uil-calendar-alt text-white title-dark"></i>{" "}
                              {moment(
                                new Date(article.attributes.publishedOn)
                              ).format("Do MMMM, YYYY")}
                            </li>
                          </ul>
                          <p class="para-desc mx-auto text-white-50 mb-0">
                            {article.attributes.shortDescription}
                          </p>
                          <div class="mt-4">
                            <a
                              href={`/blog/${article.attributes.slug}`}
                              class="btn btn-primary"
                            >
                              Read More{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
