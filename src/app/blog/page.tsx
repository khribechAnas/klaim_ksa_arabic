import React from "react";
import Header from "../components/CommonModule/Header";
import Footer from "../components/CommonModule/Footer";
import BlogTitle from "../components/BlogModule/BlogTitle";
import BlogPosts from "../components/BlogModule/BlogPosts";
import BlogNews from "../components/BlogModule/BlogNews";

const BlogPage = ({ searchParams }: any) => {
  return (
    <>
      <Header />
      <BlogTitle />
      <BlogPosts searchParams={searchParams} />
      <BlogNews />
      <Footer />
    </>
  );
};

export default BlogPage;
