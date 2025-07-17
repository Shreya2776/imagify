/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- this is the critical line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'pulse-slower': 'pulse 6s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
      boxShadow: {
        neon: '0 0 15px rgba(99, 102, 241, 0.7), 0 0 25px rgba(99, 102, 241, 0.4)',
      },
    },
  },
  plugins: [],
};
