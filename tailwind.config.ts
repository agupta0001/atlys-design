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
        "primary-background": "#131319",
        "secondary-background": "#27292D",
        "gray-1": "#969696",
        "gray-2": "#6B6C70",
        "gray-3": "#C5C7CA",
        "gray-4": "#7F8084",
        "gray-5": "#35373B",
        "gray-6": "#27292D",
        "gray-7": "#191920",
        "blue-1": "#4A96FF",
      },
    },
  },
  plugins: [],
};
export default config;
