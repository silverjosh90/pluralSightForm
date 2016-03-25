module.exports = {
  entry: "./public/js/components/render.js",

  output: {
    filename: 'public/app.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react']
      }
    }
    ]
  }
}
