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
      <div className="container mx-auto pt-12 pb-12 md:pt-12 md:pb-32 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div
            className="bg-white rounded-lg pl-0 xl:pl-[7rem]"
            id="hubspot-form-wrapperr"
          />
          <div
            className="h-full px-12 py-6 rounded-lg col-span-2 ml-0 lg:ml-20 xl:ml-36"
            style={{
              backgroundImage: "url('assets/images/contact.jpg')",
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

export default () => (
  <HubspotProvider>
    <ContactUsForm />
  </HubspotProvider>
);
