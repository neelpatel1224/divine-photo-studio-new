export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1A3455",
          dark: "#14273F",
          light: "#2B4D7A",
        },
      },
      fontSize: {
        hero: ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h1: ["2.25rem", { lineHeight: "1.3" }],
        h2: ["1.875rem", { lineHeight: "1.35" }],
        h3: ["1.5rem", { lineHeight: "1.4" }],
        base: ["1rem", { lineHeight: "1.6" }],
      },
      keyframes: {
        scrollUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        scrollDown: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "scroll-up": "scrollUp 30s linear infinite",
        "scroll-down": "scrollDown 30s linear infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
