import React from "react";
import Pagination from "../CommonModule/Pagination";

const BlogPosts = () => {
  return (
    <section className="container mx-auto">
      <div className="relative mb-6 w-1/2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
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
        <input
          type="text"
          id="input-group-1"
          className="bg-[#F7F9FC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search posts..."
        />
      </div>
      <div className="flex mb-11">
        <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
          Design
        </div>
        <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
          Research
        </div>
        <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
          Presentation
        </div>
        <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
          Design
        </div>
        <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
          Research
        </div>
        <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
          Presentation
        </div>
      </div>
      <div className="flex w-full mb-16">
        <div className="w-7/12 flex flex-col">
          <a href="/blog/blogpost">
            <img
              src="assets/images/blog-1.png"
              className="w-full h-[30rem] object-cover rounded-lg mb-4"
            />
          </a>
          <p className="text-[#6135FB] text-base font-medium mb-3.5">
            Dr. Sara Surname • 20 Jan 2022
          </p>
          <h4 className="text-[#222B45] text-lg font-medium mb-3.5">
            The management strategy IBM’s Katrina Alcorn uses to empower large
            teams
          </h4>
          <p className="text-[#696F81] text-base font-medium mb-3.5">
            The pandemic put an unprecedented level of stress on parents who
            were balancing full-time work and kids at home attending school …
          </p>
          <div className="flex flex-1 items-end">
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Design
            </div>
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Research
            </div>
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Presentation
            </div>
          </div>
        </div>
        <div className="w-5/12 pl-16  flex flex-col">
          <img
            src="assets/images/blog-1.png"
            className="w-full h-[30rem] object-cover rounded-lg mb-4"
          />
          <p className="text-[#6135FB] text-base font-medium mb-3.5">
            Dr. Sara Surname • 20 Jan 2022
          </p>
          <h4 className="text-[#222B45] text-lg font-medium mb-3.5">
            The management strategy IBM’s Katrina Alcorn uses to empower large
            teams
          </h4>
          <p className="text-[#696F81] text-base font-medium mb-3.5">
            The pandemic put an unprecedented level of stress on parents who
            were balancing full-time work and kids at home attending school …
          </p>
          <div className="flex flex-1 items-end">
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Design
            </div>
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Research
            </div>
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Presentation
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mb-[4.5rem]">
        <div className="flex flex-col">
          <img
            src="assets/images/blog-1.png"
            className="w-full h-[17rem] object-cover rounded-lg mb-4"
          />
          <p className="text-[#6135FB] text-base font-medium mb-3.5">
            Dr. Sara Surname • 20 Jan 2022
          </p>
          <h4 className="text-[#222B45] text-lg font-medium mb-3.5">
            The management strategy IBM’s Katrina Alcorn uses to empower large
            teams
          </h4>
          <p className="text-[#696F81] text-base font-medium mb-3.5">
            The pandemic put an unprecedented level of stress on parents who
            were balancing full-time work and kids at home attending school …
          </p>
          <div className="flex flex-1 items-end">
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Design
            </div>
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Research
            </div>
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Presentation
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="assets/images/blog-1.png"
            className="w-full h-[17rem] object-cover rounded-lg mb-4"
          />
          <p className="text-[#6135FB] text-base font-medium mb-3.5">
            Dr. Sara Surname • 20 Jan 2022
          </p>
          <h4 className="text-[#222B45] text-lg font-medium mb-3.5">
            The management strategy IBM’s Katrina Alcorn uses to empower large
            teams
          </h4>
          <p className="text-[#696F81] text-base font-medium mb-3.5">
            The pandemic put an unprecedented level of stress on parents who
            were balancing full-time work and kids at home attending school …
          </p>
          <div className="flex flex-1 items-end">
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Design
            </div>
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Research
            </div>
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Presentation
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="assets/images/blog-1.png"
            className="w-full h-[17rem] object-cover rounded-lg mb-4"
          />
          <p className="text-[#6135FB] text-base font-medium mb-3.5">
            Dr. Sara Surname • 20 Jan 2022
          </p>
          <h4 className="text-[#222B45] text-lg font-medium mb-3.5">
            The management strategy IBM’s Katrina Alcorn uses to empower large
            teams
          </h4>
          <p className="text-[#696F81] text-base font-medium mb-3.5">
            The pandemic put an unprecedented level of stress on parents who
            were balancing full-time work and kids at home attending school …
          </p>
          <div className="flex flex-1 items-end">
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Design
            </div>
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Research
            </div>
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Presentation
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="assets/images/blog-1.png"
            className="w-full h-[17rem] object-cover rounded-lg mb-4"
          />
          <p className="text-[#6135FB] text-base font-medium mb-3.5">
            Dr. Sara Surname • 20 Jan 2022
          </p>
          <h4 className="text-[#222B45] text-lg font-medium mb-3.5">
            The management strategy IBM’s Katrina Alcorn uses to empower large
            teams
          </h4>
          <p className="text-[#696F81] text-base font-medium mb-3.5">
            The pandemic put an unprecedented level of stress on parents who
            were balancing full-time work and kids at home attending school …
          </p>
          <div className="flex flex-1 items-end">
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Design
            </div>
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Research
            </div>
            <div className="px-3 py-1 text-sm text-[#488596] font-medium tracking-[0.011rem] bg-[#C1F3FF] rounded-lg mr-4">
              Presentation
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-[7.625rem]">
        <Pagination />
      </div>
    </section>
  );
};

export default BlogPosts;
