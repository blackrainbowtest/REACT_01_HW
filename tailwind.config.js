/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-image': "url('/src/static/images/main-BG.png')",
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'serviceBG': '#EDF3F3',
      'serviceTitle': '#1B424C',
      'serviceText': '#7F7A7A',
      'buttonBgDark': "#2A6877",
      'buttonBgDarkHover': "#19333A",
      'buttonDarkText': '#1B424C',
    },
  },
  plugins: [],
}
