"use client";

import { useHubspotForm } from "next-hubspot";
import React from "react";

const ContactUsForm = () => {
  const {} = useHubspotForm({
    portalId: "9149608",
    formId: "4b775b14-a8c3-40c9-ad49-cd6e56e9dc86",
    target: "#hubspot-form-wrapper",
  });
  return (
    <section className="pt-[75px]">
      <div className="container mx-auto py-12 md:py-32 px-4">
        <section id="contact-us">
          <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#fff]">
            <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
              Contact us
            </span>
          </h2>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12">
          <div
            className="bg-white rounded-lg pl-0 xl:pl-[7rem]"
            id="hubspot-form-wrapper"
          />
          <div
            className="h-full px-12 py-6 rounded-lg col-span-2 ml-0 lg:ml-20 xl:ml-36"
            style={{
              backgroundImage: "url('assets/images/kapital-contact.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "80%",
            }}
          >
            <div className="h-[450px] lg:h-[555px] flex flex-col items-start justify-end">
              {/* <div className="blurry text-white px-8 py-7 rounded-xl">
                <p className="italic text-xl leading-[1.5remrem] tracking-wide mb-4">
                  “With Klaim, your everyday can be Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut.”
                </p>
                <p>Andrew Johnson - CRO @BetterLife</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
