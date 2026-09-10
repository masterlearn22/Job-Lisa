/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#A82522', // Assuming Wismilak brand color (red)
        'brand-light': '#D63330',
        'brand-dark': '#7A1A18',
        'alpha': '#111827',
      }
    },
  },
  plugins: [],
}
