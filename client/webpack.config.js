const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
  './index.js' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: __dirname
      }
    ]
  },
  devServer: {
    contentBase: '../public'
  },
  plugins: [
  ]
};