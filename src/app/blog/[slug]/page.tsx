import BlogPostAuthor from "@/app/components/BlogModule/BlogPostAuthor";
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
      <BlogPostRelated />
      <Footer />
    </>
  );
};

export default BlogPostPage;
