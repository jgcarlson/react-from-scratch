require('dotenv').config();
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
  MAIN: path.resolve(__dirname, 'src'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
  context: __dirname,
  entry: [
    path.join(paths.MAIN, 'index')
  ],
  output: {
    path: paths.DIST,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: paths.MAIN,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        include: paths.MAIN,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',

              options: {
                sourceMap: true,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([paths.DIST], {watch: true}),
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
