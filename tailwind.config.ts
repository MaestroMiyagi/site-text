import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-navy': '#003049',
        'custom-red': '#D62828',
        'custom-orange': '#F77F00',
        'custom-yellow': '#FCBF49',
        'custom-cream': '#EAE2B7',
      },
    },
  },
  plugins: [],
};
export default config;
