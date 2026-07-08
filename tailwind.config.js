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
        void: "#ffffff",
        "void-2": "#f7f5f1",
        surface: "#faf8f4",
        border: "#e8e3d9",
        "border-hi": "#d5cdbe",
        text: "#221f19",
        "text-soft": "#6d675c",
        "text-dim": "#a39c8e",
        gold: "#9A7B2E",
        "gold-dim": "#7A5F22",
        copper: "#8C6018",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
