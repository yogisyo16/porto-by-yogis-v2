import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // This is the crucial line
  theme: {
    extend: {
        colors: {
            'base-yogis': 'var(--color-base-yogis)',
            'secondary-yogis': 'var(--color-secondary-yogis)',
            'accent-yogis': 'var(--color-accent-yogis)',
            'neutral-yogis': 'var(--color-neutral-yogis)',
        }
    },
  },
  plugins: [],
};
export default config;