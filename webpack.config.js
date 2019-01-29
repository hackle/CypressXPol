module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'ts-loader',
        }],
      },
    ],
  },
}
