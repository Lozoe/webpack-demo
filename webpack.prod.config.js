let HTMLWebpackPlugin = require('html-webpack-plugin')
let path = require('path')
const UglifyJs = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'production',

    entry: {
        'app': './src/index'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'index.html')
        })
    ],

    optimization: {
        // minimize: false
        minimizer: [
            // new UglifyJs({
            //     uglifyOptions: {
            //         keep_classnames: true,
            //         keep_fnames: true,

            //         ecma: 6,
            //         cache: true,
            //         parallel: true
            //     }
            // })
        ],

        runtimeChunk: true, // true, false, single, multiple

        splitChunks: {
            name: true,
            minSize: 0,
            cacheGroups: {
                preact: {
                    test: /preact/,   //  /preact/, /(preact)|(lodash)/ 全家桶
                    chunks: 'initial' // preact初始化时候就需要加载
                },
                lodash: {
                    test: /lodash/, 
                    chunks: 'all'
                }
            }
        }
    }
}