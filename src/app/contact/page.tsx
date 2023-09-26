import React from "react";
import Header from "../components/CommonModule/Header";
import Footer from "../components/CommonModule/Footer";
import ContactUsForm from "../components/ContactUsModule/ContactUsForm";
import { HubspotProvider } from "next-hubspot";
import ContactUsCards from "../components/ContactUsModule/ContactUsCards";

const ContactUsPage = () => {
  return (
    <HubspotProvider>
      <Header />
      <ContactUsForm />
      <ContactUsCards />
      <Footer />
    </HubspotProvider>
  );
};

export default ContactUsPage;
