"use client";
import React, { FC, useState } from "react";

interface FAQQuestion {
  title: string;
  answer: string;
}

interface FAQComponentProps {
  questions: FAQQuestion[];
}

const FAQ: FC<FAQComponentProps> = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const upArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M8.70711 0.292892C8.31658 -0.0976314 7.68342 -0.0976315 7.29289 0.292892L0.928933 6.65685C0.538408 7.04738 0.538408 7.68054 0.928933 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM7 1L7 17L9 17L9 1L7 1Z"
        fill="#3F465D"
      />
    </svg>
  );
  const downArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M8.70711 16.7071C9.09763 17.0976 9.7308 17.0976 10.1213 16.7071L16.4853 10.3431C16.8758 9.95262 16.8758 9.31946 16.4853 8.92893C16.0948 8.53841 15.4616 8.53841 15.0711 8.92893L9.41421 14.5858L3.75736 8.92893C3.36683 8.53841 2.73367 8.53841 2.34315 8.92893C1.95262 9.31946 1.95262 9.95262 2.34315 10.3431L8.70711 16.7071ZM7 16L7 0L9 0L9 16L7 16Z"
        fill="#3F465D"
      />
    </svg>
  );

  return (
    <div className="space-y-2 md:space-y-4 px-0 md:px-28">
      {questions.map((question, index) => (
        <div
          key={index}
          className="bg-[#F5F7FB] px-7 py-4 md:px-8 md:py-6 rounded-lg"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-[16px] md:text-[28px] leading-[24px] md:leading-9 font-semibold md:font-normal">
              {question.title}
            </h2>
            <span
              className={`transform transition-transform ${
                activeIndex === index ? "rotate-60" : ""
              }`}
            >
              {activeIndex === index ? downArrow : upArrow}
            </span>
          </div>
          {activeIndex === index && (
            <div
              className="mt-4 text-[#3F465D] text-sm md:text-base leading-[25px]"
              dangerouslySetInnerHTML={{ __html: question.answer }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
