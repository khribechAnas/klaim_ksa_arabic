import type React from "react";
import type {Metadata} from "next";
import {Inter, Poppins} from "next/font/google";
import {cn} from "@/lib/utils";
import {Providers} from "@/components/providers";
import Navbar from "@/components/navbar";
import "@/app/globals.css";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "KlaimFlow - Turn Receivables into Instant Cash",
  description: "KlaimFlow's receivables financing solution turns your due invoices into instant cash within 24 hours.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, poppins.variable)}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
