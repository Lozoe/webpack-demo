let path = require('path')

module.exports = {
    mode: 'production', // production, development, none
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[chunkHash:5].min.js'
    }
}