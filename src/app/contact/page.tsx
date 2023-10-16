import React from "react";
import Header from "../components/CommonModule/Header";
import Footer from "../components/CommonModule/Footer";
import ContactUsForm from "../components/ContactUsModule/ContactUsForm";
import ContactUsCards from "../components/ContactUsModule/ContactUsCards";

const ContactUsPage = () => {
  return (
    <>
      <Header />
      <ContactUsForm />
      <ContactUsCards />
      <Footer />
    </>
  );
};

export default ContactUsPage;
