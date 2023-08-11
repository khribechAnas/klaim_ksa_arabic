import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-linear pt-32 pb-10">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <img src="assets/images/Logo-white.svg" />
            <div className="flex items-center text-white font-bold leading-4 text-lg tracking-tight">
              <a className="px-16">Home</a>
              <a>About Us</a>
            </div>
          </div>
          <div className="flex items-center justify-between my-16">
            <div className="flex">
              <img src="assets/images/youtube.svg" className="mr-4" />
              <img src="assets/images/twitter.svg" className="mr-4" />
              <img src="assets/images/instagram.svg" className="mr-4" />
              <img src="assets/images/linkedin.svg" className="mr-4" />
              <img src="assets/images/viber.svg" className="mr-4" />
              <img src="assets/images/facebook.svg" className="mr-4" />
            </div>
            <div className="flex">
              <div className="text-white text-base font-normal">
                <p>Al Khatem (Tower 4) (ADGM Square,</p>
                <p> أبوظبي, أبوظبي), Abu Dhabi, UAE</p>
                <a href="mailto:hello@klaim.ai">hello@klaim.ai</a>
                <a href="tel:+968 7173 4424">+971 xxxxxxx</a>
              </div>
              <div className="text-white text-base font-normal mx-8">
                <p>Indigo Icon Tower 3404, JLT Cluster F,</p>
                <p>Dubai, UAE</p>
                <a href="mailto:hello@klaim.ai">hello@klaim.ai</a>
                <a href="tel:+971 4876 4096">+971 (0)4 876 4096</a>
              </div>
              <div className="text-white text-base font-normal">
                <p>National address RRMA3141, Riyadh,</p>
                <p>Kingdom of Saudi Arabia</p>
                <a href="mailto:helloksa@klaim.ai">helloksa@klaim.ai</a>
                <a href="tel:+966 11510 2972">+966 (0)11 510 2972</a>
              </div>
            </div>
          </div>
          <hr className="mb-16" />
          <div className="flex items-center justify-between">
            <div className="text-white">
              <a href="">Healthcare</a>
              <span className="mx-2">&#124;</span>
              <a href="">Technology</a>
              <span className="mx-2">&#124;</span>
              <a href="">Insurance</a>
            </div>
            <div className="text-white">
              <a href="">Terms of Service</a>
              <span className="mx-2">&#124;</span>
              <a href="">Privacy Policy</a>
            </div>
            <div className="text-white">
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
