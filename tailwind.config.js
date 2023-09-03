/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        'fade-slide-down': 'fade-slide-down ease-out 1.4s',
        'shakeHands': 'shakeHands 2s infinite',
        'navLinks': 'navLinks ease-in-out 0.5s',
        'navLinks-A': 'navLinks-A ease-in-out 0.7s',
        'navLinks-B': 'navLinks-B ease-in-out 0.9s',
        'navLinks-C': 'navLinks-C ease-in-out 1.2s',
        'bg-toggle': 'bg-toggle ease-in-out 0.4s',
        'navLinks-toggle': 'navLinks-toggle ease-out 0.5s',
        'navLinks-toggle-A': 'navLinks-toggle-A ease-in-out 0.8s ',
        'navLinks-toggle-B': 'navLinks-toggle-B ease-in-out 1.2s ',
        'navLinks-toggle-C': 'navLinks-toggle-C ease-in-out 1.4s ',
        'blue-block-slide': 'blue-block-slide ease-in-out 1.4s',
        'scrollTop': 'scrollTop ease-out 1s',
        'fade-out': 'fade-out ease-in 1s',
        'fade-out-toggleMenu': 'fade-out-toggleMenu ease-out 2s'
      },
      colors: {
        'bg-toggle-color': '#0E1012'
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
        'navLinks': {
          '0%': { opacity: 0, transform: 'translateY(4rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'navLinks-A': {
          '0%': { opacity: 0, transform: 'translateY(4rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'navLinks-B': {
          '0%': { opacity: 0, transform: 'translateY(4rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'navLinks-C': {
          '0%': { opacity: 0, transform: 'translateY(4rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'bg-toggle': {
          '0%': { opacity: 0, transform: 'translateX(-8rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        'navLinks-toggle': {
          '0%': { opacity: 0, transform: 'translateX(-2rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        'navLinks-toggle-A': {
          '0%': { opacity: 0, transform: 'translateX(-3rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        'navLinks-toggle-B': {
          '0%': { opacity: 0, transform: 'translateX(-4rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        'navLinks-toggle-C': {
          '0%': { opacity: 0, transform: 'translateX(-5rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        'blue-block-slide': {
          '0%': { opacity: 0, transform: 'translateX(-5rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        'scrollTop': {
          '0%': { opacity: 0},
          '100%': { opacity: 1 }
        },
        'fade-out': {
          '100%': { opacity: 1},
          '0%': {opacity: 0}
        },
        'fade-out-toggleMenu': {
          '100%': { opacity: 1},
          '0%': {opacity: 0}
        }
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}
