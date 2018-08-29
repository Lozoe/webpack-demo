const webpack = require('webpack');
const path = require('path');
// module.exports = {
//     entry: {
//         'pageA': './src/pageA',
//         'pageB': './src/pageB'
//     },

//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: '[name].bundle.js',
//         chunkFilename: '[name].chunk.js'
//     },

//     optimization: {
//         splitChunks: {
//             chunks: 'async'
//         },
//         runtimeChunk: true
//     }
// }

module.exports = {
    entry: {
        'pageA': './src/pageA',
        'pageB': './src/pageB',
        'vendor': ['lodash']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },

    plugins: [
        new webpack.optimize.SplitChunksPlugin({
            // chunks: "initial",
            names: ['vendor'],
            minChunks: Infinity
        }),
        // new webpack.optimize.SplitChunksPlugin({
        //     cacheGroups: {
        //         default: {
        //             minChunks: 2,
        //             priority: -20,
        //             reuseExistingChunk: true,
        //         },
        //         //打包重复出现的代码
        //         vendor: {
        //             chunks: 'initial',
        //             minChunks: 2,
        //             maxInitialRequests: 5, // The default limit is too small to showcase the effect
        //             minSize: 0, // This is example is too small to create commons chunks
        //             name: 'vendor'
        //         },
        //         //打包第三方类库
        //         commons: {
        //             name: "commons",
        //             chunks: "initial",
        //             minChunks: Infinity
        //         }
        //     }
        // })

        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "common",
        //     minChunks: 2
        // })
    ],

    // optimization: {
    //     splitChunks: {
    //         name: true,
    //         chunks: 'async',
    //         minChunks: 2
    //     }
    // },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    }
}