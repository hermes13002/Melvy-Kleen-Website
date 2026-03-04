/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#004080',
          'blue-dark': '#002d5a',
          'blue-light': '#005fb3',
          cyan: '#00BFBF',
          'cyan-light': '#00d9d9',
          'cyan-dark': '#009999',
          light: '#f0f6ff',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        morph: {
          '0%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
        },
      },
    },
  },
  plugins: [],
};
