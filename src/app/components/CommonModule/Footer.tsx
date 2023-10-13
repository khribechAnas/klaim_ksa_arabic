import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-linear pt-8 pb-8 px-4 md:pt-32 md:pb-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
            <img src="assets/images/Logo-white.svg" />
            <div className="flex items-center text-white font-bold leading-[16px] md:leading-4 text-sm md:text-lg tracking-tight mt-8 md:mt-0">
              <a className="pr-16" href="/">
                Home
              </a>
              <a href="/about">About Us</a>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between my-8 xl:my-16">
            <div className="flex mb-8 xl:mb-0">
              <img src="assets/images/youtube.svg" className="mr-4" />
              <img src="assets/images/twitter.svg" className="mr-4" />
              <img src="assets/images/instagram.svg" className="mr-4" />
              <img src="assets/images/linkedin.svg" className="mr-4" />
              <img src="assets/images/viber.svg" className="mr-4" />
              <img src="assets/images/facebook.svg" className="mr-4" />
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="text-white text-sm md:text-base leading-[25px] md:leading-none font-normal">
                <p className="mb-2">Al Khatem Tower 4, ADGM Square,</p>
                <p className="mb-2">Abu Dhabi, UAE,</p>
                <p className="mb-2">
                  <a href="mailto:hello@klaim.ai">hello@klaim.ai</a>
                </p>
                <p>
                  <a href="tel:+97148764096">+971 4 876 4096</a>
                </p>
              </div>
              <div className="text-white text-sm md:text-base leading-[25px] md:leading-none font-normal mx-0 md:mx-16 my-8 md:my-0">
                <p className="mb-2">Indigo Icon Tower 3404, JLT Cluster F,</p>
                <p className="mb-2">Dubai, UAE</p>
                <p className="mb-2">
                  <a href="mailto:hello@klaim.ai">hello@klaim.ai</a>
                </p>
                <p>
                  <a href="tel:+97148764096">+971 4 876 4096</a>
                </p>
              </div>
              <div className="text-white text-sm md:text-base leading-[25px] md:leading-none font-normal">
                <p className="mb-2">National address RRMA3141, Riyadh,</p>
                <p className="mb-2">Kingdom of Saudi Arabia</p>
                <p className="mb-2">
                  <a href="mailto:helloksa@klaim.ai">helloksa@klaim.ai</a>
                </p>
                <p>
                  <a href="tel:+966115102972">+966 11 510 2972</a>
                </p>
              </div>
            </div>
          </div>
          <hr className="mb-8 md:mb-16" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="text-white text-sm md:text-base leading-[25px] leading-none mb-4 md:mb-0">
              <a href="">Healthcare</a>
              <span className="mx-2">&#124;</span>
              <a href="">Technology</a>
              <span className="mx-2">&#124;</span>
              <a href="">Insurance</a>
            </div>
            <div className="text-white text-sm md:text-base leading-[25px] leading-none mb-4 md:mb-0">
              <a href="">Terms of Service</a>
              <span className="mx-2">&#124;</span>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
            <div className="text-white text-sm md:text-base leading-[25px] leading-none mb-2 md:mb-0">
              <p className="">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.klaim.ai/"
                  target="_blank"
                  className="text-reset"
                >
                  Klaim AI
                </a>
              </p>
            </div>
            <div className="text-white">
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
