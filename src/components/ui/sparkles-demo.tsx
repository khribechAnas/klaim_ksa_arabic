"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";

// Logo components for partners
const logos = [
  {
    id: "logo1", // Wide Logo
    component: () => (
      <Image
        src="/partners/dubai-healthcare.png"
        alt="Dubai Healthcare City"
        width={150}
        height={150}
        className="object-contain"
      />
    ),
    className: "w-44", // Bigger for wide logo
  },
  {
    id: "wio",
    component: () => (
      <Image
        src="/partners/wio1.png"
        alt="WIO Bank"
        width={140}
        height={70}
        className="object-contain"
      />
    ),
    className: "w-36", // Standard size
  },
  {
    id: "edb", // Somewhat wide logo
    component: () => (
      <Image
        src="/partners/edb.svg"
        alt="EDB"
        width={150}
        height={75}
        className="object-contain"
      />
    ),
    className: "w-40", // Slightly bigger for somewhat wide logo
  },
  {
    id: "tharawat", // Wide Logo
    component: () => (
      <Image
        src="/partners/tharawat1.png"
        alt="Tharawat"
        width={250}
        height={250}
        className="object-contain"
      />
    ),
    className: "w-44", // Bigger for wide logo
  },
];

export function SparklesDemo() {
  return (
    <div className="h-96 w-full overflow-hidden">
      <div className="mx-auto mt-42 w-full max-w-2xl">
        <div className="relative mt-7 h-[100px] w-full">
          <InfiniteSlider
            className="flex h-full w-full items-center"
            duration={30}
            gap={48}
          >
            {logos.map(({ id, component: Logo, className }) => (
              <div key={id} className={className}>
                <Logo />
              </div>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[100px]"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[100px]"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>

      {/* <div className="relative -mt-16 h-64 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-border bg-background" />
        <Sparkles
          density={800}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color={theme === "dark" ? "#ffffff" : "#000000"}
        />
      </div> */}
    </div>
  );
}
