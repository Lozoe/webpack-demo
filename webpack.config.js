var path = require('path')
var Webpack = require('webpack')
module.exports = {
    entry: {
        main: './src/foo',
        vendor: ['react']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name].[hash].js'
        filename: '[name].[chunkHash].js'
    },

    plugins:[
        new Webpack.NamedChunksPlugin(),
        
        new Webpack.NamedModulesPlugin(),

        new Webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
            minChunks: Infinity
        }),

        new Webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ]
}
