/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#090d16",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(99, 102, 241, 0.35), 0 0 24px rgba(99, 102, 241, 0.35)",
        "glow-cyan": "0 0 0 1px rgba(6, 182, 212, 0.35), 0 0 24px rgba(6, 182, 212, 0.35)",
        "glow-emerald": "0 0 0 1px rgba(16, 185, 129, 0.35), 0 0 24px rgba(16, 185, 129, 0.35)",
      },
      keyframes: {
        "pulse-led": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(1.6)" },
        },
      },
      animation: {
        "pulse-led": "pulse-led 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
