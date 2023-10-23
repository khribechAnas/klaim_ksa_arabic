"use client";

import { HubspotProvider, useHubspotForm } from "next-hubspot";
import React from "react";
/* eslint-disable react/display-name */
const BlogPostNewsLetter = () => {
  const {} = useHubspotForm({
    portalId: "9149608",
    formId: "7438d036-524e-46cc-b0a7-961b1ad15c43",
    target: "#hubspot-newsletter-wrapper",
  });
  return (
    <section className="container mx-auto px-[4rem] lg:px-[8rem] xl:px-[18rem] 2xl:px-[26rem] mb-14 bg-red-200">
      <div id="hubspot-newsletter-wrapper" />
    </section>
  );
};

export default () => (
  <HubspotProvider>
    <BlogPostNewsLetter />
  </HubspotProvider>
);
