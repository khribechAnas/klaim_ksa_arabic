"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SearchBlogPost = ({ onChange }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <input
      type="text"
      id="input-group-1"
      className="bg-[#F7F9FC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 py-5 pr-6"
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
          current.set("page", "1");
          current.set("pageSize", "5");

          const search = current.toString();
          const query = search ? `?${search}` : "";

          router.push(`${pathname}${query}`);
          onChange(value);
        }
      }}
    />
  );
};

export default SearchBlogPost;
