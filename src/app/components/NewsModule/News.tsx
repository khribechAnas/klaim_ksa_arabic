import React from "react";
import NewsCTA from "./NewsCTA";
import NewsNewsletter from "./NewsNewsletter";

const News = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="w-1/2 text-center mb-12">
          <img
            src="/assets/images/CashFlow1.png"
            className="w-full object-cover rounded-lg"
          />
          <h2 className="text-lg text-[#222B45] font-medium mt-7 mb-3.5 px-12">
            The management strategy IBM’s Katrina Alcorn uses to empower large
            teams
          </h2>
          <p className="text-[#696F81] font-medium px-12">
            The pandemic put an unprecedented level of stress on parents who
            were balancing full-time work and kids at home attending school
          </p>
        </div>
        <div className="w-1/2 text-center mb-12">
          <img
            src="/assets/images/CashFlow1.png"
            className="w-full object-cover rounded-lg"
          />
          <h2 className="text-lg text-[#222B45] font-medium mt-7 mb-3.5 px-12">
            The management strategy IBM’s Katrina Alcorn uses to empower large
            teams
          </h2>
          <p className="text-[#696F81] font-medium px-12">
            The pandemic put an unprecedented level of stress on parents who
            were balancing full-time work and kids at home attending school
          </p>
        </div>
        <NewsCTA />
        <div className="w-1/2 text-center mb-12">
          <img
            src="/assets/images/CashFlow1.png"
            className="w-full object-cover rounded-lg"
          />
          <h2 className="text-lg text-[#222B45] font-medium mt-7 mb-3.5 px-12">
            The management strategy IBM’s Katrina Alcorn uses to empower large
            teams
          </h2>
          <p className="text-[#696F81] font-medium px-12">
            The pandemic put an unprecedented level of stress on parents who
            were balancing full-time work and kids at home attending school
          </p>
        </div>
        <NewsNewsletter />
        <div className="w-1/2 text-center mb-12">
          <img
            src="/assets/images/CashFlow1.png"
            className="w-full object-cover rounded-lg"
          />
          <h2 className="text-lg text-[#222B45] font-medium mt-7 mb-3.5 px-12">
            The management strategy IBM’s Katrina Alcorn uses to empower large
            teams
          </h2>
          <p className="text-[#696F81] font-medium px-12">
            The pandemic put an unprecedented level of stress on parents who
            were balancing full-time work and kids at home attending school
          </p>
        </div>
        <div className="w-1/2 text-center mb-12">
          <img
            src="/assets/images/CashFlow1.png"
            className="w-full object-cover rounded-lg"
          />
          <h2 className="text-lg text-[#222B45] font-medium mt-7 mb-3.5 px-12">
            The management strategy IBM’s Katrina Alcorn uses to empower large
            teams
          </h2>
          <p className="text-[#696F81] font-medium px-12">
            The pandemic put an unprecedented level of stress on parents who
            were balancing full-time work and kids at home attending school
          </p>
        </div>
        <div className="mb-12">
          <button className="border border-[#6135FB] rounded-lg px-20 py-4 text-[#6135FB] font-medium text-sm">
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
