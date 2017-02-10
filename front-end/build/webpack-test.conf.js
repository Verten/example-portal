const webpack = require('webpack');
const path = require('path')
const autoprefixer = require('autoprefixer');
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
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.jsx?$/,
        include: path.resolve('src/'),
        loader: 'isparta-loader'
      },
      {
        test: /(\.css|\.scss)$/,
        loaders: 'css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&minetype=image/svg+xml',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&minetype=application/octet-stream',
      },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]' },
    ]
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer]
      },
      debug: true
    })
  ],
};