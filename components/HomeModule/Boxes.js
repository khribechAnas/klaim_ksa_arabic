import React from "react";
import { ArrowRight } from "react-feather";

const Boxes = () => {
  return (
    <section className="section">
      <div className="container">
        <div
          className="row align-items-center wow animate__animated animate__fadeInUp"
          data-wow-delay=".1s"
        >
          <div className="col-lg-6">
            <div className="section-title">
              <h4 className="title mb-4">Transforming Claims Reimbursement</h4>
              <p className="text-muted para-desc">
                <span className="fw-bold"></span> See how KLAIM has helped
                healthcare providers like you improve their cash flow and grow
                their business
              </p>
              <p className="text-muted para-desc">
                KLAIM has a proven track record of delivering fast and efficient
                insurance claim reimbursements,{" "}
                <span className="fw-bold">
                  With Over 150,000 Individual Claims Payments Accelerated.
                </span>{" "}
              </p>
            </div>
            <div className="mt-4 d-none d-sm-bloc">
              <p className="mb-0 mt-3 d-flex flex-column align-items-center d-md-block text-center text-md-start">
                Optimize Your Cash Flow with KLAIM
                <a
                  href="https://portal.uae.klaim.ai/sign-up"
                  target="_blank"
                  className="text-primary ms-2 h6 mb-0"
                >
                  Get a Proposal
                  <ArrowRight className="fea icon-sm ms-1" />
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row ms-lg-5" id="counter">
              <div className="col-md-6 col-12">
                <div className="row">
                  <div className="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div className="card counter-box border-0 bg-light bg-gradient shadow text-center rounded">
                      <div className="card-body py-5">
                        <h2 className="mb-0">
                          <span className="counter-value">24</span>hr
                        </h2>
                        <h5 className="counter-head mb-0">Claim to Cash</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-4 pt-2">
                    <div className="card counter-box border-0 bg-primary bg-gradient shadow text-center rounded">
                      <div className="card-body py-5">
                        <h2 className="text-white mb-0">
                          AED<span className="counter-value">60</span>M
                        </h2>
                        <h5 className="counter-head mb-0 text-white">
                          Claims Paid
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="row pt-lg-4 mt-lg-4">
                  <div className="col-12 mt-4 pt-2">
                    <div className="card counter-box border-0 bg-success bg-gradient shadow text-center rounded">
                      <div className="card-body py-5">
                        <h2 className="text-white mb-0">
                          <span className="counter-value">150</span>K
                        </h2>
                        <h5 className="counter-head mb-0 text-white">
                          Claims Payments Accelerated
                        </h5>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-12 mt-4 pt-2">
                    <div className="card counter-box border-0 bg-light bg-gradient shadow text-center rounded">
                      <div className="card-body py-5">
                        <h2 className="mb-0">
                          <span className="counter-value">48</span>H
                        </h2>
                        <h5 className="counter-head mb-0">Proposal</h5>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="mt-4 d-md-none">
                <p className="mb-0 mt-3 d-flex flex-column align-items-center d-md-block text-center text-md-start">
                  Optimize Your Cash Flow with KLAIM
                  <a
                    href="https://portal.uae.klaim.ai/sign-up"
                    target="_blank"
                    className="text-primary ms-2 h6 mb-0 cta-padding"
                  >
                    Get a Proposal
                    <ArrowRight className="fea icon-sm ms-1" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
