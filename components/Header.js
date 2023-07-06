import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [classOpen, setClassOpen] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleMobileDropdown = () => {
    setClassOpen(!classOpen);
  };

  return (
    <header id="topnav" className="defaultscroll sticky navbar-white-bg">
      <div className="container">
        <a className="logo" href="https://klaim.ai">
          <img
            src="assets/images/klaim/logo_klaim.svg"
            height="48"
            className="logo-light-mode"
            alt=""
          />
          <img
            src="assets/images/klaim/logo_klaim_w.svg"
            height="48"
            className="logo-dark-mode"
            alt=""
          />
        </a>

        <div className="menu-extras hamburger-menu">
          <div className="menu-item">
            <a
              className={`navbar-toggle ${showMobileMenu ? "open" : ""}`}
              id="isToggle"
              onClick={toggleMobileMenu}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <ul className="buy-button list-inline mb-0 d-none d-lg-block">
          <li className="list-inline-item mb-0 me-4">
            <a
              href="https://portal.uae.klaim.ai/sign-in"
              className="btn btn-soft-primary"
              style={{ boxShadow: "none" }}
              target="_blank"
            >
              Sign In
            </a>
          </li>
          <li className="list-inline-item ps-1 mb-0">
            <a
              href="https://portal.uae.klaim.ai/sign-up"
              className="btn btn-outline-primary"
              target="_blank"
            >
              Sign Up
            </a>
          </li>
        </ul>
        <ul className="buy-button list-inline mb-0 d-lg-none">
          <li className="list-inline-item mb-0">
            <a
              href="https://portal.uae.klaim.ai/sign-up"
              className="btn btn-outline-primary"
              target="_blank"
              style={{ border: "none" }}
            >
              Sign Up
            </a>
          </li>
        </ul>

        <div
          id="navigation"
          style={{ display: showMobileMenu ? "block" : "none" }}
        >
          <ul className="navigation-menu">
            <li className={router.pathname == "/" ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li
              className={`has-submenu parent-parent-menu-item ${
                router.pathname == "/about" ||
                router.pathname.startsWith("/blog") ||
                router.pathname.startsWith("/media")
                  ? "active"
                  : ""
              }`}
            >
              <Link href="javascript:void(0)" onClick={toggleMobileDropdown}>
                About Us
              </Link>
              <span class="menu-arrow"></span>
              <ul class={`submenu ${classOpen ? "open" : ""}`}>
                <li className={router.pathname == "/about" ? "active" : ""}>
                  <Link
                    href="/about"
                    class={`sub-menu-item ${
                      router.pathname == "/about" ? "active" : ""
                    }`}
                  >
                    About Klaim
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://klaimai1.recruitee.com/"
                    class="sub-menu-item"
                    target="_blank"
                  >
                    Careers
                  </Link>
                </li>
                <li
                  className={
                    router.pathname.startsWith("/media") ? "active" : ""
                  }
                >
                  <Link
                    href="/media"
                    class={`sub-menu-item ${
                      router.pathname.startsWith("/media") ? "active" : ""
                    }`}
                  >
                    Media
                  </Link>
                </li>
                <li
                  className={
                    router.pathname.startsWith("/blog") ? "active" : ""
                  }
                >
                  <Link
                    href="/blog"
                    class={`sub-menu-item ${
                      router.pathname.startsWith("/blog") ? "active" : ""
                    }`}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </li>
            <li className={router.pathname == "/contact" ? "active" : ""}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
