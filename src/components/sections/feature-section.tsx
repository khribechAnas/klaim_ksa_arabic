import { SectionHeader } from "@/components/section-header";
import { InvoiceAnimation } from "@/components/ui/invoice-animation";
import { siteConfig } from "@/lib/config";

export function FeatureSection() {
  const { title, description, items } = siteConfig.featureSection;

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
        <InvoiceAnimation
          collapseDelay={5000}
          linePosition="bottom"
          featureItems={items}
          lineColor="bg-secondary"
        />
      </div>
    </section>
  );
}
