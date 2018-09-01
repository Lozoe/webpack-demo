var path = require('path')
var Webpack = require('webpack')
var PurifyCSS = require('purifycss-webpack')
var glob = require('glob-all')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        app: './src/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: {
                        loader: 'style-loader',
                        options: { singleton: true }
                    },
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            }
        ]
    },

    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css',
            allChunks: false
        }),

        // CSS Tree shaking
        new PurifyCSS({
            paths: glob.sync([
                path.join(__dirname, './*.html'),
                path.join(__dirname, './src/*.js')
            ])
        }),

        // JS Tree shaking
        new Webpack.optimize.UglifyJsPlugin()
    ]
}
// const path = require('path');
// const Webpack = require('webpack');
// const PurifyCSS = require('purifycss-webpack');
// const glob = require('glob-all');
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

// module.exports = {
//     entry: {
//         app: './src/app.js'
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         publicPath: './dist/',
//         filename: '[name].bundle.js',
//         chunkFilename: '[name].bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.less/,
//                 use: ExtractTextWebpackPlugin.extract({
//                     fallback: {
//                         loader: 'style-loader',
//                         options: {
//                             // insertInto: '#app',
//                             singleton: true,
//                             transform: './css.transform.js'
//                         }
//                     },
//                     use: [
//                         {
//                             loader: 'css-loader',
//                             options: {
//                                 // minimize: true,
//                                 // modules: true,
//                                 localIdentName: '[path][name]_[local]_[hash:base64:5]'
//                             }
//                         },
//                         {
//                             loader: 'postcss-loader',
//                             options: {
//                                 ident: 'postcss',
//                                 plugins: [
//                                     // require('autoprefixer')(),
//                                     require('postcss-cssnext')()
//                                 ]
//                             }
//                         },
//                         {
//                             loader: 'less-loader'
//                         }
//                     ]
//                 })
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     {
//                         loader: 'style-loader',
//                     },
//                     {
//                         loader: 'css-loader'
//                     },
//                     {
//                         loader: 'sass-loader'
//                     }
//                 ]
//             },
//             {
//                 test: /\.js$/,
//                 use: [
//                     {
//                         loader: 'babel-loader',
//                         options: {
//                             presets: ['env'],
//                             plugins: ['lodash']
//                         }
//                     }
//                 ]
//             }
//         ]
//     },
//     plugins: [
//         new ExtractTextWebpackPlugin({
//             filename: '[name].min.css',
//             allChunks: false // false 只会提取初始化的css(不加载异步加载的css)
//         }),

//         // CSS Tree shaking
//         new PurifyCSS({
//             paths: glob.sync([
//                 path.join(__dirname, './*.html'),
//                 path.join(__dirname, './src/*.js')
//             ])
//         }),

//         // JS Tree shaking
//         new Webpack.optimize.UglifyJsPlugin()
//     ]
// };