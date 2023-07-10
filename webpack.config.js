const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve, join } = require('path');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'chrome/icons', to: 'icons' },
        { from: 'chrome/manifest.json', to: 'manifest.json' },
        { from: 'src/misc/bg.js', to: 'bg.js' }
      ]
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  output: {
    chunkLoading: false,
    wasmLoading: false,
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  target: ['web', 'es5'],
  devtool: 'cheap-module-source-map'
};
