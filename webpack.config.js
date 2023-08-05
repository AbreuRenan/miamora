const path = require('path');

module.exports = {
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: './_js/app.js',
  }
  };

