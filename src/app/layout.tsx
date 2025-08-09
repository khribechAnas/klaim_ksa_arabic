import { Navbar } from "@/components/sections/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { parkinsans, inter } from "@/lib/fonts";
import "./globals.css";

import { PostHogProvider } from "@/components/PostHogProvider";

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${parkinsans.variable} ${inter.variable} antialiased font-sans bg-background`}
      >
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="max-w-7xl mx-auto border-x relative">
              <div className="block w-px h-full border-l border-border absolute top-0 left-6 z-10"></div>
              <div className="block w-px h-full border-r border-border absolute top-0 right-6 z-10"></div>
              <Navbar />
              {children}
            </div>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}