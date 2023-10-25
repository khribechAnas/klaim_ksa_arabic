import moment from "moment";
import React from "react";

const loadLastThreePosts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/blog-articles?populate=*&pagination[page]=1&pagination[pageSize]=3&sort[0]=publishedOn:desc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  return response.json();
};

const BlogPostRelated = async () => {
  const lastThreePosts = await loadLastThreePosts();
  console.log(lastThreePosts);
  return (
    <section className="container mx-auto px-4">
      <h2 className="font-bold text-4xl text-[#222B45] mb-9">
        Related reading
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-[4.5rem]">
        {lastThreePosts.data.map((post: any, index: number) => (
          <div className="flex flex-col" key={post.id}>
            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}${post.attributes.featuredImage.data.attributes.url}`}
              className="w-full h-[17rem] object-cover rounded-lg mb-4"
            />
            <p className="text-[#6135FB] text-base font-medium mb-3.5">
              {post.attributes.admin_user.data.attributes.firstname}{" "}
              {post.attributes.admin_user.data.attributes.lastname} •{" "}
              {moment(new Date(post.attributes.publishedOn)).format(
                "Do MMMM, YYYY"
              )}
            </p>
            <h4 className="text-[#222B45] text-lg font-medium mb-3.5">
              {post.attributes.title}
            </h4>
            <p className="text-[#696F81] text-base font-medium mb-3.5">
              {post.attributes.shortDescription}
            </p>
            <div className="flex flex-1 items-end">
              {post.attributes.blog_tags.data.map((tag: any) => (
                <div
                  className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4"
                  key={tag.id}
                >
                  {tag.attributes.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-[4.5rem]">
        <button className="border border-[#6135FB] rounded-lg px-9 py-4 text-[#6135FB] font-medium text-sm">
          Load more news
        </button>
      </div>
    </section>
  );
};

export default BlogPostRelated;
