import React from "react";
import { ArrowRight } from "react-feather";

const WorkProcess = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div
              className="section-title mb-lg-4 mb-0 pb-2 wow animate__animated animate__fadeInUp"
              data-wow-delay=".1s"
            >
              <h4 className="title mb-lg-4 mb-0">
                Unlock Your Cash in 3 Simple Steps
              </h4>
              {/* <p className="text-muted para-desc mx-auto mb-0">
                Getting Started With KLAIM Is Quick & Hassle-Free!
              </p> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mt-4 pt-2 d-flex">
            <div
              className="card work-process border-0 rounded shadow wow animate__animated animate__fadeInUp"
              data-wow-delay=".1s"
            >
              <div className="card-body d-flex flex-column">
                <h4 className="title">Register With Klaim</h4>
                <p className="text-muted para flex-1">
                  Simply sign up using your eClaimLink, Shafafiya, or Riayati
                  credentials to get started
                </p>
                <ul className="list-unstyled d-flex justify-content-between mb-0 mt-2">
                  <li className="step h1 mb-0 fw-bold">Step 01.</li>
                  <li className="step-icon">
                    <i className="uil uil-angle-double-right h1 mb-0"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-4 pt-2 d-flex">
            <div
              className="card work-process border-0 rounded shadow wow animate__animated animate__fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="card-body d-flex flex-column">
                <h4 className="title">Receive Your Proposal</h4>
                <p className="text-muted para flex-1">
                  With the help of our AI technology we will assess your claims
                  and provide you with a{" "}
                  <span className="fw-bold">Claim Purchase Proposal</span>{" "}
                  within 48 hours
                </p>
                <ul className="list-unstyled d-flex justify-content-between mb-0 mt-2">
                  <li className="step h1 mb-0 fw-bold">Step 02.</li>
                  <li className="step-icon">
                    <i className="uil uil-angle-double-right h1 mb-0"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-4 pt-2 d-flex">
            <div
              className="card work-process border-0 rounded shadow wow animate__animated animate__fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="card-body d-flex flex-column">
                <h4 className="title">Get Paid</h4>
                <p className="text-muted para flex-1">
                  Upon mutual agreement on the purchase of pending claims, you
                  can expect payouts within{" "}
                  <span className="fw-bold">7 Days</span> or even as fast as 24
                  hours starting from your second month
                </p>
                <ul className="list-unstyled d-flex justify-content-between mb-0 mt-2">
                  <li className="step h1 mb-0 fw-bold">Step 03.</li>
                  <li className="step-icon">
                    <i className="uil uil-file-check-alt h1 mb-0"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="mt-lg-5 mt-3 pt-2 d-flex justify-content-center align-items-center wow animate__animated animate__fadeInUp d-flex flex-md-row flex-column"
            data-wow-delay=".1s"
          >
            <a
              href="https://portal.uae.klaim.ai/sign-up"
              target="_blank"
              className="btn btn-outline-primary"
            >
              Get Started with KLAIM
            </a>
            <p className="mt-3 mx-4 d-flex flex-column align-items-center d-md-block text-center text-md-start">
              Discover How KLAIM Can Benefit Your Practice
              <a
                href="#contact-form"
                className="text-primary ms-2 h6 mb-0 cta-padding"
              >
                Book a Call
                <ArrowRight className="fea icon-sm ms-1" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
