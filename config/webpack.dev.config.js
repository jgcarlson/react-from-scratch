const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./../webpack.config.js');

base.entry.unshift('webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr');

base.devtool = 'inline-source-map';

base.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development')
}));

base.plugins.push(new webpack.HotModuleReplacementPlugin());
base.plugins.push(new webpack.NoEmitOnErrorsPlugin());
base.plugins.push(new HtmlWebpackPlugin({
  template: path.resolve('src/index.html')
}));

base.stats = {
  assets: false,
  cached: false,
  children: false,
  chunks: false,
  chunkModules: false,
  chunkOrigins: false,
  colors: true,
  depth: false,
  entrypoints: false,
  env: true,
  errors: true,
  errorDetails: true,
  hash: false,
  maxModules: 0,
  modules: false,
  moduleTrace: false,
  performance: true,
  providedExports: false,
  publicPath: true,
  reasons: true,
  source: false,
  timings: false,
  usedExports: false,
  version: true,
  warnings: true
};

module.exports = base;