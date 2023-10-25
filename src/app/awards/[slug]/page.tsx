import AwardText from "@/app/components/AwardsModule/AwardText";
import AwardTitle from "@/app/components/AwardsModule/AwardTitle";
import Footer from "@/app/components/CommonModule/Footer";
import Header from "@/app/components/CommonModule/Header";
import React from "react";

const loadAward = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/awards-articles?populate=*&filters[slug][$eq]=${slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  return response.json();
};

const AwardPage = async ({ params }: any) => {
  const award = await loadAward(params.slug);
  return (
    <>
      <Header />
      <AwardTitle award={award.data[0]} />
      <AwardText award={award.data[0]} />
      <Footer />
    </>
  );
};

export default AwardPage;
