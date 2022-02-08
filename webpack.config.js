const path = require('path')

module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}