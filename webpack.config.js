let path = require('path')
let webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry:'./src/main.js',
    devServer:{
      contentBase: './public',
      port: 8081,
      hotOnly: false,
      open: true
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:"bundle.[hash:8].js"
    },
    module:{
        rules:[
        ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      })
    ]
}