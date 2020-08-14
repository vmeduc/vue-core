const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'output')
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html',
        })
    ],
    devServer: {
        contentBase: './public',
        port: 8000
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}