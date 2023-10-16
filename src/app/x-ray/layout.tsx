import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klaim X-Ray – Real-Time Healthcare Reporting Tool in the UAE & KSA",
  description:
    "Introducing Klaim X-Ray: your key to making confident, data-driven decisions in healthcare. Replace slow, unreliable manual reporting with up-to-the-minute, comprehensive real-time reporting, enhancing operational clarity and driving informed, strategic growth.",
};

export default function XRayLayout({
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
