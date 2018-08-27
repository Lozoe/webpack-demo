const path = require('path');
module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        // filename: './dist/[name].[hash:5].js'
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: '/node_modules/'
            }
        ]
    }
}

// module.exports = {
//     entry: {
//         app: './app.js'
//     },
//     output: {
//         filename: './dist/[name].[hash:5].js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         "presets": [
//                             ["@babel/preset-env", {
//                                 "targets": {
//                                     "browsers": ["last 2 versions"]
//                                 }
//                             }]
//                         ]
//                     }
//                 },
//                 exclude: '/node_modules/'
//             }
//         ]
//     }
// }
