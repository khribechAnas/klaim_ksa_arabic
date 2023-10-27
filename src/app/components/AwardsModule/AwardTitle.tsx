import moment from "moment";
import React from "react";

const AwardTitle = ({ award }: any) => {
  return (
    <section className="pt-[74px] container mx-auto px-4">
      <div className="flex flex-col xl:flex-row items-center pt-11 pb-28 xl:pb-11">
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}${award.attributes.featuredImage.data.attributes.url}`}
          className="object-cover h-[30rem] w-full xl:w-[45rem] rounded-t-lg xl:rounded-lg"
        />
        <div className="bg-[#F5F7FB] w-full rounded-b-lg xl:rounded-r-lg px-14 py-10">
          <h1 className="text-4xl text-[#222B45] mb-5">
            {award.attributes.title}
          </h1>
          <p className="mb-8 text-[#696F81]">2 min read</p>
          <div>
            <p className="text-[#696F81]">
              {/* {award.attributes.admin_user.data?.attributes.firstname}{" "} */}
              {/* {award.attributes.admin_user.data?.attributes.lastname} •{" "} */}
              {moment(new Date(award.attributes.publishedOn)).format(
                "Do MMMM, YYYY"
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardTitle;
