import React, { useState } from "react";
import { ArrowRight } from "react-feather";
import Lightbox from "yet-another-react-lightbox";

const AboutUs = () => {
  const [showAboutUsVideoModal, setShowAboutUsVideoModal] = useState(false);
  return (
    <>
      <Lightbox
        open={showAboutUsVideoModal}
        close={() => setShowAboutUsVideoModal(false)}
        carousel={{ finite: true }}
        styles={{ container: { backgroundColor: "rgba(26,42,58,0.94)" } }}
        slides={[{ type: "about-video" }]}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
          slide: (slide) => {
            switch (slide.type) {
              case "about-video":
                return (
                  <iframe
                    width="1000"
                    height="563"
                    src="https://www.youtube.com/embed/Hmzpns7V8dM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                );
            }
          },
        }}
      />
      <section className="section mt-5">
        <div className="container">
          <div
            className="row align-items-center wow animate__animated animate__fadeInUp"
            data-wow-delay=".1s"
          >
            <div className="col-lg-5 col-md-6">
              <div className="position-relative">
                <img
                  src="assets/images/klaim/medical.jpg"
                  className="rounded img-fluid mx-auto d-block shadow rounded"
                  alt=""
                />
                <div className="play-icon">
                  <a
                    onClick={() => setShowAboutUsVideoModal(true)}
                    className="play-btn border-0"
                  >
                    <i className="mdi mdi-play text-primary rounded-circle shadow"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h4 className="title mb-4">
                  Eliminate the Uncertainty of Claims Reimbursement
                </h4>
                <p className="text-muted para-desc">
                  <span className="fw-bold">
                    Imagine Waiting for 113 Days for a Reimbursement
                  </span>{" "}
                  that may never come. This is the reality for many healthcare
                  providers. In addition to long payment cycles, a staggering{" "}
                  <span className="fw-bold">
                    15% of Medical Claims are Denied
                  </span>
                </p>
                <p className="text-muted para-desc mb-0 fw-bold">
                  Don’t Let The Uncertainty of Insurance Claims Reimbursement
                  Hold You Back
                </p>

                <div className="mt-4">
                  <p className="mb-0 mt-3 d-flex flex-column align-items-center d-md-block">
                    Klaim Can Help With a Customized Solution
                    <a
                      href="#contact-form"
                      className="text-primary ms-2 h6 mb-0 cta-padding"
                    >
                      Get a Call Back
                      <ArrowRight className="fea icon-sm" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
