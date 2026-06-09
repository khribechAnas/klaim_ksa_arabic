import { Icons } from "@/components/icons";
import { OrbitingCircles } from "@/components/ui/orbiting-circle";
import { Tooltip } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface IconComponentData {
  type: "icon";
  component: keyof typeof Icons;
  name: string;
  url: string;
}

interface ImageData {
  type: "image";
  src: string;
  alt: string;
  width?: number;
  height?: number;
  name: string;
  url: string;
  background?: boolean;
  backgroundColor?: string;
  rounded?: boolean;
  invert?: boolean;
}

type IconData = IconComponentData | ImageData;

const iconData: IconData[] = [
  // First orbit (2 icons)
  {
    type: "image",
    src: "/awards/logo8.png",
    alt: "Future 100",
    background: false,
    rounded: true,
    width: 122,
    height: 122,
    name: "Future 100",
    url: "https://future100.ae/en/future-100-list?year=2024&sector=138&winningCategory=",
  },
  {
    type: "image",
    src: "/awards/logo7.png",
    alt: "E Business Awards",
    background: true,
    backgroundColor: "black",
    width: 122,
    height: 122,
    name: "E Business Awards",
    url: "https://www.entrepreneur.com/en-ae/news-and-trends/the-recap-the-e-business-awards-2021/368227",
  },
  // Second orbit (3 icons)
  {
    type: "image",
    src: "/awards/logo2.png",
    alt: "Global Business Outlook",
    background: true,
    backgroundColor: "black",
    width: 122,
    height: 122,
    name: "Global Business Outlook",
    url: "https://globalbusinessoutlook.com/award-winners-2021-insurance/",
  },
  {
    type: "image",
    src: "/awards/logo3.png",
    alt: "BII World",
    background: true,
    backgroundColor: "black",
    width: 122,
    height: 122,
    name: "BII World",
    url: "https://varri.com/insights/winners-of-the-tech-innovation-awards-2022-revealed#:~:text=KLAIM%20Named%20Healthcare%20FinTech%20of%20the%20Year&text=KLAIM%20is%20%E2%80%9Ca%20firm%20that,the%20MC%20presenting%20the%20award.",
  },
  {
    type: "image",
    src: "/awards/logo5.png",
    alt: "Gulf Capital",
    background: true,
    backgroundColor: "white",
    width: 122,
    height: 122,
    name: "Gulf Capital",
    url: "https://www.gulfcapital.com/2021/11/gulf-capital-sme-awards-2021-winners-announced",
  },
  // Third orbit (3 icons)
  {
    type: "image",
    src: "/awards/logo4.png",
    alt: "Mina Insurtech Competition",
    invert: true,
    background: false,
    width: 122,
    height: 122,
    name: "Mina Insurtech Competition",
    url: "https://insurtech-mena.com/competition/",
  },
  {
    type: "image",
    src: "/awards/logo6.png",
    invert: true,
    alt: "KPMG",
    width: 122,
    height: 122,
    name: "KPMG",
    url: "https://www.cbnme.com/news/klaim-wins-uae-round-in-kpmg-private-enterprise-tech-innovator-2021-competition/",
  },
  {
    type: "image",
    src: "/awards/logo1.png",
    invert: true,
    alt: "Entrepreneur",
    width: 160,
    height: 51,
    name: "Entrepreneur",
    url: "https://www.entrepreneur.com/en-ae/business-news/the-recap-leaders-in-fintech-awards-2022/435462",
  },
];

interface OrbitConfig {
  icons: IconData[];
  index: number;
  iconSize: number;
  radius?: number;
  reverse?: boolean;
  speed: number;
}

const orbitConfigs: OrbitConfig[] = [
  {
    icons: iconData.slice(0, 2), // First orbit - 2 icons
    index: 0,
    iconSize: 60,
    radius: 100,
    reverse: true,
    speed: 1,
  },
  {
    icons: iconData.slice(2, 5), // Second orbit - 3 icons
    index: 1,
    iconSize: 60,
    speed: 1,
  },
  {
    icons: iconData.slice(5, 8), // Third orbit - 3 icons
    index: 2,
    iconSize: 100,
    radius: 230,
    reverse: true,
    speed: 1.2,
  },
];

function IconWithTooltipAndLink({
  iconData,
  isThirdOrbit = false,
}: {
  iconData: IconData;
  isThirdOrbit?: boolean;
}) {
  const renderIcon = () => {
    if (iconData.type === "icon") {
      const IconComponent = Icons[iconData.component];
      return <IconComponent />;
    } else {
      if (isThirdOrbit) {
        // Third orbit - flexible sizing for wide logos
        return (
          <div
            className={cn(
              "flex items-center justify-center",
              iconData.background && "rounded-full p-2",
              iconData.backgroundColor === "black" && "bg-black",
              iconData.backgroundColor === "white" && "bg-white",
            )}
          >
            <Image
              src={iconData.src}
              alt={iconData.alt}
              width={iconData.width || 40}
              height={iconData.height || 40}
              className={cn(
                "object-contain max-w-full max-h-full",
                iconData.invert && "invert dark:invert-0",
              )}
            />
          </div>
        );
      } else {
        // First and second orbits - perfect squares with full circles
        return (
          <div
            className={cn(
              "w-12 h-12 flex items-center justify-center rounded-full p-1", // Reduced from w-16 h-16
              iconData.backgroundColor === "black" && "bg-black",
              iconData.backgroundColor === "white" && "bg-white",
              iconData.rounded && "rounded-full p-0",
              !iconData.background && "bg-transparent", // Default to white background if none specified
            )}
          >
            <Image
              src={iconData.src}
              alt={iconData.alt}
              width={100} // Reduced from 48
              height={100} // Reduced from 48
              className={cn(
                "object-contain w-full h-full",
                iconData.rounded && "rounded-full",
              )}
            />
          </div>
        );
      }
    }
  };

  return (
    <Tooltip content={iconData.name} side="top">
      <Link
        href={iconData.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform duration-200 ease-out hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-lg"
      >
        {renderIcon()}
      </Link>
    </Tooltip>
  );
}

export function SecondBentoAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-white p-2 rounded-full z-30 md:bottom-0 md:top-auto">
        <Icons.logo className="size-10" />
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full items-center justify-center translate-y-0 md:translate-y-32">
          {orbitConfigs.map((config) => (
            <OrbitingCircles
              key={config.index}
              index={config.index}
              iconSize={config.iconSize}
              radius={config.radius}
              reverse={config.reverse}
              speed={config.speed}
            >
              {config.icons.map((iconData, iconIndex) => (
                <IconWithTooltipAndLink
                  key={`${config.index}-${iconIndex}`}
                  iconData={iconData}
                  isThirdOrbit={config.index === 2}
                />
              ))}
            </OrbitingCircles>
          ))}
        </div>
      </div>
    </div>
  );
}
