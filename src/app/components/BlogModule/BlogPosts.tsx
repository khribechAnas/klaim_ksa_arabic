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
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
            className={`px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4 cursor-pointer border-2 ${
              searchParams.tag === tag.attributes.name
                ? "border-[#488596]"
                : "border-[#C1F3FF]"
            }`}
          >
            {tag.attributes.name}
          </div>
        ))}
      </div>
      {!searchParams.search && pagination.page < 2 && !searchParams.tag && (
        <div className="flex flex-col xl:flex-row w-full mb-16">
          {lastTwoPosts.map((post: any, index: number) => (
            <div
              className={`w-full xl:w-[${
                index === 0 ? 55 : 45
              }%] flex flex-col mb-8 xl:mb-0 ${
                index === 1 ? "pl-0 xl:pl-16" : ""
              }`}
              key={post.id}
            >
              <a href={`/blog/${post.attributes.slug}`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}${post.attributes.featuredImage.data.attributes.url}`}
                  className="w-full h-[30rem] object-cover rounded-lg mb-4"
                />
              </a>
              <p className="text-[#6135FB] text-base font-medium mb-3.5">
                {post.attributes.admin_user.data.attributes.firstname}{" "}
                {post.attributes.admin_user.data.attributes.lastname} •{" "}
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
              {post.attributes.admin_user.data.attributes.firstname}{" "}
              {post.attributes.admin_user.data.attributes.lastname} •{" "}
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
    </section>
  );
};

export default BlogPosts;
