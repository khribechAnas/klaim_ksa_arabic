import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klaim Kapital - Swift 24-Hour Claim Payments",
  description:
    "Elevate your healthcare provision with Klaim Kapital, ensuring 24-hour claim payments without loans or financial strain. Start in just 7 days to stabilize cash flow, enhance patient services, and spur scalable growth.",
};

export default function KapitalLayout({
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
