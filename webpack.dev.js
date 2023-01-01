const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: 'development',
    stats: 'verbose',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js'
    },
    plugins: [new MiniCssExtractPlugin()]
})
