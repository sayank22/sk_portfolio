/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      'spin-slow': 'spin 5s linear infinite',
    },
  },
  plugins: [],
}
