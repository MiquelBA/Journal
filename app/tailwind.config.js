/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF69B4', // Rosa
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#9370DB', // Púrpura
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#FF4136',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#FFB6C1', // Rosa claro
          foreground: '#000000',
        },
        background: '#FFF0F5', // Lavanda muy claro
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000',
        },
      },
    },
  },
  plugins: [],
}
