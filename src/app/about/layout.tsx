import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klaim – Pioneering Swift Claim Conversion in UAE & KSA Healthcare",
  description:
    "Klaim, an award-winning Abu Dhabi fintech, is redefining healthcare in the UAE and KSA, ensuring providers and patients thrive by converting pending insurance claims into working capital within 24 hours.",
};

export default function AboutLayout({
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
