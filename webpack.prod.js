const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: 'production',
    stats: 'errors-only',
    // devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle_[contenthash:8].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle_[contenthash:8].css'
        })
    ]
})
