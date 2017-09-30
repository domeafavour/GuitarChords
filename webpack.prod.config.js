const webpack = require('webpack')
const config = require('./webpack.config')

config.module.rules.push({
  test: /\.js$/,
  use: ['babel-loader']
})

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    }
  })
)

module.exports = config
