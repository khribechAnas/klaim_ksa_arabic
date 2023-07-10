import React from "react";

const AwardDetails = ({ article }) => {
  return (
    <section className="bg-half">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="section-title">
              <div className="text-center">
                <h4 className="title mb-4">{article.attributes.title}</h4>
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${article.attributes.featuredImage.data.attributes.url}`}
                  className="img-fluid rounded-md shadow-md"
                  alt=""
                />
              </div>
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{
                  __html: article.attributes.content,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardDetails;
