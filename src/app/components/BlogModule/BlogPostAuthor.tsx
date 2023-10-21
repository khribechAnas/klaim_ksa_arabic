import React from "react";

const BlogPostAuthor = () => {
  return (
    <section className="container mx-auto px-[25rem] mb-14">
      <hr />
      <div className="flex py-10">
        <img
          src="/assets/images/blog-author.png"
          className="w-[3.6rem] h-[3.6rem] object-cover rounded-full"
        />
        <div className="ml-6 font-medium">
          <p className="mb-2 text-[#222B45]">Eli Willson</p>
          <p className="text-[#696F81]">
            Eli is the best man for the job. His design career spans both
            physical and digital products, and he is a lecturer in the Product
            Design program at Stanford University. You can find Eli on Medium or
            on Twitter.
          </p>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default BlogPostAuthor;
