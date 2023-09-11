import moment from "moment";
import React from "react";

const HRArticleDetails = ({ article }) => {
  const regex = /<img src="\/uploads\/(.*?)"/g;
  const replacement = `<img style="max-width: 100%" src="${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/uploads/$1"`;

  return (
    <section class="bg-half-170 d-table w-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-7">
            <div class="card border-0 shadow rounded overflow-hidden">
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${article.attributes.featuredImage.data.attributes.url}`}
                class="img-fluid"
                alt=""
              />

              <div class="card-body">
                <div class="text-center">
                  <h4 class="mt-3">{article.attributes.title}</h4>

                  <ul class="list-unstyled mt-3">
                    <li class="list-inline-item date text-muted">
                      <i class="mdi mdi-calendar-check"></i>{" "}
                      {moment(new Date(article.attributes.publishedOn)).format(
                        "Do MMMM, YYYY"
                      )}
                    </li>
                  </ul>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.attributes.content.replace(
                      regex,
                      replacement
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRArticleDetails;
