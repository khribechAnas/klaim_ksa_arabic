import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klaim Inspector - Elevate Claim Acceptance Rates",
  description:
    "Maximize claim acceptance and safeguard your cash flow with Klaim Inspector, your ally in detecting data-filling errors and ensuring higher acceptance rates by automatically validating diagnoses with provided services",
};

export default function InspectorLayout({
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
