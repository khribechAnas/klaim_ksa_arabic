/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { HelpCircle } from "react-feather";

const Faq = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="section-title pb-2 text-center wow animate__animated animate__fadeInUp"
              data-wow-delay=".1s"
            >
              <h4 className="title mb-4">Frequently Asked Questions</h4>
            </div>
          </div>
        </div>

        <div
          className="row wow animate__animated animate__fadeInUp"
          data-wow-delay=".1s"
        >
          <div className="col-md-6 col-12 mt-4 pt-2 pb-4">
            <div className="d-flex">
              <HelpCircle className="text-primary me-2 mt-1" />
              <div className="flex-1 pe-5">
                <h5 className="mt-0 mb-3">What is KLAIM ?</h5>
                <p className="answer text-muted mb-0">
                  KLAIM is a claim payment acceleration solution designed to
                  improve the cash flow of healthcare providers. We purchase
                  pending medical claims from healthcare providers and guarantee
                  quick, seamless payouts.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 mt-4 pt-2 pb-4 ps-md-5">
            <div className="d-flex">
              <HelpCircle className="text-primary me-2 mt-1" />
              <div className="flex-1 pe-5">
                <h5 className="mt-0 mb-3">
                  How long will it take for our claims to get approved and
                  reimbursed ?
                </h5>
                <p className="answer text-muted mb-0">
                  Upon signing an agreement, you will receive payment within 7
                  days. Subsequent claims will have a payout duration of 48
                  hours.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 mt-4 pt-2">
            <div className="d-flex">
              <HelpCircle className="text-primary me-2 mt-1" />
              <div className="flex-1">
                <h5 className="mt-0 mb-3">
                  Is there a minimum time commitment required to use KLAIM'S
                  services ?
                </h5>
                <p className="answer text-muted mb-0">
                  No, there is no minimum time commitment. Our services are
                  provided on demand and at the request of the healthcare
                  provider with no long-term commitment required.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 mt-4 pt-2 ps-md-5">
            <div className="d-flex">
              <HelpCircle className="text-primary me-2 mt-1" />
              <div className="flex-1">
                <h5 className="mt-0 mb-3">
                  Is there a cost associated with obtaining a proposal from
                  KLAIM ?
                </h5>
                <p className="answer text-muted mb-0">
                  No, there is no cost associated with obtaining a proposal from
                  KLAIM. You can receive a proposal within 48 hours after
                  registering with us, at no cost to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
