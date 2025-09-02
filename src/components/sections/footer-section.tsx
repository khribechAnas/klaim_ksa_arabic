"use client";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useMediaQuery } from "@/hooks/use-media-query";
import { siteConfig } from "@/lib/config";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "../icons";
import { SendHorizonal, Loader2 } from "lucide-react";
import { useState } from "react";
import { submitNewsletterLead } from "@/lib/api";
export function FooterSection() {
  const tablet = useMediaQuery("(max-width: 1024px)");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Please enter your email address.' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const result = await submitNewsletterLead(email);
      
      if (result.success) {
        setMessage({ type: 'success', text: 'Thank you for subscribing to our newsletter!' });
        setEmail("");
      } else {
        setMessage({ type: 'error', text: result.message });
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to subscribe. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between p-10">
        <div className="flex flex-col items-start justify-start gap-y-5 max-w-xs mx-0">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-dark.svg"
              alt="Klaim"
              width={130}
              height={130}
              quality={100}
              className="dark:hidden"
            />
            <Image
              src="/logo-white.svg"
              alt="Klaim"
              width={130}
              height={130}
              quality={100}
              className="hidden dark:block"
            />
          </Link>
          <p className="tracking-tight text-muted-foreground font-medium">
            {/* {siteConfig.hero.description} */}
            Join 200+ business growing with Klaim
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200 flex items-center justify-center group"
            >
              <Icons.youtube className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200 flex items-center justify-center group"
            >
              <Icons.linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200 flex items-center justify-center group"
            >
              <Icons.instagram className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200 flex items-center justify-center group"
            >
              <Icons.facebook className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          </div>

          <div className="w-full mt-2">
            <p className="text-sm font-semibold text-primary mb-2">
              Subscribe to our newsletter
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={isSubmitting}
                className="w-full px-3 py-2 text-sm border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-background text-foreground placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <SendHorizonal className="h-4 w-4" />
                )}
              </button>
            </form>
            {message && (
              <p className={`text-xs mt-2 ${
                message.type === 'success' 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-red-600 dark:text-red-400'
              }`}>
                {message.text}
              </p>
            )}
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-y-5">
          <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between gap-y-5">
            {siteConfig.footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-y-2">
                <li className="mb-2 text-sm text-secondary font-semibold">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground"
                  >
                    <Link href={link.url}>{link.title}</Link>
                    <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                      <ChevronRightIcon className="h-4 w-4 " />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-48 md:h-64 relative mt-24 z-0 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text={tablet ? "Klaim" : "Get Paid in 24 Hours"}
            fontSize={tablet ? 70 : 120}
            className="h-full w-full"
            squareSize={1.5}
            gridGap={tablet ? 2 : 3}
            color="#6B7280"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  );
}
