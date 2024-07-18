/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbg: '#121212',
        highlighted: '#ffffff',
        unhighlight: '#b3b3b3',
        btn: '#232323'
      },
      fontFamily: {
        body: ['Asap']
      }
    },
  },
  plugins: [],
}

