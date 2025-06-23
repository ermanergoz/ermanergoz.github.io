/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#4faf53",
        customDarkGreen: "#096917",
        customDarkBackground: "#202124",
        buttonBackground: "#f6f6f6",
      },
    },
  },
  plugins: [],
};
