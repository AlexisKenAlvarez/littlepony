/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Lobster'],
        poppins: ['Poppins'],
        modak: ['Modak']
      },
      colors: {
        myPink: '#C353FD',
        myIndigo: '#23386F',
        cream: '#F8F3EA',
        bg: '#FAD4EB',
        tokenPink: '#F9B9ED'
      }
    },
  },
  plugins: [],
}

