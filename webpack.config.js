let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
let plugins = [
  new CopyPlugin({
    patterns: [
      { from: "public", to: path.join(__dirname, 'dist') },
    ],
  }),
  new HtmlWebpackPlugin({
    title: 'app',
    template: './public/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[hash:8].css',
  }),
];
let entry = ['./src/main.js'];
let devtool = false
if (process.env.NODE_ENV === 'production') {
  plugins.push(new CleanWebpackPlugin());
} else {
  entry.push('./src/test.js');
  devtool = 'source-map'
}
module.exports = {
  entry,
  devServer: {
    port: 8081,
    hotOnly: false,
    open: true,
  },
  devtool,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif｜zip)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:16].[ext]',
              outputPath: 'assets/imgs',
            },
          },
        ],
      },
    ],
  },
  plugins,
};
