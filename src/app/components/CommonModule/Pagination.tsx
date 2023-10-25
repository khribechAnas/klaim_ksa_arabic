"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

interface ComponentProps {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
  onChange: (page: number) => void;
}

const Pagination: FC<ComponentProps> = ({ pagination, onChange }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pagesArray, setPagesArray] = useState<number[]>([]);

  useEffect(() => {
    if (pagination) {
      const arr = [];
      for (let i = 1; i <= pagination.pageCount; i++) {
        arr.push(i);
      }
      setPagesArray(arr);
    }
  }, [pagination]);

  const handlePageChange = (page: number) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("page", page.toString());
    current.set("pageSize", "5");

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
    onChange(page);
  };

  const handleNextClick = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const currentPage = current.get("page");
    if (currentPage && +currentPage < pagination.pageCount) {
      current.set("page", (+currentPage + 1).toString());
      current.set("pageSize", "5");
      const search = current.toString();
      const query = search ? `?${search}` : "";
      router.push(`${pathname}${query}`);
      onChange(+currentPage + 1);
    }
  };

  const handleBackClick = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const currentPage = current.get("page");
    if (currentPage && +currentPage > 1) {
      current.set("page", (+currentPage - 1).toString());
      current.set("pageSize", "5");
      const search = current.toString();
      const query = search ? `?${search}` : "";
      router.push(`${pathname}${query}`);
      onChange(+currentPage - 1);
    }
  };

  if (pagination.pageCount <= 1) return null;

  return (
    <ul className="flex items-center -space-x-px h-8 text-sm">
      <li>
        <a
          onClick={handleBackClick}
          className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </a>
      </li>
      {pagesArray.map((page) => (
        <li className="cursor-pointer">
          <a
            onClick={() => handlePageChange(page)}
            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              page === pagination.page ? "font-bold" : ""
            }`}
          >
            {page}
          </a>
        </li>
      ))}
      <li>
        <a
          onClick={handleNextClick}
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
