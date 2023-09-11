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
      width="14.728"
      height="17"
      viewBox="0 0 14.728 17"
    >
      <path
        d="M8.707.293a1,1,0,0,0-1.414,0L.929,6.657A1,1,0,0,0,2.343,8.071L8,2.414l5.657,5.657a1,1,0,0,0,1.414-1.414ZM7,1V17H9V1Z"
        transform="translate(15.364 17) rotate(180)"
        fill="#3F465D"
      />
    </svg>
  );

  return (
    <div className="space-y-2 md:space-y-4 px-0 xl:px-28">
      {questions.map((question, index) => (
        <div
          key={index}
          className="bg-[#F5F7FB] pl-7 pr-3 py-4 md:pl-8 md:pr-4 md:py-6 rounded-lg"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-[16px] md:text-[28px] leading-[24px] md:leading-9 font-semibold md:font-normal">
              {question.title}
            </h2>
            <span
              className={`transform transition-transform p-4 ${
                activeIndex === index ? "rotate-60" : ""
              }`}
            >
              {activeIndex === index ? downArrow : upArrow}
            </span>
          </div>
          {activeIndex === index && (
            <div
              className="mt-4 text-[#3F465D] text-sm md:text-base leading-[25px]"
              // dangerouslySetInnerHTML={{ __html: question.answer }}
            >
              {question.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
