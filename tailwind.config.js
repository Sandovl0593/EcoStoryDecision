/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx}", "./index.html"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "cach-l1": "#fffbfc",
        "cach-l2": "#cbb7f7",
        "cach-l3": "#7f6afc",
        "cach-l4": "#2b2c41",
        "cach-l5": "#797979",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss", "postcss-nesting"], // Asegúrate de incluir el plugin de anidamiento aquí
};
