var webpack = require('webpack')
var path = require('path')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: {
        'pageA': './src/pageA',
        'pageB': './src/pageB',
        // 'vendor': ['lodash']
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },

    plugins: [
        new BundleAnalyzerPlugin(),
        // 提取异步模块，如果好几个模块是异步加载的 异步模块可以不指定name
        // 就提取这些异步加载的模块之间的公共代码
        // new webpack.optimize.CommonsChunkPlugin({
        //     async: 'async-common',
        //     children: true,
        //     minChunks: 2
        // }),

        // // 单独打包 vendor 和 webpack runtime(manifest)
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor', 'manifest'],
        //     minChunks: Infinity
        // })

        // 单独打包 vendor 和 webpack runtime(manifest)
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: 2
        })
    ]
}