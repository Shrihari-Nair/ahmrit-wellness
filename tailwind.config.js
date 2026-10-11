/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep earthy brown/charcoal — primary text and dark UI elements.
        ink: '#3B2E22',
        charcoal: '#5A4838',
        // Restrained sage green accent — used sparingly (small labels, one underline).
        gold: {
          DEFAULT: '#748163',
          light: '#93A17F',
          dark: '#5C6850',
        },
        // Warm tan — secondary card/section fills.
        peach: {
          DEFAULT: '#EFE2CD',
          light: '#F5EDDF',
          dark: '#DFCBA8',
        },
        cream: '#FBF7F0',
        sand: '#F0E6D5',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 30px rgba(20, 17, 16, 0.08)',
      },
    },
  },
  plugins: [],
}
