/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        accent: '#ff5722',
        glass: 'rgba(255, 255, 255, 0.7)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'lg': '12px',
      },
    },
  },
  plugins: [],
}

