import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-0 text-center features feature-primary feature-clean">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                </div>
                <div className="content mt-4">
                  <h5 className="fw-bold">Phone</h5>
                  <p className="text-muted">
                    Feel free to get in touch with us <br />
                    Weekdays, 9 AM - 6 PM
                  </p>
                  <a href="tel:+971 (0)4 876 4096" className="read-more">
                    +971 (0)4 876 4096
                  </a>
                  <br />
                  <a href="tel:+966 (0)11 510 2972" className="read-more">
                    +966 (0)11 510 2972
                  </a>
                  <br />
                  <a href="tel:+968 7173 4424" className="read-more">
                    +968 7173 4424
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 text-center features feature-primary feature-clean">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                </div>
                <div className="content mt-4">
                  <h5 className="fw-bold">Email</h5>
                  <p className="text-muted">
                    We’d love to hear from you! Send us an email and we’ll get
                    back to you as soon as possible
                  </p>
                  <a href="mailto:hello@klaim.ai" className="read-more">
                    hello@klaim.ai
                  </a>
                  <br />
                  <a href="mailto:helloksa@klaim.ai" className="read-more">
                    helloksa@klaim.ai
                  </a>
                  <br />
                  <a href="mailto:hellooman@klaim.ai" className="read-more">
                    hellooman@klaim.ai
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 text-center features feature-primary feature-clean">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                </div>
                <div className="content mt-4">
                  <h5 className="fw-bold">Location</h5>
                  <p className="text-muted">
                    Dubai - JLT Cluster F - Indigo Icon Tower 3404
                  </p>
                  <a
                    href="https://www.google.mk/maps/place/KLAIM+Technologies+DMCC/@25.0724722,55.1428037,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f43abcd025df1:0xaf99ee725abb3a2d!8m2!3d25.0724722!4d55.1428037!16s%2Fg%2F11sq8srn2h?hl=en"
                    data-type="iframe"
                    className="text-foot"
                    target="_blank"
                  >
                    View on Google map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-py-30 footer-bar bg-footer">
          <div className="container text-center">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-3 col-md-2 col-sm-3">
                <div className="text-sm-start">
                  <a href="#" className="logo-footer">
                    <img
                      src="assets/images/klaim/logo_klaim_w.svg"
                      height="34"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled footer-list terms-service mb-0">
                  <li className="list-inline-item mb-0">
                    <Link href="/privacy" className="text-foot me-2">
                      Privacy
                    </Link>
                  </li>
                  <li className="list-inline-item mb-0">
                    <Link href="/terms" className="text-foot me-2">
                      Terms
                    </Link>
                  </li>
                  <li className="list-inline-item mb-0">
                    <Link href="javascript:void(0)" className="text-foot me-2">
                      FAQs
                    </Link>
                  </li>
                  <li className="list-inline-item mb-0">
                    <Link href="/contact" className="text-foot">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-3 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="text-sm-end">
                  <p className="mb-0 text-foot">
                    © {new Date().getFullYear()}{" "}
                    <a
                      href="https://www.klaim.ai/"
                      target="_blank"
                      className="text-reset"
                    >
                      Klaim
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
