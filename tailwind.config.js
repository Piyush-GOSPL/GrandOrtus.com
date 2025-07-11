/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '4k': '2560px',
      },
    },
  },
  safelist: [
    'group-hover:block',
    'group-hover:flex',
    'hover:bg-[#0090d2]',
    'hover:text-white',
  ],
  plugins: [],
}
