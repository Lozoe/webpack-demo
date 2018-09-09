var path = require('path')
var Webpack = require('webpack')
var PurifyCSS = require('purifycss-webpack')
var glob = require('glob-all')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlInlinkChunkPlugin = require('html-webpack-inline-chunk-plugin')

// var extractLess = new ExtractTextWebpackPlugin({
//     // filename: 'css/[name]-bundle-[hash:5].css',
//     filename: 'css/[name].bundle.css',
// })

module.exports = {
    entry: {
        app: './src/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: 'dist/',
        // publicPath: '/',
        filename: '[name]-bundle-[hash:5].js',
        // filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
        
    },

    resolve: {
        alias: {
            jquery$: path.resolve(__dirname, 'src/libs/jquery.min.js') //$ 确定只是把jquery关键字解析到某一个目录的文件下，不是解析到某一个目录 确切匹配
        }
    },

    module: {
        rules: [
            {
                test:/\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract(
                    {
                        fallback: {
                            loader: 'style-loader',
                            options: {
                                singleton: true,
                                // transform: './css.transform.js'
                            }
                        },
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 2
                                    // minimize: true,
                                    // modules: true,
                                    // localIdentName: '[path][name]_[local]_[hash:base64:5]'
                                }
                                // loader: 'file-loader'
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    ident: 'postcss',
                                    plugins: [
                                        require('postcss-sprites')({
                                            spritePath: 'dist/assets/imgs/sprites',
                                            retina: true
                                        }),    
                                        require('postcss-cssnext')()
                                    ]
                                }
                            },
                            {
                                loader: 'less-loader'
                            }
                        ]
                    })
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         // name: '[name]-[hash:5].[ext]',
                    //         // limit: 1000,
                    //         // publicPath: '',
                    //         outputPath: 'imagesa',
                    //         useRelativePath: true
                    //     }
                    // }
                    {
                        loader: 'url-loader',
                        options: {
                            // name: '[name]-[hash:5].[ext]',
                            /* name: '[name].min.[ext]',
                            limit: 5000,
                            publicPath: '',
                            outputPath: 'dist/', // output publicPath
                            useRelativePath: true */

                            name: '[name].min.[ext]',
                            limit: 1000,
                            outputPath: 'assets/imgs/'
                        }
                    },
                    {
                        loader: 'img-loader',
                        options: {
                            pngquant: {
                                quality: 80
                            }
                        }
                    }
                ]
            },
            {
                test:/\.(eot|woff2?|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash:5].[ext]',
                            limit: 5000,
                            publicPath: '',
                            outputPath: 'dist/',
                            useRelativePath: true
                        }
                    }
                ]
            },
            {
                test: path.resolve(__dirname, 'src/app.js'),
                use: [
                    {
                        loader: 'imports-loader',
                        options: {
                            $: 'jquery'
                        }
                    }
                ]
            },
            // {
            //     test:/\.html$/,
            //     use: [
            //         {
            //             loader: 'html-loader',
            //             options: {
            //                 attrs: ['img:src', 'img:data-src']
            //             }
            //         }
            //     ]
            // },
        ]
    },

    plugins: [
        // extractLess,
        new ExtractTextWebpackPlugin({
            filename: '[name]-bundle-[hash:5].css',
            // filename: '[name].bundle.css',
            allChunks: false
        }),

        // CSS Tree shaking
        new PurifyCSS({
            paths: glob.sync([
                path.join(__dirname, './*.html'),
                path.join(__dirname, './src/*.js')
            ])
        }),

        new Webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),

        new HtmlInlinkChunkPlugin({
            inlineChunks: ['manifest']
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            // chunks: ['app'],
            minify: {
                collapseWhitespace: true
            }
            // inject: false
        }),

        // new Webpack.ProvidePlugin({
        //     $: 'jquery'
        // }),

        // JS Tree shaking
        new Webpack.optimize.UglifyJsPlugin()
    ]
}
