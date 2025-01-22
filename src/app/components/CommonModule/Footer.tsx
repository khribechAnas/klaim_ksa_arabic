import React from "react";
import FooterNewsletter from "./FooterNewsletter";

const Footer = () => {
  return (
    <>
      <footer className="bg-linear pt-8 pb-8 px-4 md:pt-32 md:pb-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
            <img src="/assets/images/Logo-white.svg" className="w-[180px] h-auto" alt="Klaim Logo"/>
            <div className="flex items-center text-white font-bold leading-[16px] md:leading-4 text-sm md:text-lg tracking-tight mt-8 md:mt-0">
              <a className="pr-16" href="/">
                Home
              </a>
              <a href="/about">About Us</a>
            </div>
          </div>
          <div className="flex mt-8 xl:mt-16">
            <a
              href="https://www.linkedin.com/company/klaim-ai/"
              target="_blank"
            >
              <img src="/assets/images/linkedin.svg" className="mr-4" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCSFyygyt3hE05B9nGNCqHMA"
              target="_blank"
            >
              <img src="/assets/images/youtube.svg" className="mr-4" />
            </a>
            <a href="https://www.twitter.com/AiKlaim" target="_blank">
              <img src="/assets/images/twitter.svg" className="mr-4" />
            </a>
            <a href="https://www.instagram.com/klaim.ai/" target="_blank">
              <img src="/assets/images/instagram.svg" className="mr-4" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100063848329885"
              target="_blank"
            >
              <img src="/assets/images/facebook.svg" className="mr-4" />
            </a>
          </div>
          <div className="flex flex-col xl:flex-row items-start xl:items-start justify-between my-8 xl:my-16">
            <div className="mr-4 mb-8 xl:mb-0">
              <h2 className="text-white font-bold leading-[16px] md:leading-4 text-sm md:text-lg tracking-wider mb-4">
                Newsletter
              </h2>
              <p className="text-white text-sm md:text-base leading-[25px] font-normal mb-4">
                Join the Klaim community for the latest product <br /> updates,
                industry insights, and exciting news. <br />
                Subscribe now to be in the know!
              </p>
              <FooterNewsletter />
            </div>
            <div className="grid grid-cols-2 gap-x-8 md:gap-x-20 gap-y-8 md:gap-y-12">
              <div className="text-white text-right text-sm md:text-base leading-[25px] md:leading-none font-normal ">
                <p className="mb-4 font-bold">Dubai, UAE</p>
                <p className="mb-2">3404 Indigo Icon Tower, JLT Cluster F</p>
                <p className="mb-2">
                  <a href="mailto:hello@klaim.ai">hello@klaim.ai</a>
                </p>
                <p>
                  <a href="tel:+97148764096">+971 4 876 4096</a>
                </p>
              </div>
              <div className="text-white text-right text-sm md:text-base leading-[25px] md:leading-none font-normal">
                <p className="mb-4 font-bold">Riyadh, KSA</p>
                <p className="mb-2">3141 Anas Ibn Malik Rd, Al Malqa</p>
                <p className="mb-2">
                  <a href="mailto:helloksa@klaim.ai">helloksa@klaim.ai</a>
                </p>
                <p>
                  <a href="tel:+966115102972">+966 11 510 2972</a>
                </p>
              </div>
              <div className="text-white text-right text-sm md:text-base leading-[25px] md:leading-none font-normal">
                <p className="mb-4 font-bold">Abu Dhabi, UAE</p>
                <p className="mb-2">Al Khatem Tower 4, ADGM Square</p>
                <p className="mb-2">
                  <a href="mailto:hello@klaim.ai">hello@klaim.ai</a>
                </p>
                <p>
                  <a href="tel:+97148764096">+971 4 876 4096</a>
                </p>
              </div>
              <div className="text-white text-right text-sm md:text-base leading-[25px] md:leading-none font-normal">
                <p className="mb-4 font-bold">Muscat, Oman</p>
                <p className="mb-2">395 Tamimah Building, Al Nahdah Road</p>
                <p className="mb-2">
                  <a href="mailto:helloksa@klaim.ai">hellooman@klaim.ai</a>
                </p>
                <p>
                  <a href="tel:+96871734424">+968 7 173 4424</a>
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
