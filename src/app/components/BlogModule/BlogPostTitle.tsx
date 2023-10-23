import React from "react";

const BlogPostTitle = () => {
  return (
    <section className="pt-[74px] container mx-auto px-4">
      <div className="flex flex-col xl:flex-row items-center pt-11 pb-28 xl:pb-11">
        <img
          src="/assets/images/blog-1.png"
          className="object-cover h-[30rem] w-full xl:w-[45rem] rounded-t-lg xl:rounded-lg"
        />
        <div className="bg-[#F5F7FB] w-full rounded-b-lg xl:rounded-r-lg px-14 py-10">
          <div className="flex flex-1 items-end mb-6">
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Design
            </div>
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Research
            </div>
          </div>
          <h1 className="text-4xl text-[#222B45] mb-5">
            The management strategy IBM’s Katrina Alcorn uses to empower large
            teams
          </h1>
          <p className="mb-8 text-[#696F81]">2 min read</p>
          <div className="-mb-28">
            <img
              src="/assets/images/blog-author.png"
              className="w-[3.6rem] h-[3.6rem] object-cover rounded-full"
            />
            <p className="mt-4 text-[#696F81]">Eli Willson • Jun 8, 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostTitle;
