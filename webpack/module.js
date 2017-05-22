'use strict';

let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: [
      {
          test: /\.ts$/,
          use: [
              { loader: 'awesome-typescript-loader' },
              { loader: 'angular2-template-loader' },
              {
                  loader: 'angular-router-loader',
                  options: {
                      aot: false,
                      genDir: 'app/aot'
                  }
              }
          ]
      },

      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
      },

      {
          test: /\.html$/,
          use: 'raw-loader'
      },

      {
          test: /\.css$/,
          include: path.resolve(process.cwd(), 'src/app'),
          loaders: ['to-string-loader', 'css-loader']
      },

      {
          test: /\.css$/,
          exclude: path.resolve(process.cwd(), 'src/app'),
          loader: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader'
          })
      },

      {
          test: /\.scss$/,
          include: path.resolve(process.cwd(), 'src/app'),
          exclude: /node_modules/,
          loaders: ['to-string-loader', 'css-loader', 'sass-loader'],
      },

      {
          test: /\.s[ac]ss$/,
          include: path.resolve(process.cwd(), 'src/sass'),
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              //resolve-url-loader may be chained before sass-loader if necessary
              use: ['css-loader', 'sass-loader']
          })
      },

      {
          test: /\.css$/,
          include: path.resolve(process.cwd(), 'src/css'),
          use: ['style-loader', 'css-loader']
      },

      {
          test: /\.(woff2?|ttf|eot|svg|otf)$/,
          loader: 'file-loader',
          options: {
              name: 'font/[name].[hash].[ext]'
          }

      },

      {
          test: /\.(png|jpe?g|gif)$/,
          loaders: [
              {
                  loader: 'file-loader',
                  options: {
                      name: 'images/[name].[hash].[ext]'
                  }
              },

              'img-loader'
          ]
      }
  ]
};
