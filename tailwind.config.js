/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarybg: 'var(--primary-bg)',
        secondarybg: 'var(--secondary-bg)',
        redfont :'var(--red-font)'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        cursive:["Dancing Script", "cursive"]
      },
    },
  },
  plugins: [],
}