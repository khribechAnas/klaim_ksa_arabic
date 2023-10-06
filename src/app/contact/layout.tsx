import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klaim – Connect with KLAIM",
  description:
    "Reach out to KLAIM on weekdays from 9 am to 6 pm via phone in the UAE, KSA, and Oman, or email us anytime. Our team, stationed in various strategic locations, is ready to assist you with your healthcare technology solutions and inquiries.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
