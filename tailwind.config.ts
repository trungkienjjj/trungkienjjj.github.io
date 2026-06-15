import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        amber: "rgb(var(--amber) / <alpha-value>)",
        teal: "rgb(var(--teal) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)"
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', "monospace"],
        sans: ['"IBM Plex Sans"', "sans-serif"]
      },
      maxWidth: {
        page: "1240px"
      },
      boxShadow: {
        ledger: "0 24px 70px rgb(0 0 0 / 0.18)",
        focus: "0 0 0 3px rgb(var(--teal) / 0.24)"
      }
    }
  },
  plugins: []
} satisfies Config;
