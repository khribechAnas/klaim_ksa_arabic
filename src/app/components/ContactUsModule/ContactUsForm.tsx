"use client";

import { HubspotProvider, useHubspotForm } from "next-hubspot";
import React from "react";
/* eslint-disable react/display-name */
const ContactUsForm = () => {
  const {} = useHubspotForm({
    portalId: "9149608",
    formId: "3d7dcd60-d105-4fd9-aaa4-825c830b7898",
    target: "#hubspot-form-wrapperr",
  });

  return (
    <section className="pt-[75px]">
      <div className="container mx-auto pt-12 pb-12 md:pt-20 md:pb-32 px-4">
        <h2 className="text-4xl md:text-6xl font-semibold leading-[44px] leading-[70px] mb-4 md:mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            Contact us
          </span>
        </h2>
        <p className="text-[20px] md:text-[28px] leading-[30px] leading-9 text-[#3F465D] mb-8 md:mb-12">
          Get higher profits, faster growth and happier patients.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <div
            className="bg-white rounded-lg pl-0"
            id="hubspot-form-wrapperr"
          />
          <div
            className="h-full px-12 py-6 rounded-lg col-span-2 ml-0 lg:ml-24 xl:ml-48"
            style={{
              backgroundImage: "url('assets/images/contact.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "80%",
            }}
          >
            <div className="h-[400px] lg:h-[450px] flex flex-col items-start justify-end">
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

export default () => (
  <HubspotProvider>
    <ContactUsForm />
  </HubspotProvider>
);
