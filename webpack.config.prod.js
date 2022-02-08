const path = require('path');
const CleanPlugin = require("clean-webpack-plugin")
const ESLintWebpackPlugin = require("eslint-webpack-plugin");


const options = {
    extensions: ['js'],
    exclude: 'node_modules',
    emitError: true,
    failOnError: true
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
                test: "/\.js?$/",
                exclude: "/node_modules/",
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: '/\.tsx?$/',
                use: 'ts-loader',
                exclude: '/node_modules/',
            },
        ],
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [new ESLintWebpackPlugin(options), new CleanPlugin.CleanWebpackPlugin()]
}
