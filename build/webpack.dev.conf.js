const webpack = require('webpack')
const proxy = require('./proxy')
const historyFallback = require('./historyfallback')

module.exports = {
    devtool: 'cheap-module-source-map',

    // devServer: {
    //     port: 9001,
    //     overlay: true,
    //     hot: true,
    //     hotOnly: true,

    //     proxy: proxy,
    //     historyApiFallback: historyFallback
    // },

    devServer: {
        port: 9001,
        overlay: true,
        proxy: proxy,
        hot: true,
        hotOnly: true, // 不通过触发全局更新触发更新
        inline: true, // 指定模式 是否在浏览器显示打包信息
        // historyApiFallback: true
        // HTML5 histroy API rewrite
        historyApiFallback: historyFallback
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin(),
    ]
}