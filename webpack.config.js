module.exports = {
  entry: './src/main.js',
  output: {
    path: '.',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel'
      }
    ]
  }
}
