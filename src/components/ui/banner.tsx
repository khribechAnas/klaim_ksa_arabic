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
    sm: "h-[300px]",
    md: "h-[400px]",
    lg: "h-[500px]",
    xl: "h-[600px]",
    "2xl": "h-[700px]",
    "3xl": "h-[800px]",
    "4xl": "h-[900px]",
    "5xl": "h-[1000px]",
  };

  return (
    <section className={`flex flex-col items-center justify-center w-full ${className}`}>
      <div className="w-full">
        <div
          className={`${heightClasses[height]} overflow-hidden shadow-xl w-full border border-border rounded-xl relative z-20`}
        >
          <Image
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-bottom"
            width={2000}
            height={2000}
            quality={100}
            loading="eager"
            priority
          />

        {logo === "estate" && (
          <Image
            src="/klaim-estate.svg"
            alt="Klaim Estate Logo"
            className="absolute top-10 left-16 "
            quality={100}
            width={300}
            height={300}
          />
        )}
        </div>
      </div>
    </section>
  );
} 