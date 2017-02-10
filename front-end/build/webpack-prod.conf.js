const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FailPlugin = require('webpack-fail-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss'],
  },
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!sass-loader!postcss-loader'),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10&name=static/images/[hash].[ext]?[hash]&minetype=image/svg+xml',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&name=static/font/[hash].[ext]?[hash]&minetype=application/octet-stream',
      },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=static/images/[name].[ext]' },
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    FailPlugin,
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new ExtractTextPlugin('index-[contenthash].css', {
      allChunks: true,
      disable: false
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer]
      },
      debug: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { unused: true, dead_code: true, warnings: false } // eslint-disable-line camelcase
    })
  ],
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name]-[hash].js'
  },
  entry: {
    app: `./${conf.path.src('index')}`
  }
};
