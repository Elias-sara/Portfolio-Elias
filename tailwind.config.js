/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all relevant files are scanned
  ],
  mode: "jit", // Enable Just-in-Time mode for faster builds
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        gold: "#FFD700",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "dim-background": "rgba(0, 0, 0, 0.5)",
        "light-blue-500": "#E0F7FA",
        "light-blue-300": "#B2EBF2",
        "dark-blue": "#01579B",
        "blue-300": "#81D4FA",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "inner-card":
          "inset 0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(0, 0, 0, 0.06)",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "light-blue-gradient": "linear-gradient(to right, #e0f7fa, #b9fbc0)",
        "light-pink-gradient": "linear-gradient(to right, #fce4ec, #f8bbd0)",
        "light-green-gradient": "linear-gradient(to right, #e8f5e9, #c8e6c9)",
      },
      scale: {
        125: "1.25",
        150: "1.50",
      },
      transitionProperty: {
        transform: "transform",
        opacity: "opacity",
        "background-color": "background-color",
      },
      transitionDuration: {
        300: "300ms",
        500: "500ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
        "ease-in": "ease-in",
        "ease-out": "ease-out",
      },
      borderRadius: {
        lg: "12px",
        xl: "24px",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      fontSize: {
        xxs: "0.625rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
    },
  },
  plugins: [],
};
