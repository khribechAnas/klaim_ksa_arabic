import { Suspense } from "react";
import { Navbar } from "@/components/sections/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { alexandria, almarai, inter, parkinsans } from "@/lib/fonts";
import "./globals.css";

import { PostHogProvider } from "@/components/PostHogProvider";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const isArabic = locale === "ar";

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-KWKV399D";
  const ga4MeasurementId =
    process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-ZDR00YYTN0";

  return (
    <html
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${parkinsans.variable} ${inter.variable} ${almarai.variable} ${alexandria.variable} ${isArabic ? "arabic-fonts" : ""}`}
      suppressHydrationWarning
    >
      <body
        className={`${isArabic ? `${alexandria.className} [--font-sans:var(--font-alexandria)] [--font-inter:var(--font-alexandria)]` : parkinsans.className} antialiased font-sans bg-background`}
      >
        <PostHogProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="max-w-7xl mx-auto border-x relative">
                <div className="block w-px h-full border-l border-border absolute top-0 left-6 z-10"></div>
                <div className="block w-px h-full border-r border-border absolute top-0 right-6 z-10"></div>

                <Suspense fallback={null}>
                  <Navbar />
                </Suspense>

                {children}
              </div>
            </ThemeProvider>
          </NextIntlClientProvider>
        </PostHogProvider>

        <GoogleTagManager gtmId={gtmId} />
        <GoogleAnalytics gaId={ga4MeasurementId} />
      </body>
    </html>
  );
}
