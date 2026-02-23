module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4ABDAC',
        secondary: '#4ABDAC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      maxWidth: {
        container: '1170px',
      },
      screens: {
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1800px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
