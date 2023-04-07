/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Solutions = () => {
  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-5 wow animate__animated animate__fadeInLeft"
            data-wow-delay=".1s"
          >
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4">
                Achieve Unparalleled Performance with Cutting-Edge RCM
                Technology
              </h4>
              <p className="text-muted para-desc mx-auto mb-0">
                From minimizing claim rejections to executing automated batch
                eligibility checks, KLAIM's pioneering revenue cycle management
                tools empower you to seamlessly run your day-to-day processes
              </p>
              <div className="mt-5 pt-2 text-center text-md-start">
                <a
                  href="https://portal.uae.klaim.ai/sign-up"
                  target="_blank"
                  className="btn btn-outline-primary mt-2"
                >
                  Get Started with KLAIM
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div
            className="col-md-6 wow animate__animated animate__fadeInRight"
            data-wow-delay=".1s"
          >
            <div className="card shadow rounded border-0 overflow-hidden px-3 py-3 mb-4 work-process">
              <div className="d-flex">
                <img
                  src="/assets/images/klaim/klaim-eligible.svg"
                  height="30"
                />
                <div className="flex-1 ms-2">
                  <h4>KLAIM Eligible​</h4>
                  <p className="mb-0 text-muted">
                    Fast and accurate eligibility checks. Save time and money.
                    Boost revenue and patient satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="card shadow rounded border-0 overflow-hidden px-3 py-3 mb-4 work-process">
              <div className="d-flex">
                <img
                  src="/assets/images/klaim/klaim-inspector.svg"
                  height="30"
                />
                <div className="flex-1 ms-2">
                  <h4>KLAIM Inspector​</h4>
                  <p className="mb-0 text-muted">
                    Smart claim optimization with machine learning. Reduce
                    rejection risk and maximize revenue.
                  </p>
                </div>
              </div>
            </div>
            <div className="card shadow rounded border-0 overflow-hidden px-3 py-3 mb-4 work-process">
              <div className="d-flex">
                <img src="/assets/images/klaim/klaim-x-ray.svg" height="30" />
                <div className="flex-1 ms-2">
                  <h4>KLAIM X-Ray​</h4>
                  <p className="mb-0 text-muted">
                    Comprehensive RCM analytics and reports. Get financial
                    insights and submit claims in seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
