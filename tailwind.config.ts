import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft, monochromatic palette
        canvas: "#FAFAFA", // off-white / very light gray background
        surface: "#FFFFFF", // cards
        charcoal: "#1A1A1A", // primary text
        graphite: "#4B4B4B", // strong secondary text
        muted: "#8A8A8F", // secondary / tertiary text
        line: "#ECECEC", // subtle borders / dividers
        // Single subtle accent — soft sage green
        accent: {
          DEFAULT: "#7C9885",
          soft: "#EAF0EB",
          dark: "#6A8573",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
      },
      maxWidth: {
        prose: "700px",
        content: "1120px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26, 26, 26, 0.04), 0 8px 24px rgba(26, 26, 26, 0.05)",
        lift: "0 12px 32px rgba(26, 26, 26, 0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
