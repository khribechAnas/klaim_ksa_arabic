"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {Facebook, Linkedin, Instagram, Mail, Phone, MapPin, ChevronDown} from "lucide-react";
import {useState} from "react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  const footerLinks = [
    {
      title: "Company",
      links: [
        {label: "What is KlaimFlow", href: "#what-is-klaimflow"},
        {label: "What KlaimFlow Provides", href: "#what-klaimflow-provides"},
        {label: "About Us", href: "#about-us"},
        {label: "Contact", href: "#contact"},
        // These sections will be added later
        // {label: "Features", href: "#features"},
      ],
    },
    {
      title: "Resources",
      links: [
        {label: "FAQ", href: "#faq"},
        // {label: "Peace of Mind", href: "#bento"},
        {label: "Pre-qualification", href: "#pre-qualification"},
        {label: "Get Started", href: "#cta"},
        // These sections will be added later
        // {label: "Testimonials", href: "#testimonials"},
        // {label: "Pricing Calculator", href: "#pricing-calculator"},
        // {label: "What to Expect", href: "#what-to-expect"},
      ],
    },
    {
      title: "Legal",
      links: [
        {label: "Terms of Service", href: "https://klaim.ai/privacy-policy"},
        {label: "Privacy Policy", href: "https://klaim.ai/privacy-policy"},
      ],
    },
  ];

  const socialLinks = [
    {icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/klaim-ai/", label: "LinkedIn"},
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 sm:py-12">
        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and contact info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image 
                src="/logo.png" 
                alt="KlaimFlow Logo" 
                width={170} 
                height={45} 
                className="object-contain"
                quality={100}
              />
            </Link>

            <p className="text-gray-600 dark:text-gray-300 mb-5 max-w-xs">
              Empowering businesses across the UAE, KSA, and Oman.
            </p>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary dark:text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">hello@klaim.ai</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary dark:text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">+971 4 876 4096</span>
            </div>
            </div>
          </div>

          {/* Links for desktop */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile layout with accordion */}
        <div className="md:hidden space-y-4">
          <Link href="/" className="inline-block mb-4">
            <Image 
              src="/logo.png" 
              alt="KlaimFlow Logo" 
              width={150} 
              height={40} 
              className="object-contain"
              quality={100}
            />
          </Link>

          {footerLinks.map((column, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-3">
              <button
                onClick={() => toggleSection(column.title)}
                className="flex justify-between items-center w-full py-2 text-left font-semibold text-gray-900 dark:text-white">
                {column.title}
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${
                    openSection === column.title ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openSection === column.title && (
                <ul className="mt-2 space-y-2 pl-1">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors block py-1">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Contact info for mobile */}
          <div className="pt-4 space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary dark:text-primary-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-gray-300">Dubai Media City, Dubai, UAE</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary dark:text-primary-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-gray-300">info@klaim.ai</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary dark:text-primary-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-gray-300">+971 4 123 4567</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center sm:text-left mb-4 sm:mb-0">
            © {currentYear} KlaimFlow. All rights reserved.
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors"
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
                aria-label={social.label}>
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
