var webpack = require('webpack')
var PurifyWebpack = require('purifycss-webpack')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlInlinkChunkPlugin = require('html-webpack-inline-chunk-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var path = require('path')
var glob = require('glob-all')

var extractLess = new ExtractTextWebpackPlugin({
    filename: 'css/[name]-bundle-[hash:5].css',
})

module.exports = {
    entry: {
        app: './src/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[name]-bundle-[hash:5].js'
        // filename: (bundle) => {
        //     console.log(bundle)
        //     return 'aaa.js'
        // }
    },

    // devtool: 'eval',
    // devtool: 'source-map',
    devtool: 'cheap-module-source-map',

    devServer: {
        port: 9001,
        overlay: true,
        proxy: {
            // '/api': {
            //     target: 'https://m.weibo.cn',
            //     changeOrigin: true,
            //     logLevel: 'debug',
            // } 
            '/': {
                target: 'https://m.weibo.cn',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^comments': '/api/comments'
                },
                headers: {
                    'Cookie': '_T_WM=044532f80b8fabc6dc347fd417c33202; ALF=1517569014; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhQljxrwvAfCCZa_p.u8pB.5JpX5K-hUgL.Fo2cS0qRehBcSKM2dJLoI7HpqJ8XwBtt; SCF=AkQsXaaTywl0RziwnumQ0tVE_xW5udcpoGP43q7eb2tFW9lXRc4bVNOn9N5m_ZKwFc-Q2r4Hz5oMBAbVJuhI1uk.; SUB=_2A253SLARDeRhGedI7FQZ8CrKzjuIHXVUstBZrDV6PUJbktANLUXEkW1NVtAHXD7nHQtwFntsDZsmqj2nB17cClnd; SUHB=0k1zt1ckxYq3c6; H5_INDEX_TITLE=qbaty; H5_INDEX=0_all; WEIBOCN_FROM=1110006030; M_WEIBOCN_PARAMS=oid%3D4193586758833502%26luicode%3D20000061%26lfid%3D4193594443440569%26uicode%3D20000061%26fid%3D4193586758833502'
                }
            }
            // '/aj': {
            //     target: 'https://weibo.com',
            //     changeOrigin: true,
            //     logLevel: 'debug',
            // } 
        },
        hot: true,
        hotOnly: true, // 不通过触发全局更新触发更新
        inline: true, // 指定模式 是否在浏览器显示打包信息
        // historyApiFallback: true
        // HTML5 histroy API rewrite
        historyApiFallback: {
            rewrites: [
                {   
                    // 什么样的路径
                    from: 'page/a',
                    // 转去哪里
                    to: 'pages/a.html'
                },
                {   
                    // 什么样的路径
                    from: /^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
                    // 转去哪里
                    to: function (context) {
                        return '/' + context.match[1] + context.match[2] + '.html'
                    }
                }
            ]
        }
    },

    resolve: {
        alias: {
            jquery$: path.resolve(__dirname, 'src/libs/jquery.min.js')
        }
    },

    module: {
        rules: [
            {
                test:/\.js$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'src/libs')],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            formatter: require('eslint-friendly-formatter')
                        }
                    }
                ]
            },

            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            // singleton: true,
                            sourceMap: true
                            // transform: './css.transform.js'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true
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
                            sourceMap: true,
                            plugins: [
                                // require('postcss-sprites')({
                                //     spritePath: 'dist/assets/imgs/sprites',
                                //     retina: true
                                // }),      
                                require('postcss-cssnext')()
                            ]
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },

            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '',
                            outputPath: 'dist/',
                            useRelativePath: true
                        }
                    }
                    // {
                    //     loader: 'url-loader',
                    //     options: {
                    //         name: '[name]-[hash:5].[ext]',
                    //         limit: 1000,
                    //         outputPath: 'assets/imgs/'
                    //     }
                    // },
                    // {
                    //     loader: 'img-loader',
                    //     options: {
                    //         pngquant: {
                    //             quality: 80
                    //         }
                    //     }
                    // }
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

            // {
            //     test: path.resolve(__dirname, 'src/app.js'),
            //     use: [
            //         {
            //             loader: 'imports-loader',
            //             options: {
            //                 $: 'jquery'
            //             }
            //         }
            //     ]
            // },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src', 'img:data-src']
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        extractLess,
        new PurifyWebpack({
            paths: glob.sync([
                './*.html',
                './src/*.js'
            ])
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),

        new HtmlInlinkChunkPlugin({
            inlineChunks: ['manifest']
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                collapseWhitespace: true
            }
        }),

        // new webpack.optimize.UglifyJsPlugin(),

        new CleanWebpackPlugin(['dist']),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),

        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
}