var webpack = require('webpack');
var path = require('path');

// directories
var jsSrc = path.join(__dirname, '/src/')
var testsDir = path.join(__dirname, '/tests/')
var publicDir = path.join(__dirname, '/public/')

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    'bundle-chapter-1': './src/chapter-1/__entry.js'
  },

  output: {
    path: publicDir,
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: require.resolve('react'),
      loader: 'expose?React'
    }, {
      test: /\.jsx?$/,
      loaders:  ['babel'],
      include: [jsSrc, testsDir]
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  }
};
