import React from "react";

const Connect = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div
              className="section-title wow animate__animated animate__fadeInUp"
              data-wow-delay=".1s"
            >
              <h4 className="title mb-4">
                Turn Complex Long Payment Cycles Into Immediate Cash!
              </h4>
              <p className="text-muted para-desc mb-0 mx-auto">
                KLAIM provides you unrestricted access to working capital,
                enabling consistent growth and success. Get in touch with us to
                learn how KLAIM can transform your payment process
              </p>
            </div>

            <div className="contact-detail mt-5">
              <div
                className="content mt-3 overflow-hidden d-block wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s"
              >
                <h5 className="text-muted">
                  <p>Get In Touch Today</p>
                  <a href="tel:+971 (0)4 876 4096" className="text-primary h5">
                    +971 (0)4 581 3638
                  </a>
                </h5>
                <a
                  href="https://portal.uae.klaim.ai/sign-up"
                  target="_blank"
                  className="btn btn-outline-primary mt-4"
                >
                  Get a Proposal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
