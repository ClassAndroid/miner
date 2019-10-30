const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtraxtPlugin = require('mini-css-extract-plugin');

module.exports = {
    devServer: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'ws://hometask.eg1236.com/game1:3000',
                ws: true
            },
        },
    },
    entry: {
        app: './src/js/main.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtraxtPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: 'src/postcss.config.js' } }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtraxtPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: 'src/postcss.config.js' } }
                    }
                ]
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtraxtPlugin({
            filename: '[name].css'
        })
    ]
};