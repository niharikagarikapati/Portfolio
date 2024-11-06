/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        marker: ["Permanent Marker", "cursive"], // Use a lowercase key for consistency
        open:["Open Sans", "serif"]
      },
    },
  },
  plugins: [],
};
