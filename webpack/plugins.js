'use strict';
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let isProduction = (process.env.NODE_ENV === 'production');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

let webpack = require('webpack');
let path = require('path');
module.exports = [
    new ExtractTextPlugin('[name].css'),

    new webpack.LoaderOptionsPlugin({
        minimize: isProduction
    }),

    new CleanWebpackPlugin(['dist'], {
        root: __dirname,
        verbose: true,
        dry: false
    }),

    // jQuery, Tether
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),
    new webpack.ProgressPlugin(),
    new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)@angular/,
        path.join(process.cwd(), 'src/app')
    ),

    new CopyWebpackPlugin([
        { from: './src/index.html' },
        { from: './src/assets', to: './assets' }
    ]),
];
