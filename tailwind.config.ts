import type { Config } from "tailwindcss";
// tailwind.config.js


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
      },
    },
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config;
