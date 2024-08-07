import React from "react";
import Header from "../components/CommonModule/Header";
import Footer from "../components/CommonModule/Footer";
import ContactUsForm from "../components/ContactUsModule/ContactUsForm";
import ContactUsCards from "../components/ContactUsModule/ContactUsCards";
import { CaseStudyPosts } from "../components/CaseStudiesModule/CaseStudyPosts";
import CaseStudiesTitle from "../components/CaseStudiesModule/CaseStudiesTitle";

const CaseStudiesPage = ({searchParams}: any) => {
  return (
    <>
      <Header/>
      <CaseStudiesTitle/>
      <CaseStudyPosts searchParams={searchParams}/>
      <Footer/>
    </>
  );
};

export default CaseStudiesPage;