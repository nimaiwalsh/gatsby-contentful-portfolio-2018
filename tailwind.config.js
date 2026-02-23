module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4ABDAC',
        secondary: '#FC4A1A',
        'secondary-highlight': '#F7B733',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
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
