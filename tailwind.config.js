/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'skew-scroll': 'skew-scroll 20s linear infinite',
      },
      keyframes: {
        'skew-scroll': {
          '0%': {
            transform: 'rotateX(20deg) rotateZ(-20deg) skewX(20deg)',
          },
          '100%': {
            transform: 'rotateX(20deg) rotateZ(-20deg) skewX(20deg) translateY(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
}