/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        vsm: "500px",
        xmd: "850px",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, #898989 118.38%)",
      },
    },
  },
  plugins: [],
};
