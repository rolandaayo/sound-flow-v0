/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto-condensed": ["var(--font-roboto-condensed)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        goldman: ["var(--font-goldman)", "sans-serif"],
        "sigmar-one": ["var(--font-sigmar-one)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
