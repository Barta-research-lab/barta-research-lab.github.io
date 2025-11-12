/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-primary": "#015958",
        "cream-primary" : "#fefcfa",
        "green-dark": '#023535',
        "green-secondary": "#0CABA8"
      },
      fontFamily: {
        koulen: 'Koulen',
        merienda: 'Merienda',
        ruhi: 'Frank Ruhl Libre',
        nunito: 'Nunito Sans',
      }
    }
  },
  plugins: [
    daisyui
  ],
}

