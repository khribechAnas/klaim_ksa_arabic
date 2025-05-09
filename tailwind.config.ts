import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)"],
                poppins: ["var(--font-poppins)"],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(253, 97%, 60%)",
                    foreground: "hsl(var(--primary-foreground))",
                    50: "#f4f0ff",
                    100: "#ebe0ff",
                    200: "#d9c2ff",
                    300: "#c7a5ff",
                    400: "#b585ff",
                    500: "#a258ff",
                    600: "#8e34ff",
                    700: "#7a1eff",
                    800: "#6700e6",
                    900: "#5200bd",
                },
                secondary: {
                    DEFAULT: "hsl(167, 66%, 55%)",
                    foreground: "hsl(var(--secondary-foreground))",
                    50: "#effef7",
                    100: "#d7f9eb",
                    200: "#b0f1d6",
                    300: "#72e5b9",
                    400: "#43d1a0",
                    500: "#23bc88",
                    600: "#16a77a",
                    700: "#138364",
                    800: "#146853",
                    900: "#135445",
                },
                accent: {
                    DEFAULT: "#14B8A6",
                    foreground: "hsl(var(--accent-foreground))",
                    50: "#F0FDFA",
                    100: "#CCFBF1",
                    200: "#99F6E4",
                    300: "#5EEAD4",
                    400: "#2DD4BF",
                    500: "#14B8A6",
                    600: "#0D9488",
                    700: "#0F766E",
                    800: "#115E59",
                    900: "#134E4A",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                float: "float 6s ease-in-out infinite",
                "float-slow": "float 8s ease-in-out infinite",
                pulse: "pulse 3s ease-in-out infinite",
                shimmer: "shimmer 8s ease-in-out infinite",
                first: "moveVertical 30s ease infinite",
                second: "moveInCircle 20s reverse infinite",
                third: "moveInCircle 40s linear infinite",
                fourth: "moveHorizontal 40s ease infinite",
                fifth: "moveInCircle 20s ease infinite",
                "twinkle": "twinkle 4s ease-in-out infinite",
                "ping-fast": "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                "spin-slow": "spin 15s linear infinite",
                "spin-slow-reverse": "spin 15s linear infinite reverse",
                "flicker": "flicker 3s ease-in-out infinite",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: '0' },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: '0' },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                twinkle: {
                    "0%, 100%": { opacity: '0.2', transform: "scale(0.8)" },
                    "50%": { opacity: '1', transform: "scale(1.2)" },
                },
                flicker: {
                    "0%, 100%": { opacity: '1' },
                    "5%": { opacity: '0.6' },
                    "10%": { opacity: '0.95' },
                    "15%": { opacity: '0.85' },
                    "20%": { opacity: '1' },
                    "25%": { opacity: '0.9' },
                    "30%": { opacity: '1' },
                    "35%": { opacity: '0.7' },
                    "40%": { opacity: '0.95' },
                    "60%": { opacity: '1' },
                    "70%": { opacity: '0.85' },
                    "80%": { opacity: '1' },
                    "85%": { opacity: '0.9' },
                    "90%": { opacity: '1' },
                },
                pulse: {
                    "0%, 100%": { opacity: '1' },
                    "50%": { opacity: '0.5' },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                moveHorizontal: {
                    "0%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                    "50%": {
                        transform: "translateX(50%) translateY(10%)",
                    },
                    "100%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                },
                moveInCircle: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "50%": {
                        transform: "rotate(180deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                moveVertical: {
                    "0%": {
                        transform: "translateY(-50%)",
                    },
                    "50%": {
                        transform: "translateY(50%)",
                    },
                    "100%": {
                        transform: "translateY(-50%)",
                    },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-shine": "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                "grid-white": "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            },
        }
    },
    plugins: [
        require("tailwindcss-animate"),
        require('tailwindcss/plugin')(function({ addUtilities }: { addUtilities: Function }) {
            const newUtilities = {
                '.animation-delay-1000': {
                    'animation-delay': '1000ms',
                },
                '.animation-delay-2000': {
                    'animation-delay': '2000ms',
                },
                '.animation-delay-3000': {
                    'animation-delay': '3000ms',
                },
                '.animation-delay-4000': {
                    'animation-delay': '4000ms',
                },
            };
            addUtilities(newUtilities);
        }),
    ],
}
export default config
