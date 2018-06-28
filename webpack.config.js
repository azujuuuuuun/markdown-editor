const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        use: [
          { 
            loader: "eslint-loader",
            options: {
              failOnWarning: true,
              failOnError: true,
              fix: true,
              cache: true,
            }
          },
        ]
      },
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HardSourceWebpackPlugin(),
  ],
};
