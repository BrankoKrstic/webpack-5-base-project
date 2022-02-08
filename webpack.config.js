const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const path = require('path');

const options = {
    extensions: ['ts', 'js'],
    exclude: 'node_modules',
}

module.exports = {
    mode: "development",
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: "/\.js?$/",
                exclude: "/node_modules/",
                use: ["babel-loader"]
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
    plugins: [new ESLintWebpackPlugin(options)]
}
