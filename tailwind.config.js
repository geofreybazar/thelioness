/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      tiny:'0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'md2': '426px',
      'md3': '471px',
      'lg': '1024px',
      'lg2': '1149px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {  
      fontFamily: {
      // Add custom fonts
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },    
      colors: {
        'purple':"#4B0082",
        'off-white': '#f7f7f7',
        'gold': '#FFD700',
        'pink': '#f2e9e1',
        'mocha': '#676767',
        'main': '#FCFA22',
      },
      height: {
        '500': '500px',
        '800': '800px',
        '300': '300px',
        '864': '864px',
        '640': '640px',
        '645': '645px',
        '1128': '1128px',
        '904': '904px'
      },
      width: {
        '300': '300px',
        '350': '350px',
        '200': '200px',
        '250': '250px',
        '280': '280px',
        '400': '400px',
        '500': '500px',
        '700': '900px',
        '1300': '1300px',
      },
      backgroundImage: {
        'backgroundImg': "url('./src/assets/background.png')",
      }
    },
  },
  plugins: [],
}

