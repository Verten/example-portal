const webpack = require('webpack');
module.exports = {
  debug: true,
  devtool: 'source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {},
      debug: true
    })
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['stage-0', 'es2015', 'react']
        }
      },
      {
        test: /(\.css|\.scss)$/,
        loaders: 'css?sourceMap!postcss!sass?sourceMap'
      }
    ]
  }
};