let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
let plugins = [
  new HtmlWebpackPlugin({
    title: 'app',
    template: './public/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[hash:8].css'
  })
];
if (process.env.NODE_ENV === 'production') {
  plugins.push(new CleanWebpackPlugin());
}
module.exports = {
  entry: './src/main.js',
  devServer: {
    port: 8081,
    hotOnly: false,
    open: true,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
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
