const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfig = require('../webpack.config')
const HashedModuleIdsPlugin = require('./HashedModuleIdsPlugin')

module.exports = merge(webpackConfig, {
  output: { path: `${__dirname}/build` },
  recordsPath: `${__dirname}/recordsPath.json`,
  plugins: [
    new HashedModuleIdsPlugin()
  ]
})
