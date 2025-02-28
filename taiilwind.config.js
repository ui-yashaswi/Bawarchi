/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust paths based on your project
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          quattrocento: ["Quattrocento", "serif"],
        },
      },
    },
    plugins: [],
  };
  