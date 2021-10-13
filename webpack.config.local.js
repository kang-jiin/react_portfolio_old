const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        chunkFilename: 'static/js/[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(PNG|png|jpg|woff|woff2|eot|ttf|svg|gif|otf)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        new webpack.DefinePlugin({
            ENV_MODE: JSON.stringify('local')
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
        historyApiFallback: true
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.json', 'css'],
        alias: {
            src: path.resolve(__dirname, './src'),
            assets: path.resolve(__dirname, './src/assets'),
            components: path.resolve(__dirname, './src/components'),
            views: path.resolve(__dirname, './src/views')
        }
    }
};