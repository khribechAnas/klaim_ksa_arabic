"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SearchBlogPost = ({}: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <input
      type="text"
      id="input-group-1"
      className="bg-[#F7F9FC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 py-5 pr-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search posts..."
      onKeyDown={(e: any) => {
        if (e.keyCode === 13) {
          const current = new URLSearchParams(
            Array.from(searchParams.entries())
          );
          const value = e.target.value;
          if (!value) {
            current.delete("search");
          } else {
            current.set("search", value);
          }

          const search = current.toString();
          const query = search ? `?${search}` : "";

          router.push(`${pathname}${query}`);
        }
      }}
    />
  );
};

export default SearchBlogPost;
