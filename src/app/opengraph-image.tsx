import { ImageResponse } from "next/og";

// Configuration exports
export const runtime = "edge";
export const alt = "Klaim AI";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

/** Base URL for OG image – from env only; never use Host header (SSRF risk). */
function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://klaim.ai";
}

export default async function Image() {
  try {
    const baseUrl = getBaseUrl();

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "black",
          }}
        >
          <img
            src={`${baseUrl}/agent-template-og.png`}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      ),
      { ...size }
    );
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);
    return new Response(`Failed to generate image`, { status: 500 });
  }
}
