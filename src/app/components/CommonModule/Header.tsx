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
    <header
      id="topnav"
      className="defaultscroll sticky navbar-white-bg px-4 md:px-0"
    >
      <div className="container mx-auto">
        <a className="logo" href="https://klaim.ai">
          <img
            src="/assets/images/Logo.svg"
            className="logo-light-mode"
            alt=""
          />
          <img
            src="/assets/images/klaim/logo_klaim_w.svg"
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

        <div
          id="navigation"
          style={{ display: showMobileMenu ? "block" : "none" }}
        >
          <ul className="navigation-menu relative">
            <li className={pathname == "/" ? "active" : ""}>
              <a href="/">Home</a>
            </li>
            <li
              className={`has-submenu parent-parent-menu-item ${
                pathname == "/x-ray" ||
                pathname == "/kapital" ||
                pathname == "/inspector" ||
                pathname == "/eligible" ||
                pathname == "/rcm"
                  ? "active"
                  : ""
              }`}
            >
              <a href="#" onClick={toggleMobileDropdown}>
                Services
              </a>
              <span className="menu-arrow"></span>
              <ul className={`submenu ${classOpen ? "open" : ""}`}>
                <li className={pathname == "/x-ray" ? "active" : ""}>
                  <a
                    href="/x-ray"
                    className={`sub-menu-item ${
                      pathname == "/x-ray" ? "active" : ""
                    }`}
                  >
                    Klaim X-Ray
                  </a>
                </li>
                <li className={pathname == "/kapital" ? "active" : ""}>
                  <a
                    href="/kapital"
                    className={`sub-menu-item ${
                      pathname == "/kapital" ? "active" : ""
                    }`}
                  >
                    Klaim Kapital
                  </a>
                </li>
                <li className={pathname == "/inspector" ? "active" : ""}>
                  <a
                    href="/inspector"
                    className={`sub-menu-item ${
                      pathname == "/inspector" ? "active" : ""
                    }`}
                  >
                    Klaim Inspector
                  </a>
                </li>
                <li className={pathname == "/eligible" ? "active" : ""}>
                  <a
                    href="/eligible"
                    className={`sub-menu-item ${
                      pathname == "/eligible" ? "active" : ""
                    }`}
                  >
                    Klaim Eligible
                  </a>
                </li>
                {/* <li className={pathname == "/rcm" ? "active" : ""}>
                  <a
                    href="/rcm"
                    className={`sub-menu-item ${
                      pathname == "/rcm" ? "active" : ""
                    }`}
                  >
                    Klaim RCM 2.0
                  </a>
                </li> */}
              </ul>
            </li>
            <li
              className={`has-submenu parent-parent-menu-item ${
                pathname == "/about" ||
                pathname == "/news" ||
                pathname.startsWith("/blog")
                  ? "active"
                  : ""
              }`}
            >
              <a href="#" onClick={toggleMobileDropdown}>
                About Us
              </a>
              <span className="menu-arrow"></span>
              <ul className={`submenu ${classOpen ? "open" : ""}`}>
                <li className={pathname == "/about" ? "active" : ""}>
                  <a
                    href="/about"
                    className={`sub-menu-item ${
                      pathname == "/about" ? "active" : ""
                    }`}
                  >
                    About Klaim
                  </a>
                </li>
                <li className={pathname == "/blog" ? "active" : ""}>
                  <a
                    href="/blog"
                    className={`sub-menu-item ${
                      pathname == "/blog" ? "active" : ""
                    }`}
                  >
                    Blog
                  </a>
                </li>
                <li className={pathname == "/news" ? "active" : ""}>
                  <a
                    href="/news"
                    className={`sub-menu-item ${
                      pathname == "/news" ? "active" : ""
                    }`}
                  >
                    Klaim News
                  </a>
                </li>
              </ul>
            </li>
            <li className={pathname == "/contact" ? "active" : ""}>
              <a href="/contact">Contact us</a>
            </li>
            <ul className="min-[1024px]:flex absolute top-0 bottom-0 right-0 flex items-center justify-center hidden">
              <li className="bg-[#6135FB] px-5 py-2 rounded-lg font-semibold text-white mx-2.5">
                <a href="https://portal.uae.klaim.ai/sign-in" target="_blank">
                  Sign In
                </a>
              </li>
              <li className="px-5 py-2 rounded-lg font-semibold border border-[#6135FB] ml-2.5 text-[#6135FB]">
                <a href="https://portal.uae.klaim.ai/sign-up" target="_blank">
                  Sign Up
                </a>
              </li>
            </ul>
            <ul className="min-[1024px]:hidden items-center justify-start flex mb-3 ml-5 min-[992px]:ml-0 mt-5 min-[992px]:mt-0">
              <li className="bg-[#6135FB] px-5 py-2 rounded-lg font-semibold text-white mx-2.5">
                <a href="https://portal.uae.klaim.ai/sign-in" target="_blank">
                  Sign In
                </a>
              </li>
              <li className="px-5 py-2 rounded-lg font-semibold border border-[#6135FB] ml-2.5 text-[#6135FB]">
                <a href="https://portal.uae.klaim.ai/sign-up" target="_blank">
                  Sign Up
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
