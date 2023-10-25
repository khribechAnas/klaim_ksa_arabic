import moment from "moment";
import React from "react";

const loadAwards = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/awards-articles?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  return response.json();
};

const Awards = async () => {
  const awards = await loadAwards();
  return (
    <section className="container mx-auto my-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-20">
        {awards.data.map((award: any, index: number) => (
          <div className="text-center" key={award.id}>
            <a href={`/awards/${award.attributes.slug}`}>
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}${award.attributes.featuredImage.data.attributes.url}`}
                className="w-full h-[350px] object-cover rounded-lg"
              />
            </a>
            <a href={`/awards/${award.attributes.slug}`}>
              <h2 className="text-lg text-[#222B45] font-medium mt-7 mb-3.5 px-12">
                {award.attributes.title}
              </h2>
            </a>
            <p className="text-[#696F81] font-medium px-12">
              {award.attributes.shortDescription}
            </p>
            <p className="mt-8 font-medium text-[#6135FB]">
              {moment(new Date(award.attributes.publishedOn)).format(
                "Do MMMM, YYYY"
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
