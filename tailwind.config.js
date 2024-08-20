/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        cx: "640px",
      },
      height: {
        100: "100vh",
        a: "90vh",
        b: "80vh",
        50: "50vh",
        c: "10vh",
        d: "5vh",
      },
    },
  },
  plugins: [],
};
