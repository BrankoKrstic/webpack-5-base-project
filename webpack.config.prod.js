const path = require('path');
const CleanPlugin = require("clean-webpack-plugin")
const ESLintWebpackPlugin = require("eslint-webpack-plugin");


const options = {
    extensions: ['js'],
    exclude: 'node_modules',
}

module.exports = {
    mode: "production",
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [/node_modules/],
                use: "babel-loader"
            },
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            },
        ],
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [new ESLintWebpackPlugin(options), new CleanPlugin.CleanWebpackPlugin()]
}
