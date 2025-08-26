// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        brand: {
          50: '#fef7f7',
          100: '#fdeeee',
          200: '#fbdcdc',
          300: '#f7c2c2',
          400: '#f19a9a',
          500: '#e86b6b',
          600: '#d94a4a',
          700: '#b73a3a',
          800: '#963232',
          900: '#7a2f2f',
        },
        wedding: {
          cream: '#fefcf8',
          gold: '#d4af37',
          rose: '#e8b4b8',
          sage: '#9caf88',
        }
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
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "scroll-up": "scrollUp 20s linear infinite",
        "scroll-down": "scrollDown 20s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
