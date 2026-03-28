/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#2f7d32",
        customDarkGreen: "#00490a",
        customDarkBackground: "#202124",
        buttonBackground: "#f6f6f6",
        bodyDark: "#323235",
        textSecondary: "#374151",
        textSecondaryDark: "#d1d5db",
        buttonBackgroundDark: "#3a3a3d",
        buttonHover: "#6b6b72",
        buttonHoverDark: "#4a4a4f",
      },
    },
  },
  plugins: [],
};
