var path = require('path')
var webpack = require('webpack')

// webpack 环境上下文是当前工作目录|，从当前工作目录去找entry；输出目录要是绝对路径
module.exports = {
  entry: './dev/index.js',
  output: {
    path: path.resolve(__dirname, './dev'),
    publicPath: '/dev/',
    filename: 'build.js' //output to memory 
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  devServer: {
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}