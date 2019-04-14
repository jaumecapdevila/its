const path = require('path');

module.exports = {
  entry: './src/its.js',
  mode: 'development',
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  output: {
    filename: 'assets/js/its.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
