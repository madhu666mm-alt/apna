/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./context/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: { DEFAULT: "#E8420A", 50: "#FFF2EE", 100: "#FFE0D5", 600: "#C23008" },
        gold:    { DEFAULT: "#F5A623", 50: "#FFFBEE", 100: "#FFF3CC" },
        cream:   { DEFAULT: "#FEFCF7", dark: "#FFF8EE" },
        ink:     "#0F0A00",
      },
      fontFamily: {
        sans:  ["var(--font-jakarta)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        mono:  ["'IBM Plex Mono'", "monospace"],
      },
      animation: {
        "fade-up":   "fadeUp 0.5s ease both",
        "pulse-dot": "pulseDot 1.5s ease infinite",
      },
      keyframes: {
        fadeUp:   { from: { opacity: 0, transform: "translateY(20px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        pulseDot: { "0%,100%": { opacity: 1, transform: "scale(1)" }, "50%": { opacity: 0.4, transform: "scale(0.7)" } },
      },
    },
  },
  plugins: [],
};
