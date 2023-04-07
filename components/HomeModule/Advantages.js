import React from "react";
import { ArrowRight } from "react-feather";

const Advantages = () => {
  return (
    <div className="mt-100 mt-60 overflow-hidden">
      <div
        className="rounded py-5"
        style={{
          background:
            "url('assets/images/klaim/optimize-your-cash.jpg') center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container py-md-5 py-3">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-12 offset-lg-5 offset-md-5">
              <div
                className="card border-0 wow animate__animated animate__fadeInRight mx-3 mx-lg-0"
                data-wow-delay=".1s"
              >
                <div className="card-body p-md-5 p-4 rounded">
                  <div className="section-title">
                    <h4 className="title mb-4">
                      Optimize Your Cash Flow & Fuel Growth
                    </h4>
                    <p className="text-muted para-desc mb-0">
                      KLAIM is the solution for healthcare providers looking to
                      maximize their reimbursements and drive growth
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-md-6 col-12 mt-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="icon text-center rounded-circle h4 text-primary me-1 mb-0">
                          <i className="uil uil-chart-line"></i>
                        </div>
                        <div className="flex-1">
                          <h6 className="title text-dark mb-0">
                            Streamline Operations
                          </h6>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 mt-4">
                      <div className="d-flex align-items-center">
                        <div className="icon text-center rounded-circle h4 text-primary me-2 mb-0">
                          <i className="uil uil-expand-arrows"></i>
                        </div>
                        <div className="flex-1">
                          <h6 className="title text-dark mb-0">
                            Grow Your Practice 
                          </h6>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 mt-4">
                      <div className="d-flex align-items-center">
                        <div className="icon text-center rounded-circle h4 text-primary me-2 mb-0">
                          <i className="uil uil-money-insert"></i>
                        </div>
                        <div className="flex-1">
                          <h6 className="title text-dark mb-0">
                            Upgrade Your Facility
                          </h6>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 mt-4">
                      <div className="d-flex align-items-center">
                        <div className="icon text-center rounded-circle h4 text-primary me-2 mb-0">
                          <i className="uil uil-user-md"></i>
                        </div>
                        <div className="flex-1">
                          <h6 className="title text-dark mb-0">
                            Attract Top Talent
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="mb-0 mt-3 d-flex flex-column align-items-center d-md-block text-center text-md-start">
                      Optimize Your Cash Flow with KLAIM
                      <a
                        href="#contact-form"
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
        </div>
      </div>
    </div>
  );
};

export default Advantages;
