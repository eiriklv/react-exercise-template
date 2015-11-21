var webpackConfig = require('./webpack.config.js');

var exerciseBundle = process.argv[6] || '';

module.exports = function (config) {
  config.set({
    // Run tests in Chrome and Firefox
    browsers: ['Firefox', 'Chrome'],

    // Just run once by default
    singleRun: true,

    // Use the mocha test framework
    frameworks: ['mocha'],

    // Just load this file
    files: [
      'tests/chapter' + exerciseBundle + '/__test-bundle.js',
    ],

    // Preprocess with webpack and our sourcemap loader
    preprocessors: {
      ['tests/chapter' + exerciseBundle + '/__test-bundle.js']: ['webpack', 'sourcemap']
    },

    // Report results in this format
    reporters: ['mocha'],

    // Reporter options
    mochaReporter: {
      colors: {
        success: 'green',
        info: 'bgGreen',
        warning: 'black',
        error: 'magenta'
      }
    },

    // Kind of a copy of your webpack config
    webpack: {
      devtool: 'inline-source-map',

      module: {
        loaders: webpackConfig.module.loaders
      }
    },

    // Please don't spam the console when running in karma!
    webpackServer: {
      noInfo: true
    }
  });
};
