import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { SparklesDemo } from "@/components/ui/sparkles-demo";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { FirstBentoSkeleton } from "@/components/flow/first-bento-skeleton";
import { SecondBentoSkeleton } from "@/components/flow/second-bento-skeleton";
import { ThirdBentoSkeleton } from "@/components/flow/third-bento-skeleton";
import { FourthBentoSkeleton } from "@/components/flow/fourth-bento-skeleton";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Klaim",
  description: "Klaim",
  cta: "Get Started",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Klaim",
    "Klaim AI",
    "Klaim Flow",
    "Klaim Estate",
    "Klaim Health",
  ],
  links: {
    email: "hello@klaim.ai",
    instagram: "https://instagram.com/klaim.ai/",
    youtube: "https://youtube.com/channel/UCSFyygyt3hE05B9nGNCqHMA",
    linkedin: "https://linkedin.com/company/klaim-ai/",
    facebook: "https://facebook.com/profile.php?id=100063848329885",
  },
  nav: {
    links: [
      { id: 1, name: "Home", href: "#hero" },
      {
        id: 2,
        name: "Sectors",
        href: "#sectors",
        children: [
          { name: "Klaim Flow", href: "/flow" },
          { name: "Klaim Estate", href: "/estate" },
          { name: "Klaim Health", href: "/health" },
        ],
      },
      { id: 3, name: "How it Works", href: "#features" },
      { id: 4, name: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    title: "Tired of waiting to get paid?",
    description:
      "Unlock payments stuck in complex systems. Klaim helps healthcare providers, real estate agents and SMEs get paid within 24 hours - without loans, delays or red tape",
    cta: {
      primary: {
        text: "Get Started",
        href: "#contact",
      },
      secondary: {
        text: "Book a Call",
        href: "#contact",
      },
    },
  },
  companyShowcase: {
    companyLogos: [
      {
        id: 1,
        name: "Company 1",
        logo: (
          <Image
            src="/company1.png"
            alt="DISC"
            width={122}
            height={31}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 2,
        name: "Company 2",
        logo: (
          <Image
            src="/company2.png"
            alt="OPENMINDS"
            width={122}
            height={25}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 3,
        name: "Company 3",
        logo: (
          <Image
            src="/company3.png"
            alt="Z'NEEM"
            width={122}
            height={31}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 4,
        name: "Company 4",
        logo: (
          <Image
            src="/company4.png"
            alt="YASMED"
            width={111}
            height={23}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 5,
        name: "Company 5",
        logo: (
          <Image
            src="/company5.png"
            alt="UP AND RUNNING"
            width={122}
            height={51}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 6,
        name: "Company 6",
        logo: (
          <Image
            src="/company6.svg"
            alt="Dr Sulaiman Al Habib"
            width={175}
            height={51}
            className="invert dark:invert-0 grayscale"
          />
        ),
      },
      {
        id: 7,
        name: "Company 7",
        logo: (
          <Image
            src="/company7.png"
            alt="Transform"
            width={133}
            height={51}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 8,
        name: "Company 8",
        logo: (
          <Image
            src="/company8.png"
            alt="Almazroui Medical Center"
            width={160}
            height={51}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 9,
        name: "Company 9",
        logo: (
          <Image
            src="/company9.png"
            alt="Medsol Diagnostics"
            width={160}
            height={51}
            className="invert dark:invert-0 grayscale"
          />
        ),
      },
      {
        id: 10,
        name: "Company 10",
        logo: (
          <Image
            src="/company10.png"
            alt="Amber Clinics"
            width={160}
            height={51}
            className="invert dark:invert-0 grayscale"
          />
        ),
      },
    ],
  },
  companyShowcaseFlow: {
    companyLogos: [
      {
        id: 1,
        name: "Company 1",
        logo: (
          <Image
            src="/flow/Award1.png"
            alt="DISC"
            width={122}
            height={31}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 2,
        name: "Company 2",
        logo: (
          <Image
            src="/flow/Award2.png"
            alt="OPENMINDS"
            width={122}
            height={25}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 3,
        name: "Company 3",
        logo: (
          <Image
            src="/flow/Award3.png"
            alt="Z'NEEM"
            width={122}
            height={31}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 4,
        name: "Company 4",
        logo: (
          <Image
            src="/flow/Award4.png"
            alt="YASMED"
            width={111}
            height={23}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 5,
        name: "Company 5",
        logo: (
          <Image
            src="/flow/Award5.png"
            alt="UP AND RUNNING"
            width={122}
            height={51}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 6,
        name: "Company 6",
        logo: (
          <Image
            src="/flow/Award6.png"
            alt="Life Works"
            width={160}
            height={51}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 7,
        name: "Company 7",
        logo: (
          <Image
            src="/flow/enterprise.svg"
            alt="Transform"
            width={133}
            height={51}
            className="invert dark:invert-0"
          />
        ),
      },
      {
        id: 8,
        name: "Company 8",
        logo: (
          <Image
            src="/flow/kpmg.svg"
            alt="Almazroui Medical Center"
            width={160}
            height={51}
            className="invert dark:invert-0"
          />
        ),
      },
    ],
  },
  featureSection: {
    title: "How Klaim Works",
    description: "Discover how Klaim can get you paid in 24 hours",
    items: [
      {
        id: 1,
        title: "1. Submit your invoice or claim",
        content:
          "Upload your unpaid claims through our secure platform. AI-powered verification processes your documents instantly.",
        image: "/placeholder.svg",
      },
      {
        id: 2,
        title: "2. Get evaluated instantly by AI",
        content:
          "Real-time risk assessment evaluates creditworthiness and determines your advance amount within minutes.",
        image: "/placeholder.svg",
      },
      {
        id: 3,
        title: "3. Receive your payout",
        content:
          "Get up to 90% of your claim value in your bank account within 24 hours. No more waiting months.",
        image: "/placeholder.svg",
      },
      {
        id: 4,
        title: "4. Repay only when the client or payer settles",
        content:
          "When your claim gets paid, we automatically collect our advance plus fee. Completely hassle-free.",
        image: "/placeholder.svg",
      },
    ],
  },
  bentoSection: {
    title: "Why should you choose Klaim?",
    description:
      "Cash flow is oxygen for your business. We make it flow smoothly.",
    items: [
      {
        id: 4,
        content: <FirstBentoAnimation />,
        title: "Easy Qualification",
        description:
          "We have a simple and easy qualification process. You can apply for our service in just a few clicks.",
      },

      {
        id: 2,
        content: <SecondBentoAnimation />,
        title: "Recognized for Impact. Trusted for Innovation",
        description:
          "Explore the milestones that highlight Klaim's leadership in fintech and healthcare transformation.",
      },
      {
        id: 3,
        content: <SparklesDemo />,
        title: "Trusted by institutions that drive innovation",
        description:
          "Klaim is backed by leading institutions through partnerships that strengthen our mission to unlock fast, flexible working capital.",
      },

      {
        id: 1,
        content: <Image src="/fintech-awards.svg" alt="Award-Winning Simplicity" width={300} height={300}  className="dark:invert-0 invert"/>,
        title: "Award-Winning Simplicity",
        description:
          "Klaim was named Best User Experience 2025 for making working capital access simple, fast, and intuitive.",
      },
    ],
  },
  bentoSectionFlow: {
    title: "KlaimFlow Provides",
    description:
      "Fast access to your earned revenue and peace of mind to focus your efforts on running and growing your business.",
    items: [
      {
        id: 4,
        content: <FirstBentoSkeleton />,
        title: "Financial Stability",
        description:
          "Always have funds available for expenses, payroll, and reinvestment.",
      },

      {
        id: 2,
        content: <SecondBentoSkeleton />,
        title: "Predictable Cash Flow",
        description: "Know exactly when you'll get paid.",
      },
      {
        id: 3,
        content: <ThirdBentoSkeleton />,
        title: "Less Time Managing Cash Flow",
        description: "Focus on growth, not chasing payments.",
      },

      {
        id: 1,
        content: <FourthBentoSkeleton />,
        title: "Confidence in Every Decision",
        description:
          "Plan ahead with certainty knowing your revenue is accessible.",
      },
    ],
  },
  benefits: [
    {
      id: 1,
      text: "Save hours each week with AI-optimized scheduling.",
      image: "/Device-6.png",
    },
    {
      id: 2,
      text: "Reduce scheduling conflicts and double-bookings.",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Improve work-life balance with smart time allocation.",
      image: "/Device-8.png",
    },
    {
      id: 4,
      text: "Increase productivity with AI-driven time management insights.",
      image: "/Device-1.png",
    },
  ],
  growthSection: {
    title: "Built for Secure Growth",
    description:
      "Where advanced security meets seamless scalability—designed to protect your data and empower your growth.",
    items: [
      {
        id: 1,
        content: (
          <div
            className="relative flex size-full items-center justify-center overflow-hidden transition-all duration-300 hover:[mask-image:none] hover:[webkit-mask-image:none]"
            style={{
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              maskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          >
            <div className="absolute top-[55%] md:top-[58%] left-[55%] md:left-[57%] -translate-x-1/2 -translate-y-1/2  size-full z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="227"
                height="244"
                viewBox="0 0 227 244"
                fill="none"
                className="size-[90%] md:size-[85%] object-contain fill-background"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M104.06 3.61671C106.656 1.28763 110.017 0 113.5 0C116.983 0 120.344 1.28763 122.94 3.61671C148.459 26.5711 180.325 41.2118 214.322 45.6008C217.66 46.0312 220.736 47.6398 222.999 50.1383C225.262 52.6369 226.563 55.862 226.67 59.2357C227.947 96.7468 218.612 133.854 199.744 166.267C180.877 198.68 153.248 225.074 120.052 242.398C118.028 243.454 115.779 244.003 113.498 244C111.216 243.997 108.969 243.441 106.948 242.379C73.7524 225.055 46.1231 198.661 27.2556 166.248C8.38807 133.835 -0.947042 96.7279 0.329744 59.2168C0.441295 55.8464 1.74484 52.6258 4.00715 50.1311C6.26946 47.6365 9.34293 46.0306 12.6777 45.6008C46.6725 41.2171 78.5389 26.5832 104.06 3.63565V3.61671Z"
                />
              </svg>
            </div>
            <div className="absolute top-[58%] md:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2  size-full z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="245"
                height="282"
                viewBox="0 0 245 282"
                className="size-full object-contain fill-accent"
              >
                <g filter="url(#filter0_dddd_2_33)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M113.664 7.33065C116.025 5.21236 119.082 4.04126 122.25 4.04126C125.418 4.04126 128.475 5.21236 130.836 7.33065C154.045 28.2076 183.028 41.5233 213.948 45.5151C216.984 45.9065 219.781 47.3695 221.839 49.6419C223.897 51.9144 225.081 54.8476 225.178 57.916C226.339 92.0322 217.849 125.781 200.689 155.261C183.529 184.74 158.4 208.746 128.209 224.501C126.368 225.462 124.323 225.962 122.248 225.959C120.173 225.956 118.13 225.45 116.291 224.484C86.0997 208.728 60.971 184.723 43.811 155.244C26.6511 125.764 18.1608 92.015 19.322 57.8988C19.4235 54.8334 20.6091 51.9043 22.6666 49.6354C24.7242 47.3665 27.5195 45.906 30.5524 45.5151C61.4706 41.5281 90.4531 28.2186 113.664 7.34787V7.33065Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dddd_2_33"
                    x="0.217041"
                    y="0.0412598"
                    width="244.066"
                    height="292.917"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="12" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_2_33"
                      result="effect2_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="27" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_dropShadow_2_33"
                      result="effect3_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="48" />
                    <feGaussianBlur stdDeviation="9.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_dropShadow_2_33"
                      result="effect4_dropShadow_2_33"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect4_dropShadow_2_33"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="80"
                viewBox="0 0 81 80"
                className="fill-background"
              >
                <g filter="url(#filter0_iiii_2_34)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5 36V28C20.5 22.6957 22.6071 17.6086 26.3579 13.8579C30.1086 10.1071 35.1957 8 40.5 8C45.8043 8 50.8914 10.1071 54.6421 13.8579C58.3929 17.6086 60.5 22.6957 60.5 28V36C62.6217 36 64.6566 36.8429 66.1569 38.3431C67.6571 39.8434 68.5 41.8783 68.5 44V64C68.5 66.1217 67.6571 68.1566 66.1569 69.6569C64.6566 71.1571 62.6217 72 60.5 72H20.5C18.3783 72 16.3434 71.1571 14.8431 69.6569C13.3429 68.1566 12.5 66.1217 12.5 64V44C12.5 41.8783 13.3429 39.8434 14.8431 38.3431C16.3434 36.8429 18.3783 36 20.5 36ZM52.5 28V36H28.5V28C28.5 24.8174 29.7643 21.7652 32.0147 19.5147C34.2652 17.2643 37.3174 16 40.5 16C43.6826 16 46.7348 17.2643 48.9853 19.5147C51.2357 21.7652 52.5 24.8174 52.5 28Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_iiii_2_34"
                    x="12.5"
                    y="8"
                    width="56"
                    height="70"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_innerShadow_2_34"
                      result="effect2_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_innerShadow_2_34"
                      result="effect3_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_innerShadow_2_34"
                      result="effect4_innerShadow_2_34"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="size-full"
            >
              <FlickeringGrid
                className="size-full"
                gridGap={4}
                squareSize={2}
                maxOpacity={0.5}
              />
            </motion.div>
          </div>
        ),

        title: "Advanced Task Security",
        description:
          "Safeguard your tasks with state-of-art encryption and secure access to your workflow data.",
      },
      {
        id: 2,
        content: (
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_50%)] -translate-y-20">
            <Globe className="top-28" />
          </div>
        ),

        title: "Scalable for Teams",
        description:
          "Grow with your team. Track tasks across multiple workspaces and all team members.",
      },
    ],
  },
  quoteSection: {
    quote:
      "We invoice large corporates, but payment terms are brutal. Klaim Flow gave us the freedom to grow without taking a single loan. It's fast, flexible, and finally built for businesses like ours",
    author: {
      name: "Oussama G.",
      role: "Founder @ Kango Agency",
      image: "/testimonial1.jpeg",
    },
  },
  testimonials: [
    {
      id: "1",
      name: "Michael Becker",
      role: "CEO, DISC",
      img: "/testimonials/testimonial1.jpg",
      description: (
        <p>
          Before Klaim, our reimbursement process was a major bottleneck.
          <Highlight>
            We regularly waited up to 90 days for payments, which made financial
            planning extremely difficult.
          </Highlight>{" "}
          Klaim transformed our cash flow management completely.
        </p>
      ),
    },
    {
      id: "2",
      name: "Mohammad Labban",
      role: "Founder, Regional Retail Chain",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
      description: (
        <p>
          As a retail chain owner, cash flow gaps used to keep me awake at
          night. When suppliers demanded upfront payment and bank approvals
          dragged on for weeks, we risked losing inventory and customer loyalty.
          <Highlight>
            Klaim Flow gave us working capital within 24 hours without adding
            debt to our balance sheet.
          </Highlight>{" "}
          The onboarding was intuitive, and now I can plan seasonal promotions
          confidently knowing funds are accessible when needed.
        </p>
      ),
    },
    {
      id: "3",
      name: "Prasad Buchi",
      role: "Dr. Sulaiman Al Habib Medical Group",
      img: "/testimonials/testimonial2.jpg",
      description: (
        <p>
          <Highlight>
            Klaim Eligible completely transformed how we verify insurance
            eligibility.
          </Highlight>{" "}
          What used to be a slow manual task is now fast, digital, and
          error-free. The efficiency gains are remarkable.
        </p>
      ),
    },
    {
      id: "4",
      name: "David Thompson Reed",
      role: "CEO, Construction Supplies SME",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      description: (
        <p>
          Our business depends on placing bulk orders to secure better pricing
          from suppliers, but slow client payments often held us back.
          <Highlight>
            Klaim Flow unlocked immediate funds against our pending invoices,
            letting us buy in volume and improve margins.
          </Highlight>{" "}
          They truly understand the realities of SMEs – fast, clear, and no
          hidden costs.
        </p>
      ),
    },
    {
      id: "5",
      name: "Dr Zain Akasier",
      role: "Doctor, Al Mazroui Medical Center",
      img: "/testimonials/testimonial3.jpg",
      description: (
        <p>
          When our revenue cycle started to slow down,
          <Highlight>
            Klaim stepped in with a fast and effective solution that got us back
            on track immediately.
          </Highlight>{" "}
          The impact on our practice operations was instant.
        </p>
      ),
    },
    {
      id: "6",
      name: "Huda Saleh Al-Mansouri",
      role: "Owner, Boutique Fitness Studio Chain",
      img: "https://randomuser.me/api/portraits/women/83.jpg",
      description: (
        <p>
          Expanding our fitness studio network was challenging when monthly
          membership collections didn&apos;t align with equipment payments and
          staff salaries. Banks don&apos;t understand our cash flow cycles, but
          Klaim Flow did.
          <Highlight>
            In just 24 hours, we accessed the funds we needed to open our third
            location.
          </Highlight>{" "}
          Their support has empowered us to scale with confidence and stability.
        </p>
      ),
    },
    {
      id: "7",
      name: "Dr George John",
      role: "Doctor, Transform Specialist Medical Center",
      img: "/testimonials/testimonial4.jpg",
      description: (
        <p>
          <Highlight>
            Since working with Klaim, we no longer worry about when payments
            will come in.
          </Highlight>{" "}
          It&apos;s one less stress for our management team and allows us to
          focus on patient care.
        </p>
      ),
    },
    {
      id: "8",
      name: "Praveen S.",
      role: "Managing Director, Automotive Parts Distributor",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      description: (
        <p>
          We supply auto parts to garages across the UAE and KSA, but delayed
          dealer payments strained our ability to import stock.
          <Highlight>
            Klaim Flow&apos;s invoice financing solution helped us maintain
            consistent inventory, avoid supplier penalties, and negotiate better
            deals.
          </Highlight>{" "}
          Their team was proactive, fast, and deeply understood the complexities
          of regional distribution businesses.
        </p>
      ),
    },
    {
      id: "9",
      name: "Abdulrahman Reda",
      role: "CEO, Qamar Al Madina Medical Center",
      img: "/testimonials/testimonial5.jpg",
      description: (
        <p>
          Our claims used to take 90+ days to be paid.
          <Highlight>
            Now with Klaim, we&apos;re receiving money in 24 hours, it&apos;s a
            complete turnaround.
          </Highlight>{" "}
          This has revolutionized our financial operations.
        </p>
      ),
    },
    {
      id: "10",
      name: "Caroline Edwards",
      role: "Co-Founder, Specialty Foods SME",
      img: "https://randomuser.me/api/portraits/women/5.jpg",
      description: (
        <p>
          We import and distribute premium food brands to hotels and
          restaurants. Seasonal demand spikes often created funding gaps that
          banks couldn&apos;t bridge quickly enough.
          <Highlight>
            Klaim Flow provided working capital in under 24 hours, enabling us
            to stock high-demand SKUs and grow our market share without taking
            on debt.
          </Highlight>{" "}
          It felt like having a financial partner who actually roots for our
          success.
        </p>
      ),
    },
    {
      id: "11",
      name: "Hassan Tuqan",
      role: "CEO, Technology & IT Solutions Firm",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
      description: (
        <p>
          Our clients pay on net 60-90 day terms, which made it hard to invest
          in talent and project delivery on time.
          <Highlight>
            With Klaim Flow, we turned pending invoices into immediate working
            capital.
          </Highlight>{" "}
          The onboarding was seamless, their credit decision process clear, and
          funds landed in our account within a day. Now, cash flow is no longer
          a barrier to our growth goals.
        </p>
      ),
    },
  ],
  faqSection: {
    title: "Frequently Asked Questions",
    description: "Answers to common questions about Klaim.",
    faQitems: [
      {
        id: 1,
        question: "What is Klaim?",
        answer:
          "Klaim is a payment acceleration platform that purchases approved receivables from businesses, helping them unlock cash flow tied up in unpaid invoices or claims – without loans, interest, or debt.",
      },
      {
        id: 2,
        question: "How does Klaim work?",
        answer:
          "It’s simple. Once approved, you submit your invoice or claim to Klaim. We purchase it at an agreed value, and you receive payment directly in your account within 24 hours.",
      },
      {
        id: 3,
        question: "Is Klaim a bank or lender?",
        answer:
          "No. Klaim does not provide loans or credit. We operate through a true sale receivables purchase model, meaning we buy your approved receivables outright, giving you immediate cash flow without adding debt to your balance sheet.",
      },
      {
        id: 4,
        question: "What types of receivables does Klaim purchase?",
        answer:
          "Klaim purchases approved receivables from healthcare providers (insurance claims), real estate brokers (commissions), SMEs (invoices), and distributors (supplier invoices) to accelerate their cash flow.",
      },
      {
        id: 5,
        question: "How fast do I get paid?",
        answer:
          "Typically within 24 hours of submitting your approved receivable to Klaim.",
      },
      {
        id: 6,
        question: "Do I need to provide any collateral or personal guarantee?",
        answer:
          "No. Our model is based on purchasing your approved receivables. There is no requirement for collateral or personal guarantees, and there are no hidden fees or interest.",
      },
      {
        id: 7,
        question: "Does using Klaim affect my existing billing or collection process?",
        answer:
          "No. You continue operating as usual. Klaim simply purchases your approved receivables so you can access your funds sooner, without disrupting your operational workflows.",
      },
      {
        id: 8,
        question: "Are there any contracts or lock-in commitments?",
        answer:
          "No. Klaim offers flexible, on-demand solutions with no long-term commitments. You choose when and which receivables to sell.",
      },
      {
        id: 9,
        question: "Is Klaim available across the UAE and KSA?",
        answer:
          "Yes. Klaim currently operates across the UAE and Saudi Arabia and is expanding to support more businesses regionally.",
      },
      {
        id: 10,
        question: "How is Klaim different from traditional financing or factoring?",
        answer:
          "Unlike loans or factoring, Klaim's true sale model means your receivable is sold outright without adding debt, interest, or liability to your business. This keeps your balance sheet clean and your cash flow predictable.",
      },
    ],
  },
  ctaSection: {
    id: "cta",
    title: "You have done the work, now klaim the reward",
    backgroundImage: "/signup_banner.jpg",
    button: {
      text: "Get Paid in 24 Hours",
      href: "#contact",
    },
    subtext: "Cancel anytime, no questions asked",
  },
  footerLinks: [
    {
      title: "Company",
      links: [
        { id: 1, title: "About", url: "#bento" },
        { id: 2, title: "Contact", url: "#contact" },
        { id: 3, title: "How Klaim Works", url: "#features" },
      ],
    },
    {
      title: "Sectors",
      links: [
        { id: 4, title: "Klaim Flow", url: "/flow" },
        { id: 5, title: "Klaim Health", url: "/health" },
        { id: 6, title: "Klaim Estate", url: "/estate" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 7, title: "FAQ", url: "#faq" },
        { id: 8, title: "How it Works", url: "#features" },
        { id: 9, title: "Testimonials", url: "#testimonials" },
      ],
    },
    {
      title: "Legal",
      links: [
        { id: 10, title: "Privacy Policy", url: "/privacy" },
        { id: 11, title: "Terms of Service", url: "/terms" },
        { id: 12, title: "", url: "#" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
