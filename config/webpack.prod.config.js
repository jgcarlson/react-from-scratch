require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const base = require('./../webpack.config.js');

base.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
}));
base.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
base.plugins.push(new HtmlWebpackPlugin({
  template: path.join(path.resolve('src'), 'index.html'),
  filename: './../dist/index.html',
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  }
}));
base.plugins.push(new ImageminPlugin());
base.plugins.push(new FaviconsWebpackPlugin({
  emitStats: false,
  logo: path.join(path.resolve('src', 'assets/images/favicon.jpg'))
}));

module.exports = base;