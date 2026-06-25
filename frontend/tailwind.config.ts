import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jungle: {
          950: "#071408",
          900: "#0a1f0a",
          800: "#142e1a",
          700: "#1a3a2a",
          600: "#2d5a3d",
          500: "#4a7c59",
          400: "#6b9b78",
        },
        lagoon: {
          600: "#2d6a7a",
          500: "#4a90a4",
          400: "#6eb5d0",
          300: "#9dd4e8",
        },
        fern: {
          100: "#e8f0e8",
          200: "#c5d4c5",
          300: "#a3b8a3",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "jungle-gradient":
          "radial-gradient(ellipse at 20% 0%, rgba(110, 181, 208, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(45, 90, 61, 0.3) 0%, transparent 50%), linear-gradient(180deg, #071408 0%, #0a1f0a 40%, #142e1a 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
