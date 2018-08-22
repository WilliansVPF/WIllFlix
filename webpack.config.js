const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
  }

};