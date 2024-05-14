import BlogPostRelated from "@/app/components/BlogModule/BlogPostRelated";
import BlogPostText from "@/app/components/BlogModule/BlogPostText";
import BlogPostTitle from "@/app/components/BlogModule/BlogPostTitle";
import CaseStudyText from "@/app/components/CaseStudiesModule/CaseStudyText";
import CaseStudyTitle from "@/app/components/CaseStudiesModule/CaseStudyTitle";
import Footer from "@/app/components/CommonModule/Footer";
import Header from "@/app/components/CommonModule/Header";
import React from "react";

const loadCaseStudy = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/case-studies?populate=*&filters[slug][$eq]=${slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  return response.json();
};

const BlogPostPage = async ({ params }: any) => {
  const blogPost = await loadCaseStudy(params.slug);
  return (
    <>
      <Header />
      <CaseStudyTitle blogPost={blogPost.data[0]} />
      <CaseStudyText blogPost={blogPost.data[0]} />
      {/* <BlogPostAuthor blogPost={blogPost.data[0]} /> */}
      {/* <BlogPostNewsLetter /> */}
      {/* <BlogPostRelated blogPost={blogPost.data[0]} /> */}
      <Footer />
    </>
  );
};

export default BlogPostPage;
