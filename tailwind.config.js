/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#101010',
        'secondary': '262A41',
        'ternary': '#F9FAFC',
        'white': '#FFFFFF',
        'offblue': '#157AFF',
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      fontSize: {
        'h1': '40px',
        'h2': '30px',
        'h3': '25px',
        'h4': '20px',
        'h5': '18px',
        'h6': '16px',
        'h7': '14px',
        'h8': '13px',
        'h9': '12px',
      }
    },
  },
  plugins: [],
}
