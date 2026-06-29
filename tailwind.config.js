/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        "void-2": "#0a0a0a",
        surface: "#111111",
        border: "#1f1f1f",
        "border-hi": "#2e2e2e",
        text: "#f0f0f0",
        "text-soft": "#555555",
        "text-dim": "#333333",
        acid: "#aaff00",
        "acid-dim": "#6a9e00",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
