import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1588px",
      },
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        midnight: "#0B0F1A",
        nightshade: "#151B29",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, rgba(11, 15, 26, 0.92), rgba(21, 27, 41, 0.92))",
        "header-bg-image": "url('/assets/svg/header-bg.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
