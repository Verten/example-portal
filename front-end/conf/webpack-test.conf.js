const webpack = require('webpack');
module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss'],
  },
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
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};