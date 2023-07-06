import { ArrowRight } from "react-feather";

const Hero = () => {
  return (
    <div className="klaim-parallax">
      <section
        className="w-100 h-100 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "rgba(255, 255, 255, .55)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div
                className="title-heading wow animate__animated animate__fadeIn hero-padding"
                data-wow-delay=".5s"
              >
                <span
                  style={{ letterSpacing: "0.04rem" }}
                  className="text-primary py-2 me-1 fw-bold para-desc"
                >
                  Struggling to Get Your Insurance Claims Reimbursed?
                </span>
                <h1 className="heading fw-bold mb-3 mt-4">
                  Turn Your Insurance Claims Into Cash in 7 Days!
                </h1>
                <p className="para-desc">
                  KLAIM is a{" "}
                  <span
                    className="fw-bold"
                    style={{ letterSpacing: "0.04rem" }}
                  >
                    Claim Payment Acceleration Solution
                  </span>{" "}
                  dedicated to strengthening the cash flow of healthcare
                  providers, thus empowering them to fuel growth, cut costs &
                  deliver superior service standards
                </p>
                <div className="mt-4 pt-2 d-flex flex-md-row flex-column">
                  <a
                    href="https://portal.uae.klaim.ai/sign-up"
                    target="_blank"
                    className="btn btn-primary mt-2"
                  >
                    Get Funded Today
                  </a>
                  <p className="mb-0 mt-3 mx-4 d-flex flex-column align-items-center d-md-block">
                    Get A Personalized Proposal In 48 Hours
                    <a
                      href="#contact-form"
                      className="text-primary ms-3 h6 mb-0 cta-padding plausible-event-name=get-a-call-back"
                    >
                      Get a call back
                      <ArrowRight className="fea icon-sm ms-1" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="responsive-scroll is-notTouch d-none d-xl-flex"
          style={{ position: "absolute", bottom: "24px" }}
        >
          <span className="scroll-thisico"></span>
        </div>
      </section>
    </div>
  );
};

export default Hero;
