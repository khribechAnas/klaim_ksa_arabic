import { cn } from "@/lib/utils";
import { IconClock, IconUsers, IconAlertTriangle } from "@tabler/icons-react";

export function ThreeBento() {
  const features = [
    {
      title: "60-120 day delays from developers",
      description:
        "Standard industry payment terms for commissions are lengthy—and often subject to additional delays.",
      icon: <IconClock />,
    },
    {
      title: "Agents spend more time chasing than closing",
      description:
        "Valuable time is wasted following up on delayed payments instead of focusing on new opportunities.",
      icon: <IconUsers />,
    },
    {
      title: "Loans and advances create risk and stress",
      description:
        "Financial pressure from loans and advances while waiting for commissions creates unnecessary burden.",
      icon: <IconAlertTriangle />,
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
