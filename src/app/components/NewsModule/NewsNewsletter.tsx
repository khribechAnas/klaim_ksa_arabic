"use client";

import { HubspotProvider, useHubspotForm } from "next-hubspot";
import React from "react";
/* eslint-disable react/display-name */
const NewsNewsletter = () => {
  const {} = useHubspotForm({
    portalId: "9149608",
    formId: "7438d036-524e-46cc-b0a7-961b1ad15c43",
    target: "#hubspot-newsletter-wrapper-news",
  });

  return (
    <div className="mb-12 pt-10 pb-6 w-full lg:w-1/2 shadow-lg  rounded-lg bg-linear">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[80%]">
          <h2 className="text-white font-bold leading-[25px] text-lg md:text-2xl tracking-wider mb-4">
            Subscribe to Newsletter Delivery
          </h2>
          <p className="text-white text-sm md:text-base leading-[25px] font-normal mb-4">
            Join the Klaim community for the latest product updates, industry
            insights, and exciting news. Subscribe now to be in the know!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div id="hubspot-newsletter-wrapper-news" className="w-[80%]" />
      </div>
    </div>
  );
};

export default () => (
  <HubspotProvider>
    <NewsNewsletter />
  </HubspotProvider>
);
