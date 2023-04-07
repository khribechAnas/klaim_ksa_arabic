import React from "react";

const GetStarted = () => {
  return (
    <div className="container pb-lg-4 mb-md-5 mb-4 mt-100 mt-60">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <div
            className="section-title get-started-box wow animate__animated animate__fadeInUp"
            data-wow-delay=".1s"
          >
            <h4 className="title mb-4">
              Transform Your Medical Claims Into Cash Today!
            </h4>
            <p className="text-muted para-desc mx-auto mb-0">
              Take Control of Your Healthcare Billing with Klaim
            </p>

            <div className="mt-4">
              <a
                href="https://portal.uae.klaim.ai/sign-up"
                className="btn btn-primary mt-2 me-md-2"
                target="_blank"
              >
                Register & Get A Proposal In 48 Hours
              </a>
              <a
                href="#contact-form"
                className="btn btn-outline-primary mt-lg-2 mt-4"
              >
                Get A Callback
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
