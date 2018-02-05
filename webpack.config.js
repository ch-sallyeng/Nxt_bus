const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './client/src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist'),
    publicPath: './client/dist',
  },
  module: {
    loaders: [
      {
        test: [/\.es6$/, /\.jsx?/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.es6'],
  },
};
