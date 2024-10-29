/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#64748b",
        lightOrange: "#f1dabf",
        darkGrey: "#1a1f25",
        lightGrey: "#272c35",
      },
    },
  },
  plugins: [],
};
