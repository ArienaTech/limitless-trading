/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        "void-2": "#0a0a0a",
        surface: "#111111",
        border: "#1f1f1f",
        "border-hi": "#2e2e2e",
        text: "#f0f0f0",
        "text-soft": "#8a8a8a",
        "text-dim": "#4a4a4a",
        gold: "#D4AF37",
        "gold-dim": "#A8872A",
        copper: "#C08020",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
