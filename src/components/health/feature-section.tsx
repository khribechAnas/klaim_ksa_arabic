import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";
import { HowItWorks } from "./how-it-works";

export function FeatureSection() {
  const { title, description } = siteConfig.featureSection;

  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center gap-5 w-full relative"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          {title}
        </h2>
        <p className="text-muted-foreground font-inter text-center text-balance font-medium">
          {description}
        </p>
      </SectionHeader>
      <div className="w-full h-full lg:h-[450px] flex items-center justify-center">
        <HowItWorks />
      </div>
    </section>
  );
}
