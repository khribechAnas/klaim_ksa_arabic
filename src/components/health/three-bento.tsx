import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';
import { IconClock, IconShieldCheck, IconBrain } from "@tabler/icons-react";

export function ThreeBento() {
  const t = useTranslations('health');
  const features = [
    {
      title: t('valueFeatures.0.title'),
      description: t('valueFeatures.0.description'),
      icon: <IconClock />,
    },
    {
      title: t('valueFeatures.1.title'),
      description: t('valueFeatures.1.description'),
      icon: <IconShieldCheck />,
    },
    {
      title: t('valueFeatures.2.title'),
      description: t('valueFeatures.2.description'),
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
