import { useHubspotForm } from "next-hubspot";
import React from "react";

const Contact = () => {
  const {} = useHubspotForm({
    portalId: "9149608",
    formId: "3d7dcd60-d105-4fd9-aaa4-825c830b7898",
    region: "na1",
    target: "#hubspot-form-wrapper",
  });

  return (
    <section className="section overflow-hidden mt-200 mt-60" id="contact-form">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1 wow animate__animated animate__fadeInLeft"
            data-wow-delay=".1s"
          >
            <div className="card shadow rounded border-0">
              <div className="card-body py-5">
                <h4 className="card-title">Get In Touch !</h4>
                <div className="custom-form mt-3" id="hubspot-form-wrapper" />
              </div>
            </div>
          </div>

          <div
            className="col-lg-7 col-md-6 order-1 order-md-2 wow animate__animated animate__fadeInRight"
            data-wow-delay=".1s"
          >
            <div className="ms-lg-4">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Regain Control of Your Cash Flow</h4>
                <p className="text-muted para-desc">
                  Take control of your medical billing process with KLAIM’s
                  innovative solutions. Whether you’re a large healthcare chain
                  or a family-owned private practice, our solutions will help
                  streamline your cash flow, reduce costs, and drive
                  profitability. Join us and take control of your healthcare
                  billing process today
                </p>
              </div>

              <h5>Our Branches:</h5>

              <div className="row">
                <div className="col-md-12 col-12 mt-4">
                  <div className="d-flex">
                    <i className="uil uil-building text-primary h4"></i>
                    <div className="content ms-2">
                      <h5 className="mb-0">
                        <p
                          href="javascript:void(0)"
                          className="video-play-icon text-black mb-0"
                        >
                          UAE
                        </p>
                      </h5>

                      <p className="text-muted mb-0">
                        <a>Dubai, JLT Cluster F - Indigo Icon Tower 3404</a>
                        {/* <br />
                        <a href="mailto:hello@klaim.ai">hello@klaim.ai</a>
                        {" "}&#x2022;{" "}
                        <a href="tel:+971 (0)4 876 4096">+971 (0)4 876 4096</a> */}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-12 mt-4">
                  <div className="d-flex">
                    <i className="uil uil-building text-primary h4"></i>
                    <div className="content ms-2">
                      <h5 className="mb-0">
                        <p
                          href="javascript:void(0)"
                          className="video-play-icon text-black mb-0"
                        >
                          KSA
                        </p>
                      </h5>
                      <p className="text-muted mb-0">
                        <a>3141 Anas Ibn Malik Rd, Al Malqa, Riyadh 13521</a>
                        {/* <br />
                        <a href="mailto:helloksa@klaim.ai">helloksa@klaim.ai</a>
                        {" "}&#x2022;{" "}
                        <a href="tel:+971 (0)4 876 4096">+966 (0)11 510 2972</a> */}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-12 mt-4">
                  <div className="d-flex">
                    <i className="uil uil-building text-primary h4"></i>
                    <div className="content ms-2">
                      <h5 className="mb-0">
                        <p
                          href="javascript:void(0)"
                          className="video-play-icon text-black mb-0"
                        >
                          OMAN
                        </p>
                      </h5>
                      <p className="text-muted mb-0">
                        <a>
                          Muscat, Tamimah Building, Al Nahdah Road 395 PC 118
                        </a>
                        {/* <br />
                        <a href="mailto:helloksa@klaim.ai">helloksa@klaim.ai</a>
                        {" "}&#x2022;{" "}
                        <a href="tel:+971 (0)4 876 4096">+966 (0)11 510 2972</a> */}
                      </p>
                    </div>
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

export default Contact;
