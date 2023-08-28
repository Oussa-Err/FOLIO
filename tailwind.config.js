/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-slide-down': 'fade-slide-down ease-out 1s',
        'shakeHands': 'shakeHands 2s infinite'
      },
      keyframes: {
        'fade-slide-down': {
          '0%': { opacity: 0, transform: 'translateY(-4rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'shakeHands': {
          ' 0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg) ' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        },
      },
    },
  },
  plugins: [],
}
