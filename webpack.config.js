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
        // publicPath: 'dist/',
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
                            limit: 5000,
                            publicPath: '',
                            outputPath: 'dist/',
                            useRelativePath: true
                        }
                    }
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
