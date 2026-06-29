import localFont from "next/font/local";

export const parkinsans = localFont({
  src: [
    {
      path: "../../public/fonts/Parkinsans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Parkinsans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Parkinsans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Parkinsans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Parkinsans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Parkinsans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-parkinsans",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter_24pt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_24pt-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Inter_24pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_24pt-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Inter_24pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_24pt-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Inter_24pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_24pt-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/Inter_24pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_24pt-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

// Arabic Fonts
export const almarai = localFont({
  src: [
    {
      path: "../../public/fonts/Almarai-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Almarai-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Almarai-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-almarai",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const alexandria = localFont({
  src: [
    {
      path: "../../public/fonts/Alexandria-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alexandria-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alexandria-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alexandria-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-alexandria",
  display: "swap",
  fallback: ["system-ui", "arial"],
});
