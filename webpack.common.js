require('dotenv').config()
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: {
        'home/index': './widgets/Home/index.js',
        'article-details/index': './widgets/ArticleDetails/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: ''
    },
    cache: true,
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin(),
        new CopyPlugin({
            patterns: [{ from: path.resolve(__dirname, 'resource/'), to: path.resolve(__dirname, 'public') }]
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    name: 'chunk-vendors',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial'
                },
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            }
        },
        usedExports: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false
            }),
            new CssMinimizerPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    }
}
