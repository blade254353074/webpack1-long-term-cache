const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const urls = {
  index: path.resolve('src/index.js'),
  html: path.resolve('src/index.html')
}

module.exports = {
  entry: {
    libs: ['underscore'],
    vendor: ['es6-promise/auto', 'whatwg-fetch'],
    index: urls.index
  },
  output: {
    publicPath: '',
    filename: 'assets/js/[name].[chunkhash:8].js',
    chunkFilename: 'assets/js/[name].[chunkhash:8].js'
  },
  resolve: {
    alias: { 'babel-runtime/core-js/promise': 'es6-promise' }
  },
  module: {
    loaders: [{
      test: /\.jsx?$/i,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"production"' }}),
    new HtmlWebpackPlugin({
      template: urls.html,
      chunks: ['manifest', 'libs', 'vendor', 'index']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'libs', 'manifest'],
      minChunks: Infinity
    }),
    new BundleAnalyzerPlugin(),
  ]
}
