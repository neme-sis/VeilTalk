/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '0': "0rem", // Add this line to set spacing 0 to 0rem
      },
    },
  },
  plugins: [],
};
