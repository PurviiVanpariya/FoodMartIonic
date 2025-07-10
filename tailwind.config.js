module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // adjust according to your project
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--ion-color-primary)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};