/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-fade":
          "linear-gradient(, rgb(244, 244, 244), rgba(244, 244, 244, 0) 100%)",
      },
    },
  },
  plugins: [],
};
