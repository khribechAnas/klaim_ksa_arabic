"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import {useTheme} from "next-themes";
import {motion, useScroll, useMotionValueEvent} from "motion/react";
import {Sun, Moon, ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const {scrollY} = useScroll();

  // Track scrolling position to update navbar background
  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 10);
  });

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 sm:h-20 flex items-center transition-all duration-300 ${
        hasScrolled ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}>
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-full items-center">
        <nav className="flex justify-between items-center h-full">
          <div className="flex min-w-max items-center">
            <Link href="/" className="flex items-center gap-x-4 text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
              <Image src="/logo.png" alt="KlaimFlow Logo" width={170} height={45} className="object-contain" quality={100} priority />
            </Link>
          </div>
          <div
            className={`
          flex flex-col space-y-10 inset-0 fixed top-0 h-[100dvh] bg-white dark:bg-gray-950 lg:!bg-transparent py-20 px-5 sm:px-10 md:px-14
          transition-all ease-linear duration-300 lg:flex-row lg:flex-1 lg:py-0 lg:px-0 lg:space-y-0 lg:gap-x-10 lg:relative lg:top-0 lg:h-full lg:items-center lg:justify-between lg:w-max
          ${openNavbar ? "visible opacity-100 translate-y-0" : "-translate-y-9 opacity-0 invisible lg:translate-y-0 lg:visible lg:opacity-100"}
        `}>
            <ul className="flex flex-col gap-y-6 text-gray-700 dark:text-gray-300 lg:items-center lg:flex-row lg:gap-x-12 lg:h-full lg:justify-center lg:flex-1">
              <li>
                <Link
                  href="#what-is-klaimflow"
                  className="text-base font-medium transition ease-linear hover:text-primary dark:hover:text-primary-400"
                  onClick={() => setOpenNavbar(false)}>
                  What is KlaimFlow
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-base font-medium transition ease-linear hover:text-primary dark:hover:text-primary-400"
                  onClick={() => setOpenNavbar(false)}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-base font-medium transition ease-linear hover:text-primary dark:hover:text-primary-400"
                  onClick={() => setOpenNavbar(false)}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="w-full flex sm:w-max lg:min-w-max lg:items-center gap-3">
              {mounted && (
                <motion.button
                  whileHover={{scale: 1.1, rotate: 15}}
                  whileTap={{scale: 0.95}}
                  onClick={toggleTheme}
                  className="rounded-full p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all lg:flex hidden"
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>
              )}
              <Link href="#cta" onClick={() => setOpenNavbar(false)}>
                <Button
                  size="sm"
                  className="group text-sm whitespace-nowrap py-5 px-6 bg-primary text-white shadow-md shadow-primary-600/20 hover:shadow-primary-600/40 transition-all">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end relative z-60 lg:hidden">
            {mounted && (
              <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                onClick={toggleTheme}
                className="mr-3 rounded-full p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            )}
            <button
              onClick={() => {
                toggleNavbar();
              }}
              className="p-3 rounded-full bg-primary-600 dark:bg-primary-500 outline-none w-10 sm:w-12 aspect-square flex flex-col relative justify-center items-center">
              <span className="sr-only">toggle navbar</span>
              <span
                className={`
              w-5 sm:w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear
              ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}
            `}
              />
              <span
                className={`
              w-5 sm:w-6 origin-center mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
              ${openNavbar ? "scale-x-0 opacity-0" : ""}
            `}
              />
              <span
                className={`
              w-5 sm:w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
              ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""}
            `}
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
