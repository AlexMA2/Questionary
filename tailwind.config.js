module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {    
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'white': '#fafafa' ,
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
       
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    }
  },
  plugins: [],
}
