const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/',
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        // loader: 'style-loader'
                        // loader: 'style-loader/url'
                        // loader: 'style-loader/useable'

                        loader: 'style-loader',
                        options: {
                            // insertInto: '#app',
                            singleton: true,
                            transform: './css.transform.js'
                        }
                    },
                    {
                        // loader: 'css-loader'
                        // loader: 'file-loader'
                        // loader: 'css-loader'

                        loader: 'css-loader',
                        options: {
                            // minimize: true
                            modules: true,
                            localIdentName: '[path][name]_[local]_[hash:base64:5]'
                        }
                    }
                ]
            }
        ]
    }
};