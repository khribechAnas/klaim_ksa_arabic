"use client";

import React, { useEffect, useState } from "react";
import Pagination from "../CommonModule/Pagination";
import moment from "moment";
import SearchBlogPost from "./SearchBlogPost";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const BlogPosts = ({ searchParams }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const hookSearchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const [lastTwoPosts, setLastTwoPosts] = useState<any[]>([]);
  const [otherPosts, setOtherPosts] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>([]);

  useEffect(() => {
    loadTags();
    loadPosts(
      searchParams.search,
      searchParams.page || "1",
      searchParams.pageSize || "5",
      searchParams.tag
    );
  }, []);

  const loadTags = () => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/blog-tags`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }).then((response) => {
      response.json().then((tagsJson) => {
        setTags(tagsJson.data);
      });
    });
  };

  const loadPosts = (
    search: string,
    page: string,
    limit: string,
    tag: string | null
  ) => {
    setLoading(true);
    const searchParameters = search
      ? `&filters[title][$contains]=${search}`
      : "";
    const tagsParameters = tag ? `&[filters][blog_tags][name][$eq]=${tag}` : "";
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/blog-articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${limit}&sort[0]=publishedOn:desc${searchParameters}${tagsParameters}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }
    ).then((response) => {
      response.json().then((postsJson) => {
        if (postsJson.data.length > 1) {
          setLastTwoPosts([postsJson.data[0], postsJson.data[1]]);
        }
        if (+page < 2 && !searchParameters && !tagsParameters) {
          setOtherPosts(
            postsJson.data.filter((post: any, index: number) => index > 1)
          );
        } else {
          setOtherPosts(postsJson.data);
        }
        setPagination(postsJson.meta.pagination);
        setLoading(false);
      });
    });
  };

  const handleTagClick = (tagName: string) => {
    const current = new URLSearchParams(Array.from(hookSearchParams.entries()));
    const newTag = searchParams.tag === tagName ? null : tagName;
    if (newTag) {
      current.set("tag", tagName);
    } else {
      current.delete("tag");
    }
    current.set("page", "1");
    current.set("pageSize", "5");
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
    loadPosts(searchParams.search, "1", "5", newTag);
  };

  return (
    <section className="container mx-auto px-4">
      <div className="relative mb-6 w-full md:w-1/2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <SearchBlogPost
          searchParams={searchParams}
          onChange={(search: string) =>
            loadPosts(search, "1", "5", searchParams.tag)
          }
        />
      </div>
      <div className="flex mb-8 py-4 overflow-x-auto">
        {tags.map((tag: any) => (
          <div
            onClick={() => handleTagClick(tag.attributes.name)}
            key={tag.id}
            className={`px-3 py-1 text-sm text-gray-500 font-medium tracking-[0.011rem] rounded-lg mr-4 cursor-pointer border hover:bg-gray-100 ${
              searchParams.tag === tag.attributes.name
                ? "border-gray-500 bg-gray-100"
                : "border-[#d1d5db]"
            }`}
          >
            <span
              className={`${
                searchParams.tag === tag.attributes.name ? "font-bold" : ""
              }`}
            >
              {tag.attributes.name}
            </span>
          </div>
        ))}
      </div>
      {loading && (
        <div className="w-full flex items-center justify-center my-10">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-[#6135fb]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!loading && (
        <>
          {!searchParams.search && pagination.page < 2 && !searchParams.tag && (
            <div className="flex flex-col xl:flex-row w-full mb-16">
              {lastTwoPosts.map((post: any, index: number) => (
                <div
                  className={`w-full xl:w-[${
                    index === 0 ? 55 : 45
                  }%] flex flex-col mb-8 xl:mb-0 ${
                    index === 1 ? "pl-0 xl:pl-20" : ""
                  }`}
                  key={post.id}
                >
                  <a href={`/blog/${post.attributes.slug}`}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}${post.attributes.featuredImage.data.attributes.url}`}
                      className="w-full h-[20rem] object-cover rounded-lg mb-4"
                    />
                  </a>
                  <p className="text-[#6135FB] text-base font-medium mb-3.5">
                    {/* {post.attributes.admin_user.data?.attributes.firstname}{" "} */}
                    {/* {post.attributes.admin_user.data?.attributes.lastname} •{" "} */}
                    {moment(new Date(post.attributes.publishedOn)).format(
                      "Do MMMM, YYYY"
                    )}
                  </p>
                  <a href={`/blog/${post.attributes.slug}`}>
                    <h4 className="text-[#222B45] text-lg font-medium mb-3.5">
                      {post.attributes.title}
                    </h4>
                  </a>
                  <p className="text-[#696F81] text-base font-medium mb-3.5">
                    {post.attributes.shortDescription}
                  </p>
                  <div className="flex flex-1 items-end">
                    {post.attributes.blog_tags.data.map((tag: any) => (
                      <div
                        className="px-3 py-1 text-sm text-gray-500 font-medium tracking-[0.011rem] rounded-lg mr-4 border"
                        key={tag.id}
                      >
                        {tag.attributes.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[4.5rem]">
            {otherPosts.map((post: any) => (
              <div className="flex flex-col" key={post.id}>
                <a href={`/blog/${post.attributes.slug}`}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}${post.attributes.featuredImage.data.attributes.url}`}
                    className="w-full h-[17rem] object-cover rounded-lg mb-4"
                  />
                </a>
                <p className="text-[#6135FB] text-base font-medium mb-3.5">
                  {post.attributes.admin_user.data?.attributes.firstname}{" "}
                  {post.attributes.admin_user.data?.attributes.lastname} •{" "}
                  {moment(new Date(post.attributes.publishedOn)).format(
                    "Do MMMM, YYYY"
                  )}
                </p>
                <a href={`/blog/${post.attributes.slug}`}>
                  <h4 className="text-[#222B45] text-lg font-medium mb-3.5">
                    {post.attributes.title}
                  </h4>
                </a>
                <p className="text-[#696F81] text-base font-medium mb-3.5">
                  {post.attributes.shortDescription}
                </p>
                <div className="flex flex-1 items-end">
                  {post.attributes.blog_tags.data.map((tag: any) => (
                    <div
                      className="px-3 py-1 text-sm text-gray-500 font-medium tracking-[0.011rem] rounded-lg mr-4 border"
                      key={tag.id}
                    >
                      {tag.attributes.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mb-[7.625rem]">
            <Pagination
              pagination={pagination}
              onChange={(page: number) =>
                loadPosts(
                  searchParams.search,
                  page.toString(),
                  "5",
                  searchParams.tag
                )
              }
            />
          </div>
        </>
      )}
    </section>
  );
};

export default BlogPosts;
