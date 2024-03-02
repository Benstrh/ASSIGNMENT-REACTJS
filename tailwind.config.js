/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      backgroundImage: {
        imagesBg: "url('/src/assets/img/liubov-ilchuk-_6rR_iP06p4-unsplash.jpg')",
      },      
    },
  },
  plugins: [],
};

