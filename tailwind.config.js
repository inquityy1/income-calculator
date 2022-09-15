/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      // @media (min-width:480px)

      md: "590px",
      // @media (min-width:547px)

      lg: "768px",
      // @media (min-width:768px)

      xl: "1024px",
      // @media (min-width:1024px)

      "2xl": "1680px",
      // @media (min-width:1680px)
    },
    extend: {
      colors: {
        btnbg: "#5783db",
        primary: "#ffffff",
      },
      select: {
        option: "bg-red-200",
      },
    },
  },
  plugins: [],
};
