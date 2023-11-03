import BlogPostRelated from "@/app/components/BlogModule/BlogPostRelated";
import BlogPostText from "@/app/components/BlogModule/BlogPostText";
import BlogPostTitle from "@/app/components/BlogModule/BlogPostTitle";
import Footer from "@/app/components/CommonModule/Footer";
import Header from "@/app/components/CommonModule/Header";
import React from "react";

const loadBlogPost = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/blog-articles?populate=*&filters[slug][$eq]=${slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  return response.json();
};

const BlogPostPage = async ({ params }: any) => {
  const blogPost = await loadBlogPost(params.slug);
  return (
    <>
      <Header />
      <BlogPostTitle blogPost={blogPost.data[0]} />
      <BlogPostText blogPost={blogPost.data[0]} />
      {/* <BlogPostAuthor blogPost={blogPost.data[0]} /> */}
      {/* <BlogPostNewsLetter /> */}
      <BlogPostRelated blogPost={blogPost.data[0]} />
      <Footer />
    </>
  );
};

export default BlogPostPage;
