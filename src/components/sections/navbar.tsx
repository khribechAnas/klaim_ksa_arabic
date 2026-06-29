"use client";

import { NavMenu } from "@/components/nav-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { TrackedGetStartedButton } from "@/components/ui/tracked-button";
import { BUTTON_LOCATIONS } from "@/hooks/use-posthog-tracking";
import { useMediaQuery } from "@/hooks/use-media-query";
import enTranslations from "@/locales/en.json";
import arTranslations from "@/locales/ar.json";
import { getLocaleFromLang, HEALTH_DEFAULT_LOCALE } from "@/lib/locale";

const INITIAL_WIDTH = "70rem";
const MAX_WIDTH = "800px";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 200,
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.1 },
  },
};

const drawerMenuContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type NavItem = {
  id: number;
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

export function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFlowPage = pathname === "/flow";
  const isHealthPage = pathname === "/health";
  const isEstatePage = pathname === "/estate";
  const locale = getLocaleFromLang(
    searchParams?.get("lang"),
    isHealthPage ? HEALTH_DEFAULT_LOCALE : "en",
  );
  const isRTL = locale === "ar";
  const messages =
    locale === "ar" ? arTranslations.navbar : enTranslations.navbar;
  const isMobile = useMediaQuery("(max-width: 768px)");
  const healthLogoSrc = locale === "ar" ? "/klaimksa.png" : "/klaim-health.png";
  const healthLogoWidth =
    locale === "ar" ? (isMobile ? 70 : 130) : isMobile ? 170 : 250;
  const mobileHealthLogoWidth = locale === "ar" ? 46 : 150;
  const healthQuery = searchParams?.toString();
  const logoHref =
    isHealthPage && healthQuery ? `/health?${healthQuery}` : isHealthPage ? "/health" : "/";
  const flowNavigation: NavItem[] = [
    { id: 1, name: messages.home, href: "#hero" },
    {
      id: 2,
      name: messages.sectors,
      href: "#",
      children: [
        { name: messages.klaimFlow, href: "/flow" },
        { name: messages.klaimEstate, href: "/estate" },
        { name: messages.klaimHealth, href: "/health" },
      ],
    },
    { id: 4, name: messages.howItWorks, href: "#features" },
    { id: 5, name: messages.contact, href: "#contact" },
  ];

  const healthNavigation: NavItem[] = [
    { id: 1, name: messages.home, href: "#hero" },
    { id: 3, name: messages.solutions, href: "#bento" },
    { id: 4, name: messages.faq, href: "#faq" },
    { id: 5, name: messages.contact, href: "#contact" },
  ];

  const estateNavigation: NavItem[] = [
    { id: 1, name: messages.home, href: "#hero" },
    {
      id: 2,
      name: messages.sectors,
      href: "#",
      children: [
        { name: messages.klaimFlow, href: "/flow" },
        { name: messages.klaimEstate, href: "/estate" },
        { name: messages.klaimHealth, href: "/health" },
      ],
    },
    { id: 3, name: messages.solutions, href: "#bento" },
    { id: 4, name: messages.faq, href: "#faq" },
    { id: 5, name: messages.contact, href: "#contact" },
  ];

  const defaultNavigation: NavItem[] = [
    { id: 1, name: messages.home, href: "#hero" },
    {
      id: 2,
      name: messages.sectors,
      href: "#",
      children: [
        { name: messages.klaimFlow, href: "/flow" },
        { name: messages.klaimEstate, href: "/estate" },
        { name: messages.klaimHealth, href: "/health" },
      ],
    },
    { id: 3, name: messages.howItWorks, href: "#features" },
    { id: 4, name: messages.faq, href: "#faq" },
    { id: 5, name: messages.contact, href: "#contact" },
  ];

  const navigationItems = isFlowPage
    ? flowNavigation
    : isHealthPage
      ? healthNavigation
      : isEstatePage
        ? estateNavigation
        : defaultNavigation;

  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {},
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems
        .filter(
          (item) =>
            item.href.startsWith("#") &&
            item.href !== "#sectors" &&
            item.href !== "#",
        )
        .map((item) => item.href.substring(1));

      if (window.scrollY < 100) {
        setActiveSection("hero");
        return;
      }

      let foundActiveSection = false;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            foundActiveSection = true;
            break;
          }
        }
      }

      if (!foundActiveSection && window.scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigationItems]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 10);
    });
    return unsubscribe;
  }, [scrollY]);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const handleOverlayClick = () => setIsDrawerOpen(false);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className={cn(
        "sticky z-50 mx-4 flex justify-center transition-all duration-300 md:mx-0",
        hasScrolled ? "top-6" : "top-4 mx-0",
      )}
    >
      <motion.div
        initial={{ width: INITIAL_WIDTH }}
        animate={{ width: hasScrolled ? MAX_WIDTH : INITIAL_WIDTH }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-2xl transition-all duration-300  xl:px-0",
            hasScrolled
              ? "px-2 border border-border backdrop-blur-lg bg-background/75"
              : "shadow-none px-7",
          )}
        >
          <div className="flex h-[56px] items-center justify-between p-4">
            <Link href={logoHref} className="flex items-center gap-3">
              <Image
                src={
                  isFlowPage
                    ? "/klaimflow.png"
                    : isHealthPage
                      ? healthLogoSrc
                      : isEstatePage
                        ? "/klaim-estate.png"
                        : "/logo-dark.svg"
                }
                alt={
                  isFlowPage
                    ? "KlaimFlow"
                    : isHealthPage
                      ? "Klaim Health"
                      : isEstatePage
                        ? "Klaim Estate"
                        : "Klaim"
                }
                width={
                  isHealthPage
                    ? healthLogoWidth
                    : isFlowPage || isEstatePage
                      ? isMobile
                        ? 170
                        : 250
                      : 130
                }
                height={130}
                quality={100}
                style={{ objectFit: "contain" }}
                className="dark:hidden"
              />
              <Image
                src={
                  isFlowPage
                    ? "/klaimflow.png"
                    : isHealthPage
                      ? healthLogoSrc
                      : isEstatePage
                        ? "/klaim-estate.png"
                        : "/logo-white.svg"
                }
                alt={
                  isFlowPage
                    ? "KlaimFlow"
                    : isHealthPage
                      ? "Klaim Health"
                      : isEstatePage
                        ? "Klaim Estate"
                        : "Klaim"
                }
                width={
                  isHealthPage
                    ? healthLogoWidth
                    : isFlowPage || isEstatePage
                      ? isMobile
                        ? 170
                        : 250
                      : 130
                }
                height={130}
                quality={100}
                style={{ objectFit: "contain" }}
                className={`${
                  isFlowPage || isHealthPage || isEstatePage
                    ? "grayscale invert hidden dark:block"
                    : "block"
                } hidden dark:block`}
              />
            </Link>

            <NavMenu navigationItems={navigationItems} isRTL={isRTL} />

            <div className="flex flex-row items-center gap-1 md:gap-3 shrink-0">
              <div className="flex items-center space-x-6">
                <TrackedGetStartedButton
                  trackingLocation={BUTTON_LOCATIONS.NAVBAR}
                  href={
                    isFlowPage
                      ? "https://flow.klaim.ai"
                      : isHealthPage
                        ? "https://portal.uae.klaim.ai"
                        : isEstatePage
                          ? "https://estate.klaim.ai"
                          : "#contact"
                  }
                  variant="default"
                  target={
                    isHealthPage || isEstatePage || isFlowPage
                      ? "_blank"
                      : undefined
                  }
                  rel={isHealthPage ? "noopener noreferrer" : undefined}
                  className={cn(
                    "bg-secondary h-8 hidden md:flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-fit px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/90",
                    isRTL && "min-w-15",
                  )}
                />
              </div>
              {isHealthPage && <LanguageToggle />}
              <ThemeToggle />
              <button
                className="md:hidden border border-border size-8 rounded-md cursor-pointer flex items-center justify-center"
                onClick={toggleDrawer}
              >
                {isDrawerOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              transition={{ duration: 0.2 }}
              onClick={handleOverlayClick}
            />

            <motion.div
              dir={isRTL ? "rtl" : "ltr"}
              className={cn(
                "fixed inset-x-0 w-[95%] mx-auto bottom-3 bg-background border border-border p-4 rounded-xl shadow-lg",
                isRTL && "text-right",
              )}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
            >
              {/* Mobile menu content */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Link href={logoHref} className="flex items-center gap-3">
                    <Image
                      src={
                        isFlowPage
                          ? "/klaimflow.png"
                          : isHealthPage
                            ? healthLogoSrc
                            : isEstatePage
                              ? "/klaim-estate.png"
                              : "/logo-dark.svg"
                      }
                      alt={
                        isFlowPage
                          ? "KlaimFlow"
                          : isHealthPage
                            ? "Klaim Health"
                            : isEstatePage
                              ? "Klaim Estate"
                              : "Klaim"
                      }
                      width={
                        isFlowPage
                          ? 130
                          : isHealthPage
                            ? mobileHealthLogoWidth
                            : 120
                      }
                      height={120}
                      quality={100}
                      style={{ objectFit: "contain" }}
                      className="dark:hidden"
                    />
                    <Image
                      src={
                        isFlowPage
                          ? "/klaimflow.png"
                          : isHealthPage
                            ? healthLogoSrc
                            : isEstatePage
                              ? "/klaim-estate.png"
                              : "/logo-white.svg"
                      }
                      alt={
                        isFlowPage
                          ? "KlaimFlow"
                          : isHealthPage
                            ? "Klaim Health"
                            : isEstatePage
                              ? "Klaim Estate"
                              : "Klaim"
                      }
                      width={
                        isFlowPage
                          ? 130
                          : isHealthPage
                            ? mobileHealthLogoWidth
                            : 120
                      }
                      height={120}
                      quality={100}
                      style={{ objectFit: "contain" }}
                      className={`hidden dark:block ${
                        isFlowPage || isHealthPage || isEstatePage
                          ? "grayscale invert"
                          : "block"
                      }`}
                    />
                  </Link>
                  <button
                    onClick={toggleDrawer}
                    className="border border-border rounded-md p-1 cursor-pointer"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <motion.ul
                  className={cn(
                    "flex flex-col text-sm mb-4 border border-border rounded-md",
                    isRTL && "text-right",
                  )}
                  variants={drawerMenuContainerVariants}
                >
                  <AnimatePresence>
                    {navigationItems.map((item) => (
                      <motion.li
                        key={item.id}
                        className="border-b border-border last:border-b-0"
                        variants={drawerMenuVariants}
                      >
                        {item.children && item.children.length > 0 ? (
                          // Dropdown item (Sectors)
                          <div>
                            <button
                              onClick={() => toggleExpanded(item.name)}
                              className={`w-full flex items-center justify-between p-2.5 underline-offset-4 hover:text-primary/80 transition-colors ${
                                activeSection === item.href.substring(1)
                                  ? "text-primary font-medium"
                                  : "text-primary/60"
                              }`}
                            >
                              <span>{item.name}</span>
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  expandedItems[item.name] ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {expandedItems[item.name] && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div
                                    className={cn(
                                      "pb-2 space-y-2 border-t border-border/50 pt-2",
                                      isRTL ? "pr-4" : "pl-4",
                                    )}
                                  >
                                    {item.children.map((child) => {
                                      return (
                                        <Link
                                          key={child.name}
                                          href={child.href}
                                          onClick={() => setIsDrawerOpen(false)}
                                          className={cn(
                                            "flex items-center gap-2 p-1.5 text-primary/60 hover:text-primary/80 transition-colors",
                                            isRTL && "justify-end",
                                          )}
                                        >
                                          <span>{child.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          // Regular navigation item
                          <Link
                            href={item.href}
                            onClick={(e) => {
                              // Handle internal navigation for section links
                              if (item.href.startsWith("#")) {
                                e.preventDefault();
                                const element = document.getElementById(
                                  item.href.substring(1),
                                );
                                element?.scrollIntoView({ behavior: "smooth" });
                              }
                              setIsDrawerOpen(false);
                            }}
                            className={`block p-2.5 underline-offset-4 hover:text-primary/80 transition-colors ${
                              activeSection === item.href.substring(1)
                                ? "text-primary font-medium"
                                : "text-primary/60"
                            }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>

                {/* Action buttons */}
                <div className="flex flex-col gap-2">
                  <TrackedGetStartedButton
                    trackingLocation={BUTTON_LOCATIONS.NAVBAR}
                    href={
                      isFlowPage
                        ? "https://flow.klaim.ai"
                        : isHealthPage
                          ? "https://portal.uae.klaim.ai"
                          : isEstatePage
                            ? "https://estate.klaim.ai"
                            : "#contact"
                    }
                    variant="default"
                    target={
                      isHealthPage || isEstatePage || isFlowPage
                        ? "_blank"
                        : undefined
                    }
                    rel={isHealthPage ? "noopener noreferrer" : undefined}
                    className="bg-secondary h-8 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-full px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
