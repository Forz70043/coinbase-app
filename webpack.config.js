const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new NodemonPlugin()
    ]
}