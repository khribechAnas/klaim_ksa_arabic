import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';
import {
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHelp,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const t = useTranslations('health');
  const features = [
    {
      title: t('features.0.title'),
      description: t('features.0.description'),
      icon: <IconCurrencyDollar />,
    },

    {
      title: t('features.1.title'),
      description: t('features.1.description'),
      icon: <IconCloud />,
    },
    {
      title: t('features.2.title'),
      description: t('features.2.description'),
      icon: <IconHelp />,
    },
    {
      title: t('features.3.title'),
      description: t('features.3.description'),
      icon: <IconTerminal2 />,
    },
    {
      title: t('features.4.title'),
      description: t('features.4.description'),
      icon: <IconEaseInOut />,
    },
  ];

  return (
    <div className="relative z-10  max-w-7xl mx-auto">
      {/* Top 3 items */}
      <div className="grid grid-cols-1 border-b border-border md:grid-cols-3 gap-px   overflow-hidden mb-px">
        {features.slice(0, 3).map((feature) => (
          <Feature key={feature.title} {...feature} isTopRow={true} />
        ))}
      </div>

      {/* Bottom 2 items (larger) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px  overflow-hidden">
        {features.slice(3, 5).map((feature) => (
          <Feature key={feature.title} {...feature} isTopRow={false} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  isTopRow,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  isTopRow: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col relative group/feature border-r  hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300",
        isTopRow ? "p-8 min-h-[280px]" : "p-12 min-h-[320px]"
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "mb-6 relative z-10 text-muted-foreground transition-all duration-300 group-hover/feature:text-secondary group-hover/feature:scale-110",
          isTopRow ? "text-2xl" : "text-3xl"
        )}
      >
        {icon}
      </div>

      {/* Title */}
      <div
        className={cn(
          "font-semibold mb-4 relative z-10 text-foreground",
          isTopRow ? "text-xl" : "text-2xl"
        )}
      >
        <div className="absolute -left-2 inset-y-0 w-1 rounded-full bg-transparent group-hover/feature:bg-secondary transition-all duration-300" />
        <span className="group-hover/feature:translate-x-2 transition-all duration-300 inline-block">
          {title}
        </span>
      </div>

      {/* Description */}
      <p
        className={cn(
          "text-muted-foreground relative z-10 leading-relaxed",
          isTopRow ? "text-sm" : "text-base"
        )}
      >
        {description}
      </p>
    </div>
  );
};
