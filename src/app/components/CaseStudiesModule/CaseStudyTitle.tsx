import moment from "moment";
import React from "react";

const CaseStudyTitle = ({ caseStudy }: any) => {
  return (
    <section className="pt-[74px] container mx-auto px-4">
      <div className="flex flex-col xl:flex-row items-center pt-11 pb-28 xl:pb-11">
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}${caseStudy.attributes.featuredImage.data.attributes.url}`}
          className="object-cover h-[30rem] w-full xl:w-[45rem] rounded-t-lg xl:rounded-lg"
        />
        <div className="bg-[#F5F7FB] w-full rounded-b-lg xl:rounded-r-lg px-14 py-10">
          {/* <div className="flex flex-1 items-end mb-6">
            {blogPost.attributes.blog_tags.data.map((tag: any) => (
              <div
                className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4"
                key={tag.id}
              >
                {tag.attributes.name}
              </div>
            ))}
          </div> */}
          <h1 className="text-4xl text-[#222B45] mb-5">
            {caseStudy.attributes.title}
          </h1>
          {/* <p className="mb-8 text-[#696F81]">{blogPost.attributes.readingTime}</p> */}
          <div>
            <p className="text-[#696F81]">
              {/* {blogPost.attributes.admin_user.data?.attributes.firstname}{" "} */}
              {/* {blogPost.attributes.admin_user.data?.attributes.lastname} •{" "} */}
              {moment(new Date(caseStudy.attributes.publishedOn)).format(
                "Do MMMM, YYYY"
              )}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CaseStudyTitle;
