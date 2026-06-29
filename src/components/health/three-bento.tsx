import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { IconClock, IconShieldCheck, IconBrain } from "@tabler/icons-react";

type ValueFeature = {
  title: string;
  description: string;
};

export function ThreeBento() {
  const t = useTranslations("health");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const icons = [<IconClock key="clock" />, <IconShieldCheck key="shield" />, <IconBrain key="brain" />];
  const features = (t.raw("valueFeatures") as ValueFeature[]).map(
    (feature, index) => ({
      ...feature,
      icon: icons[index] ?? <IconShieldCheck />,
    }),
  );

  return (
    <div className="relative z-10 max-w-7xl mx-auto">
      <div
        className={cn(
          "grid grid-cols-1 gap-px border border-border overflow-hidden rounded-lg",
          features.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3",
        )}
      >
        {features.map((feature, index) => (
          <Feature
            key={feature.title}
            {...feature}
            isLast={index === features.length - 1}
            isRtl={isRtl}
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
  isRtl,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast: boolean;
  isRtl: boolean;
}) => {
  return (
    <div
      className={cn(
    "flex flex-col items-center text-center relative group/feature hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 p-8 min-h-[280px]",
        !isLast && "border-r border-border",
      )}
    >
      {/* Icon */}
      <div className="mb-6 relative z-10 text-muted-foreground transition-all duration-300 group-hover/feature:text-secondary group-hover/feature:scale-110 text-2xl">
        {icon}
      </div>

      {/* Title */}
      <div className="font-semibold mb-4 relative z-10 text-foreground text-xl">
        <div
          className={cn(
            "absolute inset-y-0 w-1 rounded-full bg-transparent group-hover/feature:bg-secondary transition-all duration-300",
            isRtl ? "-right-2" : "-left-2",
          )}
        />
        <span className="transition-all duration-300 inline-block group-hover/feature:scale-[1.02]">
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
