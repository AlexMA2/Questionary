module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/ui/*.jsx',
    './src/components/*.jsx'
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        white: '#fafafa',
        blue: '#1fb6ff',
        purple: '#7e5bef',
        orange: '#ff7849',
        'orange-dark': '#ff6f00',
        'orange-light': '#ff9f00',
        green: '#13ce66',
        'green-dark': '#0f9b4e',
        'green-light': '#e6fffa',
        gray: '#f0f0f0',
        'gray-light': '#d3dce6',
        'gray-dark': '#b3b7bd'
      }
    }
  },
  plugins: []
}
