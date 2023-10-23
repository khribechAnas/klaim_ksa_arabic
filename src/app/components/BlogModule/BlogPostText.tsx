import React from "react";

const BlogPostText = ({ blogPost }: any) => {
  return (
    <section className="container mx-auto px-4">
      <div className="px-[4rem] lg:px-[8rem] xl:px-[18rem] 2xl:px-[26rem] relative mb-14 text-[#222B45]">
        <div
          dangerouslySetInnerHTML={{
            __html: blogPost.attributes.content,
          }}
        />
        <div className="absolute top-0 left-[0rem] lg:left-[2rem] xl:left-[12rem] 2xl:left-[20rem]">
          <img src="/assets/images/linked-in-blog.png" className="mb-6" />
          <img src="/assets/images/facebook-blog.png" className="mb-7" />
          <img src="/assets/images/twitter-blog.png" className="mb-6" />
        </div>
      </div>
    </section>
  );
};

export default BlogPostText;
