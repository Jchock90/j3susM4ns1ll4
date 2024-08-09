const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        violet: '#8a2be2',
        darkGray: '#1c1c1e',
        lightGray: '#d3d3d3',
      },
      backgroundImage: theme => ({
/*         'abstract-pattern': "url('path/to/your/abstract-image.png')",
 */      }),
    },
  },
  plugins: [],
}
