/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxxs': '320px',
      // => @media (min-width: 320px) { ... }

      'xxs': '375px',
      // => @media (min-width: 375px) { ... }

      'xs': '425px',
      // => @media (min-width: 425px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors : {
        main_color : '#161513',
        bright_yellow : '#FFEA00',
        hero_gray : '#4bca91',
        hero_cement : '#757c83',
      },
    },
  },
  plugins: [],
}