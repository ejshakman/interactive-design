module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      process.env.JEKYLL_ENV == 'production'
    ]
  }