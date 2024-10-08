import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        md: "2rem",
        lg: "3rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      colors: {
        light: {
          default: "#FAF7F7",
          shadow: "#4C4C4C",
          secondary: "#BFBFBF",
          tertiary: "#8692A6",
          variant: "#F2F2F2",
        },
        dark: {
          default: "#1F2937",
          shadow: "#00000075",
          secondary: "#0F1725",
          tertiary: "#030712",
          variant: "#111827",
          variant2: "#37414F",
        },
        success: {
          default: "#26C25E",
          secondary: "#6EE7B7",
        },
        info: {
          default: "#38BCF6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
