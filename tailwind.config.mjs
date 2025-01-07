const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      maxWidth: {
        "screen-max": "var(--screen-max)",
      },
      width: {
        custom: "34rem",
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
      screens: {
        xs: "315px",
      },
    },
  },
  plugins: [],
};
