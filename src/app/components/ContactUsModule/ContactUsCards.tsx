import React from "react";

const ContactUsCards = () => {
  return (
    <section className="bg-[#F5F7FB] py-12 md:py-32 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <div className="px-8 md:px-12 py-7 md:py-10 bg-white rounded-lg">
          <div className="flex items-center mb-8">
            <img src="assets/images/about-us3.svg" />
            <h3 className="font-bold text-[24px] md:text-[32px] leading-[36px] md:leading-[40px] text-[#3F465D] ml-8">
              Phone
            </h3>
          </div>
          <p className="text-[18px] md:text-[22px] leading-[26px] md:leading-[30px] text-[#3F465D] mb-2">
            Connect with our team by <br /> phone on weekdays from 9 am{" "}
            <br className="block xl:hidden 2xl:block" /> to 6 pm.
          </p>
          <div className="flex">
            <div className="text-[#6135FB] font-semibold leading-[24px] text-[16px] md:text-[18px]">
              <p>UAE</p>
              <p>KSA</p>
              <p>Oman</p>
            </div>
            <div className="ml-4 text-[#3F465D] font-semibold leading-[24px] text-[16px] md:text-[18px]">
              <p>
                <a href="tel:+97148764096">+971 4 876 4096</a>
              </p>
              <p>
                <a href="tel:+966115102972">+966 11 510 2972</a>
              </p>
              <p>
                <a href="tel:+96871734424">+968 7 173 4424</a>
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 md:px-12 py-7 md:py-10 bg-white rounded-lg">
          <div className="flex items-center mb-8">
            <img src="assets/images/about-us4.svg" />
            <h3 className="font-bold text-[24px] md:text-[32px] leading-[36px] md:leading-[40px] text-[#3F465D] ml-8">
              Email
            </h3>
          </div>
          <p className="text-[18px] md:text-[22px] leading-[26px] md:leading-[30px] text-[#3F465D] mb-2">
            We’d love to hear from you! <br /> We’ll respond as soon as <br />
            possible.
          </p>
          <div className="text-[#3F465D] font-semibold leading-[24px] text-[16px] md:text-[18px]">
            <p>
              <a href="mailto:hello@klaim.ai">hello@klaim.ai</a>
            </p>
            <p>
              <a href="mailto:helloksa@klaim.ai">helloksa@klaim.ai</a>
            </p>
            <p>
              <a href="mailto:hellooman@klaim.ai">hellooman@klaim.ai</a>
            </p>
          </div>
        </div>
        <div className="px-8 md:px-12 py-7 md:py-10 bg-white rounded-lg">
          <div className="flex items-center mb-8">
            <img src="assets/images/about-us5.svg" />
            <h3 className="font-bold text-[24px] md:text-[32px] leading-[36px] md:leading-[40px] text-[#3F465D] ml-8">
              Location
            </h3>
          </div>
          <p className="text-[18px] md:text-[22px] leading-[26px] md:leading-[30px] text-[#3F465D] mb-2">
            We’re open and ready to <br /> welcome you on weekdays from 9 am to
            6 pm
          </p>
          <div className="text-[#3F465D] font-semibold leading-[24px] text-[16px] md:text-[18px] mb-2">
            Indigo Icon Tower Unit 3404 - Dubai - United Arab Emirates
          </div>
          <a
            href="https://goo.gl/maps/Kg5dkCR5aGwkYp5x5"
            target="_blank"
            className="text-[#6135FB] text-[16px] md:text-[18px] font-semibold leading-[24px] underline"
          >
            View on Google map
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUsCards;
