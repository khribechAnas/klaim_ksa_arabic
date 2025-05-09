import {cn} from "@/lib/utils";

export const BentoGrid = ({className, children}: {className?: string; children?: React.ReactNode}) => {
  return <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3", className)}>{children}</div>;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl shadow-md transition-all duration-200 ease-in-out hover:-translate-y-1 hover:scale-[1.01]",
        className
      )}>
      <div className="flex flex-col h-full justify-between rounded-xl overflow-hidden">
        <div className="flex-1 group-hover/bento:scale-[1.01] transition-transform duration-300 ease-out">{header}</div>
        <div className="p-4 bg-white dark:bg-gray-900 md:p-6 flex flex-col gap-2 transition-all duration-200 group-hover/bento:bg-white/95 dark:group-hover/bento:bg-gray-800/95">
          <div className="flex items-center gap-2">
            {icon && <div className="transition-transform duration-300 ease-out group-hover/bento:scale-110">{icon}</div>}
            {title && (
              <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white transition-all duration-300 ease-out group-hover/bento:translate-x-1">
                {title}
              </div>
            )}
          </div>
          {description && <div className="text-sm text-gray-500 transition-opacity duration-300 group-hover/bento:opacity-100">{description}</div>}
        </div>
      </div>
    </div>
  );
};
