const webpackConfig = require('../webpack.config')
const merge = require('webpack-merge')
const HashedModuleIdsPlugin = require('./HashedModuleIdsPlugin')

module.exports = merge(webpackConfig, {
  output: { path: `${__dirname}/build` },
  plugins: [
    new HashedModuleIdsPlugin()
  ]
})
