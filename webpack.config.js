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
                        loader: 'style-loader/url'
                    },
                    {
                        // loader: 'css-loader'
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    }
};