"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
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
      <div className="container mx-auto">
        <a className="logo" href="https://klaim.ai">
          <img
            src="assets/images/Logo.svg"
            className="logo-light-mode"
            alt=""
          />
          <img
            src="assets/images/klaim/logo_klaim_w.svg"
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

        {/* <ul className="buy-button list-inline mb-0 d-none d-lg-block">
          <li className="list-inline-item mb-0 me-4">
            <a
              href="https://portal.uae.klaim.ai/sign-in"
              className="btn btn-soft-primary px-5 py-4 outline-0 text-base tracking-wide font-semibold rounded-md bg-[#2f55d40d] border-[#2f55d40d] text-[#6135fb]"
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
        </ul> */}
        {/* <ul className="buy-button list-inline mb-0 d-lg-none">
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
        </ul> */}

        <div
          id="navigation"
          style={{ display: showMobileMenu ? "block" : "none" }}
        >
          <ul className="navigation-menu">
            <li className={pathname == "/" ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li
              className={`has-submenu parent-parent-menu-item ${
                pathname == "/about" ||
                pathname.startsWith("/blog") ||
                pathname.startsWith("/media")
                  ? "active"
                  : ""
              }`}
            >
              <Link href="javascript:void(0)" onClick={toggleMobileDropdown}>
                About Us
              </Link>
              <span className="menu-arrow"></span>
              <ul className={`submenu ${classOpen ? "open" : ""}`}>
                <li className={pathname == "/about" ? "active" : ""}>
                  <Link
                    href="/about"
                    className={`sub-menu-item ${
                      pathname == "/about" ? "active" : ""
                    }`}
                  >
                    About Klaim
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://klaimai1.recruitee.com/"
                    className="sub-menu-item"
                    target="_blank"
                  >
                    Careers
                  </Link>
                </li>
                <li className={pathname.startsWith("/media") ? "active" : ""}>
                  <Link
                    href="/media"
                    className={`sub-menu-item ${
                      pathname.startsWith("/media") ? "active" : ""
                    }`}
                  >
                    Media
                  </Link>
                </li>
                <li className={pathname.startsWith("/blog") ? "active" : ""}>
                  <Link
                    href="/blog"
                    className={`sub-menu-item ${
                      pathname.startsWith("/blog") ? "active" : ""
                    }`}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </li>
            <li className={pathname == "/contact" ? "active" : ""}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
