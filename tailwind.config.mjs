/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1e3a8a", 
        secondary: "#dbeafe",
        accent: "#eab308",
      },
      maxWidth: {
        "screen-max": "var(--screen-max)",
      },
      width: {
        'custom': '34rem',
      },
    },
  },
  plugins: [],
};

export default config;
