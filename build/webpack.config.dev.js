'use strict'

//no browser refresh during hot reload
const webpack = require('webpack')

//hot reload.. auto browser update after change
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    mode: 'development',
    entry: [
        './src/app.js'
    ],

    devServer: {
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader', 'css-loader' ]// for loading css files
            },
            {
                test: /\.styl$/,
                loaders: [ 'style-loader', 'css-loader', 'stylus-loader' ]
            },
            {
                test: /\.js$/,
                loader: ['babel-loader'] //after vue-loader // for converting es6 to es5
            }
        ]
    },

    plugins: [
        //no refresh during hot reload
        new webpack.HotModuleReplacementPlugin(),
        //auto-injecting css/js file into index.html
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
}