import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klaim Eligible - Automate and Accelerate Eligibility Checks",
  description:
    "Transform patient check-ins with Klaim Eligible, instantly verifying insurance across 94% of portals. Elevate patient experience and significantly cut down on eligibility-related claim denials, ensuring a smoother and more efficient healthcare provision.",
};

export default function EligibleLayout({
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
