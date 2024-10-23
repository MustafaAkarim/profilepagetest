/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This ensures all JS, TS, JSX, and TSX files in the src folder are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
