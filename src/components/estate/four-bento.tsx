// Removed unused cn import
import {
  IconStars,
  IconUsers,
  IconTrendingUp,
  IconShield,
} from "@tabler/icons-react";

export function FourBento() {
  const features = [
    {
      title: "Used by top brokers in UAE",
      description:
        "Trusted by leading real estate professionals across the UAE for fast commission advances.",
      icon: <IconStars />,
    },
    {
      title: "Backed by financial partners (Wio, EDB)",
      description:
        "Supported by established financial institutions ensuring security and reliability.",
      icon: <IconUsers />,
    },
    {
      title: "On-demand liquidity + more growth",
      description:
        "Access instant funding to reinvest in your business and accelerate your growth potential.",
      icon: <IconTrendingUp />,
    },
    {
      title: "100% optional use — no contracts",
      description:
        "Complete flexibility with no long-term commitments or binding agreements required.",
      icon: <IconShield />,
    },
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Two rows with asymmetric layout */}
      <div className="space-y-px">
        {/* First row: first item wider than second */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px border border-border overflow-hidden rounded-t-lg">
          <div className="md:col-span-3">
            <Feature {...features[0]} />
          </div>
          <div className="md:col-span-2 border-l border-border">
            <Feature {...features[1]} />
          </div>
        </div>

        {/* Second row: third item tighter than fourth */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px border border-border overflow-hidden rounded-b-lg">
          <div className="md:col-span-2 border-border">
            <Feature {...features[2]} />
          </div>
          <div className="md:col-span-3 border-l border-border">
            <Feature {...features[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col relative group/feature hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 p-8 min-h-[280px]">
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
