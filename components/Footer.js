/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { Youtube } from "react-feather";

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
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="footer-py-60">
                <div class="row">
                  <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <a href="#" class="logo-footer">
                      <img
                        src="assets/images/klaim/logo_klaim_w.svg"
                        height="34"
                        alt=""
                      />
                    </a>
                    <p class="mt-4">
                      Discover more about Klaim and engage with us on our social
                      media platforms. Get behind-the-scenes insights, stay
                      up-to-date with the latest news, and become part of our
                      growing community. Let's shape the future of fintech
                      together.
                    </p>
                    <ul class="list-unstyled mb-0 mt-4">
                      <li class="list-inline-item mx-1">
                        <a
                          href="https://www.linkedin.com/company/klaim-ai"
                          target="_blank"
                        >
                          <img
                            src="/assets/images/klaim/linkedin.png"
                            width={32}
                            height={32}
                          />
                        </a>
                      </li>
                      <li class="list-inline-item mx-1">
                        <a
                          href="https://www.facebook.com/profile.php?id=100063848329885"
                          target="_blank"
                          class="rounded"
                        >
                          <img
                            src="/assets/images/klaim/facebook.png"
                            width={32}
                            height={32}
                          />
                        </a>
                      </li>
                      <li class="list-inline-item mx-1">
                        <a
                          href="https://twitter.com/AiKlaim"
                          target="_blank"
                          class="rounded"
                        >
                          <img
                            src="/assets/images/klaim/twitter.png"
                            width={32}
                            height={32}
                          />
                        </a>
                      </li>
                      <li class="list-inline-item mx-1">
                        <a
                          href="https://www.instagram.com/klaim.ai/"
                          target="_blank"
                        >
                          <img
                            src="/assets/images/klaim/instagram.png"
                            width={32}
                            height={32}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 class="footer-head">Company</h5>
                    <ul class="list-unstyled footer-list mt-4">
                      <li>
                        <Link href="/" class="text-foot">
                          <i class="uil uil-angle-right-b me-1"></i>Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" class="text-foot">
                          <i class="uil uil-angle-right-b me-1"></i>About
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" class="text-foot">
                          <i class="uil uil-angle-right-b me-1"></i>Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://klaimai1.recruitee.com/"
                          target="_blank"
                          class="text-foot"
                        >
                          <i class="uil uil-angle-right-b me-1"></i>Careers
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" class="text-foot">
                          <i class="uil uil-angle-right-b me-1"></i>Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 class="footer-head">Usefull Links</h5>
                    <ul class="list-unstyled footer-list mt-4">
                      <li>
                        <Link href="/privacy" class="text-foot">
                          <i class="uil uil-angle-right-b me-1"></i>Privacy
                          Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms" class="text-foot">
                          <i class="uil uil-angle-right-b me-1"></i>
                          Terms
                        </Link>
                      </li>
                      <li>
                        <Link href="javascript:void(0)" class="text-foot">
                          <i class="uil uil-angle-right-b me-1"></i> FAQ
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" class="text-foot">
                          <i class="uil uil-angle-right-b me-1"></i> Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-py-30 footer-bar">
          <div class="container text-center">
            <div class="row align-items-center">
              <div class="col-sm-6">
                <div class="text-sm-start">
                  <p class="mb-0">
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

              <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul class="list-unstyled text-sm-end mb-0">
                  <li class="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="assets/images/payments/american-ex.png"
                        class="avatar avatar-ex-sm"
                        title="American Express"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="assets/images/payments/discover.png"
                        class="avatar avatar-ex-sm"
                        title="Discover"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="assets/images/payments/master-card.png"
                        class="avatar avatar-ex-sm"
                        title="Master Card"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="assets/images/payments/paypal.png"
                        class="avatar avatar-ex-sm"
                        title="Paypal"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="assets/images/payments/visa.png"
                        class="avatar avatar-ex-sm"
                        title="Visa"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
