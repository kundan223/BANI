/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-b612)', 'monospace'], // Default font
      codystar: ['var(--font-codystar)', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}