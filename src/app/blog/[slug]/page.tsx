import BlogPostAuthor from "@/app/components/BlogModule/BlogPostAuthor";
import BlogPostNewsLetter from "@/app/components/BlogModule/BlogPostNewsLetter";
import BlogPostRelated from "@/app/components/BlogModule/BlogPostRelated";
import BlogPostText from "@/app/components/BlogModule/BlogPostText";
import BlogPostTitle from "@/app/components/BlogModule/BlogPostTitle";
import Footer from "@/app/components/CommonModule/Footer";
import Header from "@/app/components/CommonModule/Header";
import React from "react";

const BlogPostPage = () => {
  return (
    <>
      <Header />
      <BlogPostTitle />
      <BlogPostText />
      <BlogPostAuthor />
      {/* <BlogPostNewsLetter /> */}
      <BlogPostRelated />
      <Footer />
    </>
  );
};

export default BlogPostPage;
