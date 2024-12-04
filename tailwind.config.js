/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ["index.html", "src/input.css", "src/index.jsx", "src/components/randomColor.jsx", "src/App.jsx", "src/components/navbar.jsx", "src/main.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [daisyui,],
  
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

