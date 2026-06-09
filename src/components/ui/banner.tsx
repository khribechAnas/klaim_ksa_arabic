import Image from "next/image";

interface BannerProps {
  src: string;
  alt?: string;
  className?: string;
  height?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  logo?: "flow" | "estate" | "auto";
}

export function Banner({
  src,
  alt = "Banner Background",
  className = "",
  height = "md",
  logo = "flow",
}: BannerProps) {
  const heightClasses = {
    sm: "h-[240px] md:h-[300px]",
    md: "h-[300px] md:h-[400px]",
    lg: "h-[360px] md:h-[500px]",
    xl: "h-[420px] md:h-[600px]",
    "2xl": "h-[480px] md:h-[700px]",
    "3xl": "h-[540px] md:h-[800px]",
    "4xl": "h-[600px] md:h-[900px]",
    "5xl": "h-[660px] md:h-[1000px]",
  } as const;

  return (
    <section
      className={`flex-col items-center justify-center w-full md:flex hidden ${className}`}
    >
      <div className="w-full">
        <div
          className={`${heightClasses[height]} overflow-hidden shadow-xl w-full border border-border rounded-lg md:rounded-xl relative z-20`}
        >
          <Image
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-center md:object-bottom"
            width={2000}
            height={2000}
            quality={100}
            loading="eager"
            priority
            sizes="100vw"
          />

          {logo === "estate" && (
            <Image
              src="/klaim-estate.svg"
              alt="Klaim Estate Logo"
              className="absolute top-4 md:top-10 left-1/2 md:left-16 -translate-x-1/2 md:translate-x-0 w-40 md:w-[300px]"
              quality={100}
              width={300}
              height={300}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
