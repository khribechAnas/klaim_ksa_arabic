import { cn } from "@/lib/utils";
import { IconClock, IconShieldCheck, IconBrain } from "@tabler/icons-react";

export function ThreeBento() {
  const features = [
    {
      title: "Faster Access to Revenue",
      description:
        "Get up to 90% of your claim value within 24 hours. No more waiting months for insurance payments.",
      icon: <IconClock />,
    },
    {
      title: "No Debt, No Collateral",
      description:
        "You get your money without taking on debt or putting up collateral. Performance-based fees only.",
      icon: <IconShieldCheck />,
    },
    {
      title: "AI-Powered Revenue Protection",
      description:
        "Advanced denial prediction technology identifies and prevents claim issues before they impact your revenue.",
      icon: <IconBrain />,
    },
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Single row with 3 items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-border overflow-hidden rounded-lg">
        {features.map((feature, index) => (
          <Feature
            key={feature.title}
            {...feature}
            isLast={index === features.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  isLast,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col relative group/feature hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 p-8 min-h-[280px]",
        !isLast && "border-r border-border"
      )}
    >
      {/* Icon */}
      <div className="mb-6 relative z-10 text-muted-foreground transition-all duration-300 group-hover/feature:text-secondary group-hover/feature:scale-110 text-2xl">
        {icon}
      </div>

      {/* Title */}
      <div className="font-semibold mb-4 relative z-10 text-foreground text-xl">
        <div className="absolute -left-2 inset-y-0 w-1 rounded-full bg-transparent group-hover/feature:bg-secondary transition-all duration-300" />
        <span className="group-hover/feature:translate-x-2 transition-all duration-300 inline-block">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-muted-foreground relative z-10 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};
