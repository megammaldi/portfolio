/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#f1356d",
        secondary: "#0ecf95",
        background: "#FAF9F6",
      },
    },
  },
  plugins: [],
};
