"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SimpleBlogWithGrid() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <div className="py-4 md:py-10 overflow-hidden relative  px-4 md:px-8">
        <GridPatternContainer className="opacity-50" />
      </div>
      <div className="flex flex-col items-center justify-between pb-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full relative z-20">
          {blogs.map((blog, index) => (
            <BlogCard blog={blog} key={blog.title + index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
      <span className="font-medium text-black dark:text-white">Klaim</span>
    </Link>
  );
};

export const BlogCard = ({ blog }: { blog: Blog }) => {
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };
  return (
    <Link
      className="shadow-derek rounded-3xl border dark:border-neutral-800 w-full bg-white dark:bg-neutral-900  overflow-hidden  hover:scale-[1.02] transition duration-200"
      href={blog.link}
      target="_blank"
    >
      {blog.image ? (
        <BlurImage
          src={blog.image || ""}
          alt={blog.title}
          height={800}
          width={800}
          className="h-52 object-cover object-top w-full"
        />
      ) : (
        <div className="h-52 flex items-center justify-center bg-white dark:bg-neutral-900">
          <Logo />
        </div>
      )}
      <div className="p-4 md:p-8 bg-white dark:bg-neutral-900">
        <div className="flex space-x-2 items-center  mb-2">
          <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400">
            {blog.author}
          </p>
        </div>
        <p className="text-lg font-bold mb-4 text-neutral-800 dark:text-neutral-100">
          {blog.title}
        </p>
        <p className="text-left text-sm mt-2 text-neutral-600 dark:text-neutral-400">
          {truncate(blog.description, 100)}
        </p>
      </div>
    </Link>
  );
};

type Blog = {
  title: string;
  description: string;
  slug: string;
  image: string;
  author: string;
  authorAvatar: string;
  link: string;
};
const blogs: Blog[] = [
  {
    title: "Klaim: Revolutionizing Healthcare Cash Flow in the UAE",
    description:
      "In an industry where timely payments are crucial, UAE-based healthcare technology platform Klaim is stepping up to address a longstanding challenge: the delay in medical claim payments. With a mission to streamline medical claim management, Klaim is offering a cutting-edge solution designed to simplify and expedite the process, ensuring hospitals and clinics can keep their operations running smoothly without financial disruptions.",
    slug: "klaim-flow-sme-cashflow",
    image: "/blog2.png",
    author: "L'Officiel Arabia",
    authorAvatar: "https://randomuser.me/api/portraits/women/14.jpg",
    link: "https://lofficielarabia.com/format/art-culture-masterpiece.php?table_name=master_table&id=6457",
  },
  {
    title:
      "UAE-Based Healthcare Fintech Startup Klaim Secures $26M In Funding To Boost Regional Expansion",
    description:
      "The UAE-based healthcare fintech startup Klaim announced Friday that it secured $26 million in funding, including $10 million in Series A equity funding and $16 million in a financing round to accelerate its regional growth.",
    slug: "klaim-ai-healthcare-revolution",
    image: "/blog1.jpg",
    author: "Forbes Middle East",
    authorAvatar: "https://randomuser.me/api/portraits/women/12.jpg",
    link: "https://www.forbesmiddleeast.com/innovation/startups/uae-based-fintech-startup-klaim-secures-%2426m-in-funding-to-boost-regional-expansion",
  },
  {
    title:
      "Startup Spotlight: UAE-Based Healthcare Fintech Klaim Focuses On Maintaining The Human Touch As It Continues To Expand Across The GCC",
    description:
      "When Karim Dakki and Ahmad Ghafour launched Abu Dhabi-based fintech startup Klaim in December 2019, there was one clear goal the duo had set out to achieve: solve delayed and/or rejected insurance claim payments for medical providers in the UAE. The birth of the company was formed over a casual meeting among friends",
    slug: "klaim-estate-real-estate-commissions",
    image: "/blog3.png",
    author: "Entrepreneur",
    authorAvatar: "https://randomuser.me/api/portraits/men/12.jpg",
    link: "https://www.entrepreneur.com/en-ae/growth-strategies/startup-spotlight-uae-based-healthcare-fintech-klaim/443598",
  },
];

interface IBlurImage {
  height: number;
  width: number;
  src: string;
  className?: string;
  alt?: string;
  layout?: "fixed" | "intrinsic" | "responsive" | "fill";
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  layout,
  ...rest
}: IBlurImage) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300 transform",
        isLoading ? "blur-sm scale-105" : "blur-0 scale-100",
        className
      )}
      onLoadingComplete={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      placeholder="blur"
      blurDataURL={src}
      layout={layout}
      alt={alt || "Image"}
      {...rest}
    />
  );
};

export function GridPatternContainer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
        className
      )}
    >
      <GridPattern />
    </div>
  );
}
export function GridPattern() {
  const columns = 30;
  const rows = 11;
  return (
    <div className="flex bg-gray-200 dark:bg-neutral-700 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex flex-shrink-0 rounded-[1px] ${
                index % 2 === 0
                  ? "bg-gray-100 dark:bg-neutral-800"
                  : "bg-gray-100 dark:bg-neutral-800 shadow-[0px_0px_0px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_0px_3px_rgba(0,0,0,0.2)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}
