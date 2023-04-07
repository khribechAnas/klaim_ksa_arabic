import React from "react";
import { ArrowRight } from "react-feather";

const WhoWeAre = () => {
  return (
    <section className="section">
      <div className="container">
        <div
          className="row align-items-center wow animate__animated animate__fadeInUp"
          data-wow-delay=".1s"
          id="counter"
        >
          <div className="col-md-6 mb-lg-0 mb-4">
            <img
              src="assets/images/klaim/about2.jpg"
              className="rounded img-fluid mx-auto d-block shadow rounded"
              alt=""
            />
          </div>

          <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="ms-lg-4">
              <div className="section-title">
                <h4 className="title mb-4">Who we are?</h4>
                <p className="text-muted">
                  Established in 2019, Klaim is an award-winning fintech company
                  dedicated to strengthening the financial stability of
                  healthcare providers in the GCC and beyond. With a mission to
                  revolutionize the tedious process of medical claims
                  reimbursement, we provide healthcare providers with the cash
                  flow and working capital they need to deliver high-quality
                  care, keeping their customers happy and satisfied
                </p>
                <p className="text-muted">
                  By purchasing medical claims and guaranteeing quick and
                  seamless payouts, KLAIM streamlines the reimbursement process
                  and empowers providers to focus on what really matters -
                  delivering exceptional healthcare
                </p>
                <p className="mb-0 mt-3">
                  Feel free to reach out
                  <a
                    href="/contact.html"
                    className="text-primary ms-2 h6 mb-0"
                    target="_blank"
                  >
                    Contact Us
                    <ArrowRight className="fea icon-sm ms-1" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div
          className="d-flex flex-wrap justify-content-center wow animate__animated animate__fadeInUp"
          data-wow-delay=".1s"
        >
          <a
            href="https://www.techstars.com/newsroom/announcing-the-2021-class-of-the-techstars-hub71-accelerator"
            target="_blank"
            className="col-lg-2 col-md-2 col-6 text-center pt-4"
          >
            <img
              src="assets/images/klaim/techstars.png"
              className="avatar who-we-are"
              alt=""
            />
          </a>

          <a
            href="https://mbrif.ae/"
            target="_blank"
            className="col-lg-2 col-md-2 col-6 text-center pt-4"
          >
            <img
              src="assets/images/klaim/mbrif.png"
              className="avatar who-we-are"
              alt=""
            />
          </a>

          {/* <a href="#" className="col-lg-2 col-md-2 col-6 text-center pt-4">
            <img
              src="assets/images/klaim/kpmg.png"
              className="avatar who-we-are"
              alt=""
            />
          </a>

          <a href="#" className="col-lg-2 col-md-2 col-6 text-center pt-4">
            <img
              src="assets/images/klaim/varri.png"
              className="avatar who-we-are"
              alt=""
            />
          </a>

          <a href="#" className="col-lg-2 col-md-2 col-6 text-center pt-4">
            <img
              src="assets/images/klaim/mea-markets.png"
              className="avatar who-we-are"
              alt=""
            />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
