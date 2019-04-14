const path = require('path');

module.exports = {
  entry: {
    app: './src/its.js',
    options: './src/options.js',
  },
  mode: 'development',
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
