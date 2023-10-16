"use client";

import { HubspotProvider, useHubspotForm } from "next-hubspot";
import React from "react";
/* eslint-disable react/display-name */
const FooterNewsletter = () => {
  const {} = useHubspotForm({
    portalId: "9149608",
    formId: "7438d036-524e-46cc-b0a7-961b1ad15c43",
    target: "#hubspot-newsletter-wrapper",
  });

  return <div id="hubspot-newsletter-wrapper" />;
};

export default () => (
  <HubspotProvider>
    <FooterNewsletter />
  </HubspotProvider>
);
